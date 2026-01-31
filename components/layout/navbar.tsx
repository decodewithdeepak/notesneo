"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";
import { Logo } from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import ThemeToggle from "@/components/ui/theme-toggle";
import { useFavorites } from "@/lib/contexts/favorites-context";
import { GithubRoundedIcon } from "@/components/icons/github";
import {
  Menu,
  X,
  Home,
  LayoutDashboard,
  BookOpen,
  Heart,
  Upload,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Types */
/* -------------------------------------------------------------------------- */

type NavLink = {
  href: string;
  label: string;
  icon: React.ElementType;
};

/* -------------------------------------------------------------------------- */
/* Constants */
/* -------------------------------------------------------------------------- */

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/notes", label: "Notes", icon: BookOpen },
  { href: "/favorites", label: "Favorites", icon: Heart },
  { href: "/upload-notes", label: "Upload Notes", icon: Upload },
];

/* -------------------------------------------------------------------------- */
/* Small Reusable Components */
/* -------------------------------------------------------------------------- */

function NavButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Button size="sm" variant="ghost" asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
}

function MobileNavItem({
  href,
  label,
  icon: Icon,
  onClick,
  rightSlot,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
  onClick?: () => void;
  rightSlot?: ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center justify-between h-12 rounded-md hover:bg-accent transition-colors"
    >
      <span className="flex items-center gap-3">
        <Icon className="h-5 w-5" />
        <span className="text-base">{label}</span>
      </span>
      {rightSlot}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* Navbar */
/* -------------------------------------------------------------------------- */

export default function Navbar() {
  const { favorites, isLoaded } = useFavorites();
  const [isOpen, setIsOpen] = useState(false);

  const favoritesCount =
    isLoaded && favorites.length > 0 ? favorites.length : null;

  return (
    <header className="fixed py-1 top-0 z-50 left-0 right-0 border-b bg-background/95 backdrop-blur">
      <div className="max-w-6xl px-2 sm:px-4 mx-auto">
        <nav className="flex h-14 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 font-semibold">
            <Logo size="xl" />
            <span className="text-base sm:text-xl tracking-tighter font-librebaskerville">
              NotesNeo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1.5 ml-auto">
            <NavButton href="/dashboard">Dashboard</NavButton>
            <NavButton href="/notes">Notes</NavButton>

            <NavButton href="/favorites">
              <span className="flex items-center gap-1.5">
                Favorites
                {favoritesCount && (
                  <span className="h-5 min-w-5 px-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center">
                    {favoritesCount}
                  </span>
                )}
              </span>
            </NavButton>

            <NavButton href="/upload-notes">Upload</NavButton>

            <div className="h-4 w-px bg-border" />

            <Button size="sm" variant="ghost" asChild className="gap-1.5">
              <Link
                href="https://github.com/decodewithdeepak/notesneo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubRoundedIcon className="h-5 w-5" />
                <span>Star</span>
              </Link>
            </Button>

            <div className="h-4 w-px bg-border" />

            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-1 ml-auto">
            <ThemeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-8 w-8" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[300px] p-0">
                <SheetHeader className="px-6 py-4 border-b">
                  <div className="flex items-center justify-between">
                    <SheetTitle>Menu</SheetTitle>
                    <SheetClose asChild>
                      <Button variant="secondary" size="icon" className="h-8 w-8">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>
                </SheetHeader>

                <nav className="flex flex-col px-6 gap-1">
                  {NAV_LINKS.map(({ href, label, icon }) => (
                    <MobileNavItem
                      key={href}
                      href={href}
                      label={label}
                      icon={icon}
                      onClick={() => setIsOpen(false)}
                      rightSlot={
                        label === "Favorites" && favoritesCount ? (
                          <span className="h-6 min-w-6 px-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center">
                            {favoritesCount}
                          </span>
                        ) : null
                      }
                    />
                  ))}

                  <div className="h-px bg-border my-3" />

                  <MobileNavItem
                    href="https://github.com/decodewithdeepak/notesneo"
                    label="Star on GitHub"
                    icon={GithubRoundedIcon}
                    onClick={() => setIsOpen(false)}
                  />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
