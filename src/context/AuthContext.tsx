import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  User,
  GoogleAuthProvider, 
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../config/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // Check for redirect result only on initial load
    if (location.pathname === '/login') {
      getRedirectResult(auth).then((result) => {
        if (result?.user) {
          navigate('/dashboard');
        }
      }).catch(console.error);
    }

    return unsubscribe;
  }, [navigate, location.pathname]);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      // Try popup first
      try {
        const result = await signInWithPopup(auth, provider);
        if (result.user) {
          navigate('/dashboard');
        }
      } catch (error: any) {
        // If popup is blocked, fall back to redirect
        if (error.code === 'auth/popup-blocked') {
          await signInWithRedirect(auth, provider);
        } else {
          throw error;
        }
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOut }}>
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