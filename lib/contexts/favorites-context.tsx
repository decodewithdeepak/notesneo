"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Note } from "@/lib/types/note";
import { loadFromStorage } from "@/lib/utils/local-storage";

const FAVORITES_KEY = "notesneo_favorites";

interface FavoritesContextType {
  favorites: Note[];
  addFavorite: (note: Note) => void;
  removeFavorite: (noteId: string) => void;
  toggleFavorite: (note: Note) => void;
  isFavorite: (noteId: string) => boolean;
  clearFavorites: () => void;
  isLoaded: boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Note[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loaded = loadFromStorage(
      FAVORITES_KEY,
      (data): data is Note[] => Array.isArray(data),
      [],
    );
    setFavorites(loaded);
    setIsLoaded(true);
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      } catch (error) {
        console.error("Error saving favorites:", error);
      }
    }
  }, [favorites, isLoaded]);

  const addFavorite = (note: Note) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === note.id) ? prev : [...prev, note],
    );
  };

  const removeFavorite = (noteId: string) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== noteId));
  };

  const toggleFavorite = (note: Note) => {
    if (isFavorite(note.id)) {
      removeFavorite(note.id);
    } else {
      addFavorite(note);
    }
  };

  const isFavorite = (noteId: string) =>
    favorites.some((fav) => fav.id === noteId);

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
        clearFavorites,
        isLoaded,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
