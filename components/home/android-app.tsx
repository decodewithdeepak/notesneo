"use client";

import { Button } from "@/components/ui/button";
import { Download, Smartphone, Zap, Wifi, Bell } from "lucide-react";
import HighlightText from "@/components/ui/highlight-text";

export default function AndroidApp() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Quick access to all your notes with optimized performance",
    },
    {
      icon: Wifi,
      title: "Offline Access",
      description: "Download notes and access them without internet",
    },
    {
      icon: Bell,
      title: "Instant Updates",
      description: "Get notified when new notes are added to your subjects",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 border-t border-border">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <h2 className="font-librebaskerville text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                Get the <HighlightText>Android App</HighlightText>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Take your study materials everywhere with our mobile app. Access
                notes offline, get instant updates, and study on the go.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 border border-border bg-background hover:bg-muted/50 transition-colors"
                  >
                    <div className="shrink-0 w-10 h-10 border border-border bg-muted flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base sm:text-lg mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Download Button */}
            <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
              <a
                href="https://drive.google.com/uc?export=download&id=19zqey0UnyHMvLes_Nj-kDlzB2rRRxBdA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-5 w-5" />
                Download Android App
              </a>
            </Button>

            <div className="mt-4 space-y-1">
              <p className="text-xs text-muted-foreground">
                Free download • No ads • Regular updates
              </p>
              <p className="text-xs text-muted-foreground">
                Developed by{" "}
                <span className="font-medium text-foreground">Nitish Modi</span>{" "}
                and{" "}
                <span className="font-medium text-foreground">Preet Raj</span>
              </p>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-full max-w-[300px] aspect-[9/16] border-8 border-border rounded-[2.5rem] bg-background shadow-2xl overflow-hidden">
                {/* Phone Screen Content */}
                <div className="h-full w-full bg-linear-to-br from-primary/10 via-background to-primary/5 flex flex-col items-center justify-center p-6">
                  <div className="w-16 h-16 border-2 border-border bg-muted rounded-2xl flex items-center justify-center mb-4">
                    <Smartphone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-center">
                    NotesNeo
                  </h3>
                  <p className="text-xs text-muted-foreground text-center mb-6">
                    Your Academic Companion
                  </p>

                  {/* Mock UI Elements */}
                  <div className="w-full space-y-3">
                    <div className="h-12 bg-muted border border-border rounded-lg"></div>
                    <div className="h-12 bg-muted border border-border rounded-lg"></div>
                    <div className="h-12 bg-muted border border-border rounded-lg"></div>
                  </div>
                </div>

                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-border rounded-b-2xl"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
