import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User,
  GoogleAuthProvider, 
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../config/firebase';
import type { UserProfile } from '../types';

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  updateUserProfile: (data: { branch: string; semester: number }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Store user profiles in localStorage for persistence
const USER_PROFILES_KEY = 'user_profiles';
const getUserProfiles = () => {
  const stored = localStorage.getItem(USER_PROFILES_KEY);
  return stored ? JSON.parse(stored) : {};
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        // Load user profile from localStorage
        const profiles = getUserProfiles();
        const profile = profiles[user.uid];
        if (profile) {
          setUserProfile(profile);
        }
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        // Check if user has a profile
        const profiles = getUserProfiles();
        if (profiles[result.user.uid]) {
          setUserProfile(profiles[result.user.uid]);
        }
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      setUserProfile(null);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const updateUserProfile = async (data: { branch: string; semester: number }) => {
    if (!user) return;

    const newProfile: UserProfile = {
      uid: user.uid,
      ...data
    };

    // Update localStorage
    const profiles = getUserProfiles();
    profiles[user.uid] = newProfile;
    localStorage.setItem(USER_PROFILES_KEY, JSON.stringify(profiles));

    // Update state
    setUserProfile(newProfile);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        userProfile,
        loading, 
        signInWithGoogle, 
        signOut,
        updateUserProfile 
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}