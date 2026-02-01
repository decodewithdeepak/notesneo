"use client";
import {
  BookOpen,
  Download,
  Users,
  Star,
  Smartphone,
  RefreshCw,
} from "lucide-react";
import HighlightText from "../ui/highlight-text";

export default function Features() {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Notes",
      description:
        "Access detailed notes for all subjects, covering all units and topics",
    },
    {
      icon: Download,
      title: "Easy Downloads",
      description: "Download notes instantly for offline access and study",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join the WhatsApp community for discussions and support",
    },
    {
      icon: Star,
      title: "Personalized Study Resources",
      description:
        "Save favorite notes for quick access and create a customized study library",
    },
    {
      icon: Smartphone,
      title: "Offline Access",
      description: "Access your notes anytime, even without an internet connection",
    },
    {
      icon: RefreshCw,
      title: "Updated Content",
      description:
        "Stay up-to-date with the latest notes and resources for your studies",
    },
  ];

  return (
    <section className="pt-16">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
          <h2 className="font-librebaskerville text-2xl sm:text-3xl md:text-4xl mb-4">
            Everything You Need To <HighlightText>Excel</HighlightText>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Access comprehensive study materials organized by branch, semester,
            and subject for BTech, BCA & BBA students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-border">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-4 sm:p-6 border-l border-t border-border bg-background hover:bg-muted/50 hover:transition-colors"
              >
                {/* Icon */}
                <div className="inline-flex p-2 sm:p-3 border border-border bg-muted mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-semibold mb-2 px-1 sm:px-0">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-1 sm:px-0">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  className?: string;
}

export type { Feature, FeaturesProps };
