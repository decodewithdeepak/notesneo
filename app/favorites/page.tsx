"use client";

import { useState, useMemo } from "react";
import { NoteCard } from "@/components/search/note-card";
import { useFavorites } from "@/lib/hooks/useFavorites";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart, Search } from "lucide-react";
import Link from "next/link";

export default function FavoritesPage() {
  const { favorites, isLoaded } = useFavorites();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter favorites based on search
  const filteredFavorites = useMemo(() => {
    if (!searchQuery.trim()) return favorites;

    const query = searchQuery.toLowerCase();
    return favorites.filter(
      (note) =>
        note.title.toLowerCase().includes(query) ||
        note.description.toLowerCase().includes(query) ||
        note.subject.toLowerCase().includes(query) ||
        note.branch.toLowerCase().includes(query),
    );
  }, [favorites, searchQuery]);

  if (!isLoaded) {
    return (
      <main className="max-w-full flex flex-col gap-8 min-h-full">
        <div className="flex-1">
          <section className="min-w-full border-b border-border">
            <div className="max-w-full mx-auto px-0 py-8">
              <div className="animate-pulse">
                <div className="h-8 bg-muted rounded w-48 mb-2"></div>
                <div className="h-4 bg-muted rounded w-64"></div>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-full flex flex-col gap-8 min-h-full">
      <div className="flex-1">
        {/* Page Header */}
        <section className="min-w-full border-b border-border">
          <div className="max-w-full mx-auto px-0 py-8">
            <div className="flex items-center gap-3 mb-2">
              <Heart className="h-8 w-8 fill-red-500 text-red-500" />
              <h1 className="font-librebaskerville text-2xl sm:text-3xl font-semibold">
                My Saved Notes
              </h1>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Quick access to your favorite study materials
            </p>
          </div>
        </section>

        {/* Search Bar */}
        {favorites.length > 0 && (
          <section className="min-w-full border-x border-b border-border bg-background">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search saved notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </section>
        )}

        {/* Notes Display */}
        <section className="min-w-full">
          <div className="max-w-full mx-auto px-0 py-8">
            {favorites.length === 0 ? (
              // Empty State
              <div className="text-center py-16">
                <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h2 className="font-librebaskerville text-2xl mb-4">
                  No Saved Notes Yet
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Start browsing notes and click the heart icon to save your
                  favorites for quick access!
                </p>
                <Button asChild>
                  <Link href="/notes">Browse Notes</Link>
                </Button>
              </div>
            ) : filteredFavorites.length > 0 ? (
              // Notes Grid
              <>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">
                    {filteredFavorites.length}{" "}
                    {filteredFavorites.length === 1 ? "note" : "notes"} saved
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-border">
                  {filteredFavorites.map((note, index) => (
                    <NoteCard
                      key={note.id}
                      note={note}
                      isFirstRowMobile={index === 0}
                      isFirstRowTablet={index < 2}
                      isFirstRowDesktop={index < 3}
                    />
                  ))}
                </div>
              </>
            ) : (
              // No Search Results
              <div className="text-center py-16">
                <Search className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h2 className="font-librebaskerville text-2xl mb-4">
                  No Matches Found
                </h2>
                <p className="text-muted-foreground mb-4">
                  No saved notes match your search query
                </p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
