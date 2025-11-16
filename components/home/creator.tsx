"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import HighlightText from "@/components/ui/highlight-text";
import Image from "next/image";
import XIcon from "@/components/icons/x";

export default function Creator() {
  const roles = [
    "Founder & Lead Developer",
    "Content Manager",
    "UI/UX Designer",
    "Community Manager",
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/decodewithdeepak",
      label: "@decodewithdeepak",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/deepakmodi1/",
      label: "deepakmodi1",
    },
    {
      name: "X",
      icon: XIcon,
      url: "https://twitter.com/deepakmodi_io",
      label: "@deepakmodi_io",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 border-t border-border">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-librebaskerville text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Meet the <HighlightText>Creator</HighlightText>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to making education accessible for everyone
          </p>
        </div>

        {/* Creator Card */}
        <div className="max-w-4xl mx-auto">
          <div className="border border-border bg-background">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Left - Profile Image */}
              <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-border p-6 sm:p-8 bg-muted/30">
                <div className="flex md:flex-col items-center md:justify-center gap-4 md:gap-0">
                  <div className="relative w-20 h-20 md:w-32 md:h-32 md:mb-6 shrink-0">
                    <div className="absolute inset-0 border-2 border-border bg-muted rounded-full"></div>
                    <div className="absolute inset-2 border border-border rounded-full overflow-hidden bg-background">
                      <Image
                        src="/images/profile-image.webp"
                        alt="Deepak Modi"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 80px, 128px"
                        priority
                      />
                    </div>
                  </div>
                  <div className="flex-1 md:flex-none min-w-0">
                    <h3 className="font-semibold text-lg md:text-2xl mb-1 md:text-center">
                      Deepak Modi
                    </h3>
                    <p className="text-sm text-muted-foreground md:text-center">
                      Founder
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Details */}
              <div className="md:col-span-2 p-6 sm:p-8">
                {/* Bio */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    About
                  </h4>
                  <p className="text-base leading-relaxed text-foreground mb-4">
                    Full-stack developer with a passion for education
                    technology. Building NotesNeo to help students access
                    quality study materials and succeed in their academic
                    journey.
                  </p>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Connect
                  </h4>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <Button
                          key={link.name}
                          variant="outline"
                          size="sm"
                          className="justify-start gap-2 hover:scale-105 transition-transform"
                          asChild
                        >
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon className="h-4 w-4" />
                            <span className="text-xs">{link.label}</span>
                            <ExternalLink className="h-3 w-3 ml-auto" />
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
