'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface UserProfile {
  branch: 'BTech' | 'BCA' | 'BBA' | null;
  semester: number | null;
  isSetup: boolean;
}

interface UserProfileContextType {
  profile: UserProfile;
  setProfile: (profile: UserProfile) => void;
  updateProfile: (branch: 'BTech' | 'BCA' | 'BBA', semester: number) => void;
  clearProfile: () => void;
  isLoaded: boolean;
}

const UserProfileContext = createContext<UserProfileContextType | undefined>(undefined);

const PROFILE_STORAGE_KEY = 'notesneo_user_profile';

const defaultProfile: UserProfile = {
  branch: null,
  semester: null,
  isSetup: false,
};

export function UserProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfileState] = useState<UserProfile>(defaultProfile);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load profile from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (storedProfile) {
        try {
          const parsed = JSON.parse(storedProfile);
          setProfileState(parsed);
        } catch (error) {
          console.error('Failed to parse user profile from localStorage', error);
          setProfileState(defaultProfile);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  // Save profile to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined' && isLoaded) {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
    }
  }, [profile, isLoaded]);

  const setProfile = (newProfile: UserProfile) => {
    setProfileState(newProfile);
  };

  const updateProfile = (branch: 'BTech' | 'BCA' | 'BBA', semester: number) => {
    setProfileState({
      branch,
      semester,
      isSetup: true,
    });
  };

  const clearProfile = () => {
    setProfileState(defaultProfile);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(PROFILE_STORAGE_KEY);
    }
  };

  return (
    <UserProfileContext.Provider
      value={{ profile, setProfile, updateProfile, clearProfile, isLoaded }}
    >
      {children}
    </UserProfileContext.Provider>
  );
}

export function useUserProfile() {
  const context = useContext(UserProfileContext);
  if (context === undefined) {
    throw new Error('useUserProfile must be used within a UserProfileProvider');
  }
  return context;
}

