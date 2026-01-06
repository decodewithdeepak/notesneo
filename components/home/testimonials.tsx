"use client";

import { Quote, Star } from "lucide-react";
import HighlightText from "../ui/highlight-text";

/**
 * Data remains outside the component to prevent re-creation on renders
 */
const TESTIMONIALS = [
    {
        name: "Priya Sharma",
        role: "BTech CSE, 3rd Year",
        content: "NotesNeo has been a lifesaver! The notes are well-organized and easy to understand. I've improved my grades significantly since I started using it.",
        rating: 5,
        branch: "CSE",
    },
    {
        name: "Rahul Kumar",
        role: "BTech AIML, 2nd Year",
        content: "The best part is the community support. I can find notes for every AI and ML subject. The quality is consistently high. Highly recommend!",
        rating: 5,
        branch: "AIML",
    },
    {
        name: "Anjali Verma",
        role: "BTech Data Science, Final Year",
        content: "I love how easy it is to navigate and find exactly what I need. The dark mode is perfect for late-night study sessions. Thank you NotesNeo!",
        rating: 5,
        branch: "DS",
    },
    {
        name: "Arjun Patel",
        role: "BTech CSE, 1st Year",
        content: "As a first-year student, NotesNeo helped me adapt quickly. The notes are comprehensive and saved me countless hours of searching for resources.",
        rating: 5,
        branch: "CSE",
    },
    {
        name: "Sneha Reddy",
        role: "BTech AIML, 2nd Year",
        content: "The favorites feature is amazing! I can save my most-used notes and access them instantly. This platform is a game-changer for students.",
        rating: 5,
        branch: "AIML",
    },
    {
        name: "Vikram Singh",
        role: "BTech Data Science, 3rd Year",
        content: "Finally, a platform that understands what students need. Clean interface, quality content, and completely free. What more could you ask for?",
        rating: 5,
        branch: "DS",
    },
];

/**
 * Modularized Card Component
 */
const TestimonialCard = ({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) => (
    <div className="w-[280px] sm:w-[340px] p-4 border border-border bg-background hover:bg-muted/50 transition-colors shrink-0 flex flex-col">
        {/* Quote Icon */}
        <div className="inline-flex p-2 border border-border bg-muted mb-3 w-fit">
            <Quote className="w-5 h-5" />
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-primary text-primary"
                />
            ))}
        </div>

        {/* Content */}
        <p className="text-sm text-foreground leading-relaxed mb-4">
            &ldquo;{testimonial.content}&rdquo;
        </p>

        {/* Author Info - stays at bottom */}
        <div className="flex items-center justify-between pt-3 border-t border-border mt-auto">
            <div>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
            </div>
            <div className="inline-flex px-2 py-0.5 text-xs font-medium border border-border bg-muted rounded">
                {testimonial.branch}
            </div>
        </div>
    </div>
);

/**
 * Main Section Component
 */
export default function Testimonials() {
    return (
        <section className="pt-16 pb-8">
            <div className="max-w-full mx-auto">
                {/* Header */}
                <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
                    <h2 className="font-librebaskerville text-2xl sm:text-3xl md:text-4xl mb-4">
                        Loved By <HighlightText>Thousands</HighlightText> Of Students
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                        See what students across different branches are saying about their
                        experience with NotesNeo.
                    </p>
                </div>

                {/* Horizontal Scrollable Container */}
                <div className="overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 no-scrollbar">
                    <div className="flex gap-4 min-w-max">
                        {TESTIMONIALS.map((item, index) => (
                            <TestimonialCard key={index} testimonial={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
