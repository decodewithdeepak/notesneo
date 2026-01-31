import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Saved Notes - NotesNeo",
  description: "Quick access to your favorite study materials and saved notes.",
  keywords: ["saved notes", "favorites", "bookmarked notes", "my favorites"],
};

export default function FavoritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
