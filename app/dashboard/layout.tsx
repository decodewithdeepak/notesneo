import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Dashboard - NotesNeo",
  description: "Your personalized dashboard with notes tailored to your branch and semester.",
  keywords: ["dashboard", "my notes", "personalized notes", "student dashboard"],
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
