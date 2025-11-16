"use client";

import { Check, Heart, Rocket, Code, Zap, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import HighlightText from "@/components/ui/highlight-text";

export default function Pricing() {
  const coreFeatures = [
    "Advanced search & filtering",
    "Branch & semester filtering",
    "Subject-wise categorization",
    "Unit-based organization",
  ];

  const uiFeatures = [
    "Clean note cards",
    "Responsive design",
    "Dark/Light mode support",
    "Favorites system",
  ];

  const contentFeatures = [
    "High-quality notes",
    "Regular updates & additions",
    "Community contributions",
    "Free platform",
  ];

  const accessFeatures = [
    "Free to browse & download",
    "No signup required",
    "Upload your notes",
    "Community-driven",
  ];

  const featureSections = [
    { title: "Core Features", icon: Rocket, features: coreFeatures },
    { title: "UI & Design", icon: Code, features: uiFeatures },
    { title: "Content & Quality", icon: Zap, features: contentFeatures },
    { title: "Access & Community", icon: Heart, features: accessFeatures },
  ];

  return (
    <section className="pt-16">
      <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
        <h2 className="font-librebaskerville text-2xl sm:text-3xl font-semibold mb-4">
          100% &nbsp;<HighlightText>Free Forever</HighlightText>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          A free platform to help students access quality academic notes. No
          hidden costs, no premium tiers, no catch - everything is completely
          free.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-8 gap-0 lg:h-[800px] border-t border-dotted border-border">
        {/* Main Pricing Card - Top Left Large */}
        <div className="sm:col-span-2 lg:col-span-6 lg:row-span-4 lg:border-r border-b border-border border-dotted">
          <div className="h-full flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8">
            <div className="text-center space-y-4">
              <h3 className="text-xl sm:text-2xl">Free Forever</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Access quality academic notes
              </p>
              <div className="py-3">
                <span className="text-3xl sm:text-4xl font-bold">$0</span>
                <span className="text-sm sm:text-base text-muted-foreground">
                  /forever
                </span>
              </div>
              <Button className="w-full rounded-none" size="sm" asChild>
                <a href="/notes">Browse Notes Now</a>
              </Button>

              <p className="text-xs text-muted-foreground pt-3">
                No signup required • Download immediately • Built for students
              </p>
            </div>
          </div>
        </div>

        {/* Core Features - Top Right */}
        <div className="sm:col-span-1 lg:col-span-6 lg:row-span-2 border-b border-border border-dotted">
          <div className="h-full p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Search className="h-5 w-5 text-primary" />
              <h4 className="text-base sm:text-lg font-medium">
                Core Features
              </h4>
            </div>
            <div className="space-y-2">
              {coreFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* UI Features - Middle Right */}
        <div className="sm:col-span-1 lg:col-span-6 lg:row-span-2 border-b border-border border-dotted">
          <div className="h-full p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-5 w-5 text-primary" />
              <h4 className="text-base sm:text-lg font-medium">UI & Design</h4>
            </div>
            <div className="space-y-2">
              {uiFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content & Quality - Bottom Left */}
        <div className="sm:col-span-1 lg:col-span-4 lg:row-span-2 sm:border-r lg:border-r border-b border-border border-dotted">
          <div className="h-full p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-primary" />
              <h4 className="text-base sm:text-lg font-medium">
                Content & Quality
              </h4>
            </div>
            <div className="space-y-2">
              {contentFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Access & Community - Bottom Middle */}
        <div className="sm:col-span-1 lg:col-span-4 lg:row-span-2 lg:border-r border-b border-border border-dotted">
          <div className="h-full p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-primary" />
              <h4 className="text-base sm:text-lg font-medium">
                Access & Community
              </h4>
            </div>
            <div className="space-y-2">
              {accessFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement - Bottom Right */}
        <div className="sm:col-span-2 lg:col-span-4 lg:row-span-2 border-b border-border border-dotted">
          <div className="h-full p-4 sm:p-6 flex items-center">
            <div className="text-center w-full">
              <h4 className="text-base sm:text-lg font-medium mb-3">
                Our Mission
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Help students access quality academic notes faster. This is our
                way of supporting education and helping students succeed.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Message - Spans Full Width */}
        <div className="sm:col-span-2 lg:col-span-12 lg:row-span-2">
          <div className="h-full p-4 sm:p-6 flex items-center justify-center">
            <div className="text-center max-w-2xl">
              <h3 className="text-lg sm:text-xl font-medium mb-4">
                Built for Students, By Students
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                We believe accessing quality study materials shouldn't be
                difficult or expensive. This is our way of giving back to
                students and helping them excel in their academics. Every note,
                every download, every resource - completely free for students
                like you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
