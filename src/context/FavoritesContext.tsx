import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Note } from '../types';

interface FavoritesContextType {
  favorites: Note[];
  addToFavorites: (note: Note) => void;
  removeFromFavorites: (noteId: string) => void;
  isFavorite: (noteId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Note[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (note: Note) => {
    setFavorites((prev) => [...prev, note]);
  };

  const removeFromFavorites = (noteId: string) => {
    setFavorites((prev) => prev.filter((note) => note.id !== noteId));
  };

  const isFavorite = (noteId: string) => {
    return favorites.some((note) => note.id === noteId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}