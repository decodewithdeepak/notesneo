"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type UploadNoteFormValues = {
  title: string;
  description: string;
  subject: string;
  branch: string;
  semester: string;
  unit: string;
  downloadUrl: string;
  uploaderName: string;
  uploaderEmail: string;
};

export default function UploadNotePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmission, setLastSubmission] =
    useState<UploadNoteFormValues | null>(null);
  const [error, setError] = useState<string | null>(null);

  const defaultValues = useMemo<UploadNoteFormValues>(
    () => ({
      title: "",
      description: "",
      subject: "",
      branch: "",
      semester: "",
      unit: "",
      downloadUrl: "",
      uploaderName: "",
      uploaderEmail: "",
    }),
    []
  );

  const form = useForm<UploadNoteFormValues>({
    defaultValues,
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  async function onSubmit(values: UploadNoteFormValues) {
    setIsSubmitting(true);
    setError(null);

    try {
      // Initialize EmailJS (only needed once, but safe to call multiple times)
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");

      // Prepare email template parameters
      const templateParams = {
        title: values.title,
        description: values.description,
        subject: values.subject,
        branch: values.branch,
        semester: values.semester,
        unit: values.unit,
        downloadUrl: values.downloadUrl,
        uploaderName: values.uploaderName,
        uploaderEmail: values.uploaderEmail,
        // Pre-formatted JSON for easy copy-paste
        jsonData: JSON.stringify(
          {
            id: `${values.subject.toLowerCase().replace(/\s+/g, "-")}-${
              values.unit
            }-${Date.now()}`,
            title: values.title,
            description: values.description,
            subject: values.subject,
            branch: values.branch,
            semester: parseInt(values.semester),
            unit: parseInt(values.unit),
            downloadUrl: values.downloadUrl,
          },
          null,
          2
        ),
      };

      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams
      );

      setLastSubmission(values);
      setIsSubmitted(true);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Failed to submit note. Please try again or contact support.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-2xl w-full mx-auto">
        {!isSubmitted ? (
          <div className="mb-6 sm:mb-8">
            <h1 className="font-librebaskerville text-2xl sm:text-3xl font-semibold tracking-tight">
              Upload Notes
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Share your notes with the community and help fellow students.
            </p>
          </div>
        ) : (
          <div className="mb-6 sm:mb-8">
            <h1 className="font-librebaskerville text-2xl sm:text-3xl font-semibold tracking-tight">
              Thank you for your contribution!
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Here's what happens next.
            </p>
          </div>
        )}

        {!isSubmitted ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="title"
                rules={{
                  required: "Title is required",
                  minLength: {
                    value: 5,
                    message: "Title must be at least 5 characters",
                  },
                  maxLength: {
                    value: 100,
                    message: "Title must be at most 100 characters",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Note Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. Python Unit 1 - Introduction"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Descriptive title for the note
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="branch"
                  rules={{ required: "Select a branch" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Branch</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select branch" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="BTech">BTech</SelectItem>
                            <SelectItem value="BCA">BCA</SelectItem>
                            <SelectItem value="BBA">BBA</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="semester"
                  rules={{ required: "Select a semester" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Semester</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select semester" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                              <SelectItem key={sem} value={sem.toString()}>
                                Semester {sem}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="subject"
                  rules={{
                    required: "Subject is required",
                    minLength: {
                      value: 2,
                      message: "Subject must be at least 2 characters",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. Python, DBMS, DSA"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="unit"
                  rules={{ required: "Select a unit" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Unit</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5].map((unit) => (
                              <SelectItem key={unit} value={unit.toString()}>
                                Unit {unit}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                rules={{
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters",
                  },
                  maxLength: {
                    value: 300,
                    message: "Description must be at most 300 characters",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="Brief description of the note content..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Minimum 10 characters</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="downloadUrl"
                rules={{
                  required: "Download URL is required",
                  pattern: {
                    value:
                      /^(https?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#\[\]@!$&'()*+,;=.]+$/,
                    message: "Enter a valid URL (https://...)",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Download URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://docs.google.com/document/d/..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Google Drive or Google Docs link to the PDF
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="uploaderName"
                  rules={{
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="uploaderEmail"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {error && (
                <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3">
                  <p className="text-sm text-destructive">{error}</p>
                </div>
              )}

              <div className="pt-2 flex items-center gap-3">
                <Button
                  type="submit"
                  size="lg"
                  className="px-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => form.reset(defaultValues)}
                  disabled={isSubmitting}
                >
                  Reset
                </Button>
              </div>
            </form>
          </Form>
        ) : (
          <div className="space-y-5">
            <div className="rounded-md border p-4">
              <p className="text-sm text-muted-foreground">
                Your submission has been received. Our admins will review the
                notes for accuracy and completeness. They may make minor edits
                to ensure consistency with our guidelines. If it fits the
                requirements, it will be added to the public collection.
              </p>
            </div>
            <div className="grid gap-3">
              {lastSubmission ? (
                <div className="rounded-md border p-4">
                  <h2 className="font-medium mb-2">Submitted summary</h2>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>
                      <span className="text-foreground">Title:</span>{" "}
                      {lastSubmission.title}
                    </p>
                    <p>
                      <span className="text-foreground">Branch:</span>{" "}
                      {lastSubmission.branch}
                    </p>
                    <p>
                      <span className="text-foreground">Semester:</span>{" "}
                      {lastSubmission.semester}
                    </p>
                    <p>
                      <span className="text-foreground">Subject:</span>{" "}
                      {lastSubmission.subject}
                    </p>
                    <p>
                      <span className="text-foreground">Unit:</span>{" "}
                      {lastSubmission.unit}
                    </p>
                    <p>
                      <span className="text-foreground">Uploader:</span>{" "}
                      {lastSubmission.uploaderName}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="flex items-center gap-3 pt-2">
              <Button
                type="button"
                onClick={() => {
                  form.reset(defaultValues);
                  setIsSubmitted(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Upload another note
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Go to home</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
