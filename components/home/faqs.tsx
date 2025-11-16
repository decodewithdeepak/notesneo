"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode | string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border border-dotted">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        value={isOpen ? `item-${index}` : ""}
        onValueChange={(value) => setIsOpen(value === `item-${index}`)}
      >
        <AccordionItem value={`item-${index}`} className="border-none">
          <AccordionTrigger className="p-6 cursor-pointer text-left hover:bg-muted/50 hover:transition-colors hover:no-underline flex justify-between items-center rounded-none">
            <h3 className="font-medium text-sm leading-relaxed pr-4">
              {question}
            </h3>
            <div className="flex-shrink-0">
              <svg
                className="h-4 w-4 transition-transform duration-200 ease-in-out"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 4v8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className={`transition-all origin-center duration-200 ${
                    isOpen ? "rotate-90" : "rotate-0"
                  }`}
                />
                <path
                  d="M4 8h8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="transition-all duration-200"
                />
              </svg>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 py-3">
            <div className="text-muted-foreground text-sm leading-relaxed">
              {answer}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default function FAQs() {
  const faqs = [
    {
      question: "What is NotesNeo?",
      answer: (
        <div className="space-y-4">
          <p>
            <strong>NotesNeo</strong> is a free platform for students to access
            quality academic notes. It helps BTech, BCA, and BBA students find
            study materials quickly and efficiently.
          </p>
          <p>You can:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Search and filter notes by branch, semester, and subject</li>
            <li>Download notes instantly with one click</li>
            <li>Save your favorite notes for quick access</li>
            <li>Upload your own notes to help others</li>
          </ul>
          <p>
            All completely free - no signup required, no hidden costs, no catch.
          </p>
        </div>
      ),
    },
    {
      question: "Why is NotesNeo completely free?",
      answer: (
        <div className="space-y-4">
          <p>NotesNeo is our way of giving back to the student community.</p>
          <p>
            We believe accessing quality study materials shouldn\'t be difficult
            or expensive. By making this completely free, we\'re helping
            students excel in their academics without financial barriers.
          </p>
          <p>
            No monetization strategy - just our contribution to help students
            succeed.
          </p>
        </div>
      ),
    },
    {
      question: "Is it really 100% free?",
      answer: (
        <div className="space-y-4">
          <p>Yes! NotesNeo is completely free. You get:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Full access to browse all notes</li>
            <li>Advanced search and filtering</li>
            <li>Unlimited downloads</li>
            <li>Favorites system</li>
            <li>No hidden charges ever</li>
          </ul>
          <p>
            You can browse, search, and download notes completely free - no
            account needed!
          </p>
        </div>
      ),
    },
    {
      question: "How do I search for notes?",
      answer:
        "You can search by note title, subject, or description. Use the filters to narrow down by branch (BTech, BCA, BBA), semester (1-8), subject, or unit. The search is instant and updates as you type.",
    },
    {
      question: "What courses are covered?",
      answer:
        "We cover notes for BTech, BCA, and BBA courses across all semesters. Notes are organized by subject and unit, making it easy to find exactly what you need for your exams.",
    },
    {
      question: "Can I upload my own notes?",
      answer:
        "Yes! We welcome contributions from students. You can upload your notes through our upload form. All submissions are reviewed by our team to ensure quality before being added to the collection.",
    },
    {
      question: "How do notes get added?",
      answer:
        "Notes are added through student submissions and our own curation. We review each submission to ensure quality, accuracy, and proper formatting before making them available to everyone.",
    },
    {
      question: "Are the notes verified?",
      answer:
        "Yes, all notes go through a review process before being published. We check for accuracy, completeness, and proper formatting. However, we recommend cross-referencing with your course materials and textbooks.",
    },
    {
      question: "Can I download notes without signing up?",
      answer:
        "Yes! No signup or registration is required. Simply browse the notes, click download, and access the study materials instantly. We believe education should be accessible to everyone.",
    },
    {
      question: "What format are the notes in?",
      answer:
        "Most notes are available as PDF files hosted on Google Drive or Google Docs. This ensures easy access, compatibility across devices, and the ability to view them online or download for offline use.",
    },
    {
      question: "How often are new notes added?",
      answer:
        "New notes are added regularly as students submit them and as we curate quality content. We also update existing notes when better versions become available. Check back frequently for new additions!",
    },
    {
      question: "Can I save my favorite notes?",
      answer:
        "Yes! Use the heart icon on any note card to save it to your favorites. Your favorites are stored locally in your browser, so you can quickly access your most-used study materials.",
    },
    {
      question: "How can I contribute?",
      answer:
        "You can contribute by uploading your own notes, sharing the platform with fellow students, or providing feedback on existing notes. Your contributions help build a better resource for the entire student community.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Currently, NotesNeo is a web-based platform that works perfectly on mobile browsers. The responsive design ensures a great experience on phones, tablets, and desktops without needing a separate app.",
    },
  ];

  return (
    <section className="">
      <div className="grid grid-cols-12 gap-0">
        {/* Title Section - Left */}
        <div className="col-span-12 md:col-span-5 ">
          <div className="p-8 pr-12 md:sticky md:top-8 py-16">
            <h2 className="font-librebaskerville text-3xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Have another question? Contact us on{" "}
              <a
                href="https://x.com/deepakmodi_io"
                className="text-primary hover:underline"
              >
                Twitter
              </a>{" "}
              or reach out{" "}
              <a
                href="https://deepakmodi.tech/"
                className="text-primary hover:underline"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>

        {/* FAQs Section - Right */}
        <div className="col-span-12 md:col-span-7 border-l border-border">
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
