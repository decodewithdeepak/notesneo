"use client";

import Link from "next/link";
import { Heart, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Note } from "@/lib/types/note";
import { useFavorites } from "@/lib/contexts/favorites-context";

interface NoteCardProps {
  note: Note;
  className?: string;
  isFirstRowMobile?: boolean;
  isFirstRowTablet?: boolean;
  isFirstRowDesktop?: boolean;
  showFavoriteButton?: boolean;
}

export function NoteCard({
  note,
  className,
  isFirstRowMobile = false,
  isFirstRowTablet = false,
  isFirstRowDesktop = false,
  showFavoriteButton = true,
}: NoteCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const unitDisplay = typeof note.unit === "string" ? note.unit : `Unit ${note.unit}`;
  
  const getSubjectIcon = (subject: string): string => {
    const icons: Record<string, string> = {
      Python: "🐍",
      DBMS: "🗄️",
      DSA: "🌲",
      "Digital Electronics": "⚡",
      Economics: "📊",
      OS: "💻",
      OOPs: "🔷",
      WT: "🌐",
      COA: "🖥️",
      OB: "👥",
      "Computer Networks": "🌐",
      JAVA: "☕",
      DAA: "📈",
      SE: "⚙️",
      MP: "🔧",
      Programming: "💻",
      Management: "📋",
    };
    return icons[subject] || "📚";
  };

  // Branch color mapping
  const getBranchColor = (branch: string): string => {
    const colors: Record<string, string> = {
      BTech: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      BCA: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      BBA: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    };
    return (
      colors[branch] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    );
  };

  return (
    <div
      className={cn(
        "group relative border-r border-b border-border bg-background hover:bg-muted/50 hover:transition-all p-4 sm:p-6 overflow-hidden flex flex-col",
        isFirstRowMobile && "border-t",
        isFirstRowTablet && !isFirstRowMobile && "md:border-t",
        isFirstRowDesktop && !isFirstRowTablet && "lg:border-t",
        className,
      )}
    >
      {/* Decorative Concentric Circles - Top Left Corner */}
      <div className="absolute -top-8 -left-8 pointer-events-none">
        <div className="relative w-16 h-16">
          {/* Outer circle */}
          <div className="absolute inset-0 rounded-full border-2 border-border opacity-50"></div>
          {/* Middle circle */}
          <div className="absolute inset-2 rounded-full border-2 border-border opacity-70"></div>
          {/* Inner circle */}
          <div className="absolute inset-4 rounded-full border-2 border-border opacity-90"></div>
        </div>
      </div>

      {/* Header with subject icon and title */}
      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4 flex-shrink-0">
        {/* Subject Icon */}
        <div className="relative shrink-0 w-12 h-12 border border-border bg-muted flex items-center justify-center text-2xl">
          {getSubjectIcon(note.subject)}
        </div>

        {/* Title and metadata */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col min-w-0">
              <h3 className="line-clamp-1 overflow-hidden text-base sm:text-lg font-semibold text-foreground group-hover:text-primary leading-snug">
                {note.title}
              </h3>
              <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                <span>{note.subject}</span>
                <span>•</span>
                <span>Sem {note.semester}</span>
                <span>•</span>
                <span>{unitDisplay}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="grow mb-3 sm:mb-4">
        {note.description && (
          <p className="text-sm sm:text-base wrap-break-word line-clamp-2 text-muted-foreground leading-relaxed">
            {note.description}
          </p>
        )}
      </div>

      {/* Branch badge, favorite button, and download button */}
      <div className="flex items-center justify-between gap-3 shrink-0 mt-auto">
        <div className="flex items-center gap-2">
          <Badge
            className={cn("text-xs font-medium", getBranchColor(note.branch))}
          >
            {note.branch}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {unitDisplay}
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          {/* Favorite button */}
          {showFavoriteButton && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => toggleFavorite(note)}
              className={cn(
                "h-8 w-8 p-0 hover:scale-105 active:scale-95 transition-all",
                isFavorite(note.id)
                  ? "bg-red-50 border-red-200 hover:bg-red-100 dark:bg-red-950 dark:border-red-800 dark:hover:bg-red-900"
                  : "hover:border-red-200 hover:bg-red-50 dark:hover:border-red-800 dark:hover:bg-red-950",
              )}
              aria-label={
                isFavorite(note.id)
                  ? "Remove from favorites"
                  : "Add to favorites"
              }
            >
              <Heart
                className={cn(
                  "h-4 w-4 transition-all duration-200",
                  isFavorite(note.id)
                    ? "fill-red-500 text-red-500"
                    : "text-muted-foreground",
                )}
              />
            </Button>
          )}

          {/* View button */}
          <Button
            asChild
            size="sm"
            className="gap-2 hover:scale-95 transition-all"
          >
            <Link
              href={note.viewUrl}
              target={note.viewUrl.startsWith("/") ? undefined : "_blank"}
              rel={
                note.viewUrl.startsWith("/") ? undefined : "noopener noreferrer"
              }
              aria-label={`View ${note.title}`}
            >
              <span className="hidden sm:inline">View</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
