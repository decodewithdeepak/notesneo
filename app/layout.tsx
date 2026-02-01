import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: {
    default: "NotesNeo - Best Academic Notes for MDU Rohtak",
    template: "%s | NotesNeo",
  },
  description:
    "Access high-quality academic notes for MDU Rohtak. Download, save, and access personalized study resources on NotesNeo for efficient learning.",
  keywords: [
    "MDU notes",
    "academic notes",
    "MDU Rohtak",
    "study resources",
    "MDU Btech notes",
    "SAITM notes download",
    "NotesNeo",
    "BTech notes",
    "semester notes",
    "university notes",
    "free notes",
    "engineering notes",
  ],
  authors: [{ name: "Deepak Modi", url: "https://deepakmodi.tech" }],
  creator: "Deepak Modi",
  publisher: "NotesNeo",
  metadataBase: new URL("https://notesneo.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://notesneo.vercel.app/",
    title: "NotesNeo - Best Academic Notes for MDU Rohtak",
    description:
      "Access high-quality academic notes for MDU Rohtak. Download, save, and access personalized study resources on NotesNeo for efficient learning.",
    siteName: "NotesNeo",
  },
  twitter: {
    card: "summary_large_image",
    title: "NotesNeo - Best Academic Notes for MDU Rohtak",
    description:
      "Access high-quality academic notes for MDU Rohtak. Download, save, and access personalized study resources on NotesNeo for efficient learning.",
    creator: "@deepakmodi_io",
  },
  verification: {
    google: "vvp2OYjF6CFibJc7x2WTbT-4fWFHe6Ue5hYXcaq_LjE",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
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

        {/* Vercel Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />

        {/* PWA Service Worker Registration */}
        <Script id="sw-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              const registerSW = () => {
                navigator.serviceWorker.register('/sw.js').then(
                  (registration) => {
                    console.log('[PWA] Service Worker registered successfully');
                  },
                  (err) => {
                    console.error('[PWA] Service Worker registration failed:', err);
                  }
                );
              };
              
              if (document.readyState === 'complete') {
                registerSW();
              } else {
                window.addEventListener('load', registerSW);
              }
            }
          `}
        </Script>

        {/* Tawk.to AI Chatbot */}
        {/* <Script
          id="tawk-to-chatbot"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/67342cb14304e3196ae1909a/1ichst6bo';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        /> */}
      </body>
    </html>
  );
}
