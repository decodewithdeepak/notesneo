import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upload Notes - NotesNeo",
  description:
    "Share your notes with the community and help fellow students. Upload study materials for review.",
  keywords: [
    "upload notes",
    "share notes",
    "contribute",
    "submit notes",
    "community",
  ],
};

export default function UploadNotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
