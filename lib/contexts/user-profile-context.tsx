"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { loadFromStorage } from "@/lib/utils/local-storage";

export interface UserProfile {
  branch: "BTech" | "BCA" | "BBA" | null;
  semester: number | null;
  isSetup: boolean;
}

interface UserProfileContextType {
  profile: UserProfile;
  setProfile: (profile: UserProfile) => void;
  updateProfile: (branch: "BTech" | "BCA" | "BBA", semester: number) => void;
  clearProfile: () => void;
  isLoaded: boolean;
}

const UserProfileContext = createContext<UserProfileContextType | undefined>(
  undefined,
);

const PROFILE_STORAGE_KEY = "notesneo_user_profile";

const defaultProfile: UserProfile = {
  branch: null,
  semester: null,
  isSetup: false,
};

const isValidProfile = (data: any): data is UserProfile =>
  data &&
  typeof data === "object" &&
  (data.branch === null || ["BTech", "BCA", "BBA"].includes(data.branch)) &&
  (data.semester === null ||
    (typeof data.semester === "number" &&
      data.semester >= 1 &&
      data.semester <= 8)) &&
  typeof data.isSetup === "boolean";

export function UserProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfileState] = useState<UserProfile>(defaultProfile);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loaded = loadFromStorage(
      PROFILE_STORAGE_KEY,
      isValidProfile,
      defaultProfile,
    );
    setProfileState(loaded);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
    }
  }, [profile, isLoaded]);

  const setProfile = (newProfile: UserProfile) => {
    setProfileState(newProfile);
  };

  const updateProfile = (branch: "BTech" | "BCA" | "BBA", semester: number) => {
    setProfileState({
      branch,
      semester,
      isSetup: true,
    });
  };

  const clearProfile = () => {
    setProfileState(defaultProfile);
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
    throw new Error("useUserProfile must be used within a UserProfileProvider");
  }
  return context;
}
