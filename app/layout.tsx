import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import {
  Bricolage_Grotesque,
  Figtree,
  Geist,
  Geist_Mono,
  Libre_Baskerville,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { FavoritesProvider } from "@/lib/contexts/favorites-context";
import { UserProfileProvider } from "@/lib/contexts/user-profile-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NotesNeo - MDU Rohtak Notes for BTech, BCA & BBA Students",
  description:
    "Access 500+ high-quality notes aligned with Maharshi Dayanand University (MDU) Rohtak syllabus. Free downloads for BTech, BCA, and BBA students. Join 1000+ MDU students studying smarter with NotesNeo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable} ${libreBaskerville.variable} ${figtree.className} antialiased overflow-hidden h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <UserProfileProvider>
            <FavoritesProvider>
              <Navbar />
              <div className="fixed top-16 left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden">
                <div className="max-w-6xl min-w-0 mx-auto w-full px-2 sm:px-0">
                  {children}
                  <Footer />
                </div>
              </div>
            </FavoritesProvider>
          </UserProfileProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
