"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MultiSelectTags } from "@/components/search/multi-select-tags"

type SubmitLibraryFormValues = {
  name: string
  repositoryUrl: string
  description: string
  category: string
  author: string
  tags: string[]
  usesShadcnRegistry: boolean
  providesReusableComponents: boolean
}

export default function SubmitLibraryPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [lastSubmission, setLastSubmission] = useState<SubmitLibraryFormValues | null>(null)
  const defaultValues = useMemo<SubmitLibraryFormValues>(
    () => ({
      name: "",
      repositoryUrl: "",
      description: "",
      category: "",
      author: "",
      tags: [],
      usesShadcnRegistry: false,
      providesReusableComponents: true,
    }),
    []
  )

  const availableTags = useMemo(
    () => [
      "react",
      "nextjs",
      "shadcn",
      "tailwind",
      "typescript",
      "ui",
      "components",
      "templates",
      "design-system",
      "accessibility",
    ],
    []
  )

  const form = useForm<SubmitLibraryFormValues>({
    defaultValues,
    mode: "onBlur",
    reValidateMode: "onChange",
  })

  function onSubmit(values: SubmitLibraryFormValues) {
    // For now, just print to console as requested
    // eslint-disable-next-line no-console
    console.log("Submit Library:", values)
    setLastSubmission(values)
    setIsSubmitted(true)
  }

  return (
    <div className="w-full px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-2xl w-full mx-auto">
        {!isSubmitted ? (
          <div className="mb-6 sm:mb-8">
            <h1 className="font-librebaskerville text-2xl sm:text-3xl font-semibold tracking-tight">Submit a Library</h1>
            <p className="text-sm text-muted-foreground mt-2">Share a great component library with the community.</p>
          </div>
        ) : (
          <div className="mb-6 sm:mb-8">
            <h1 className="font-librebaskerville text-2xl sm:text-3xl font-semibold tracking-tight">Thank you for your contribution!</h1>
            <p className="text-sm text-muted-foreground mt-2">Here’s what happens next.</p>
          </div>
        )}

        {!isSubmitted ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              rules={{
                required: "Name is required",
                minLength: { value: 2, message: "Name must be at least 2 characters" },
                maxLength: { value: 80, message: "Name must be at most 80 characters" },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Library name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Awesome UI" {...field} />
                  </FormControl>
                  <FormDescription>Public, human-friendly name for the library.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <MultiSelectTags
                      selectedTags={field.value || []}
                      availableTags={availableTags}
                      onChange={field.onChange}
                      placeholder="Add tags (React, shadcn, tailwind...)"
                    />
                  </FormControl>
                  <FormDescription>Help others discover this library.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="repositoryUrl"
              rules={{
                required: "URL is required",
                pattern: {
                  value: /^(https?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#\[\]@!$&'()*+,;=.]+$/,
                  message: "Enter a valid URL (https://...)",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Repository or website URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://github.com/owner/repo or https://example.com" {...field} />
                  </FormControl>
                  <FormDescription>Direct link to the source or official site.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="usesShadcnRegistry"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start gap-3 space-y-0 rounded-md border p-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(v) => field.onChange(!!v)}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Uses shadcn registry</FormLabel>
                      <FormDescription>Indicate if it’s installable via the shadcn/ui registry.</FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="providesReusableComponents"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start gap-3 space-y-0 rounded-md border p-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(v) => field.onChange(!!v)}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Provides reusable components</FormLabel>
                      <FormDescription>Affirms the library exports composable, reusable pieces.</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="category"
              rules={{ required: "Select a category" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="components">Components</SelectItem>
                        <SelectItem value="templates">Templates</SelectItem>
                        <SelectItem value="utilities">Utilities</SelectItem>
                        <SelectItem value="themes">Themes</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>Pick the most relevant category.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="author"
              rules={{
                required: "Author is required",
                minLength: { value: 2, message: "Author must be at least 2 characters" },
                maxLength: { value: 80, message: "Author must be at most 80 characters" },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author or organization</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. CalmNerd" {...field} />
                  </FormControl>
                  <FormDescription>Who maintains the project.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              rules={{
                required: "Description is required",
                minLength: { value: 20, message: "Description must be at least 20 characters" },
                maxLength: { value: 500, message: "Description must be at most 500 characters" },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short description</FormLabel>
                  <FormControl>
                    <Textarea rows={5} placeholder="What makes this library great?" {...field} />
                  </FormControl>
                  <FormDescription>Minimum 20 characters.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-2 flex items-center gap-3">
              <Button type="submit" size="lg" className="px-6">Submit</Button>
              <Button type="button" variant="outline" onClick={() => form.reset(defaultValues)}>Reset</Button>
            </div>
          </form>
        </Form>
        ) : (
          <div className="space-y-5">
            <div className="rounded-md border p-4">
              <p className="text-sm text-muted-foreground">
                Your submission has been received. Our admins will review the details for accuracy and completeness. They may make minor edits to ensure consistency with our guidelines. If it fits the requirements, it will be added to the public list.
              </p>
            </div>
            <div className="grid gap-3">
              {lastSubmission ? (
                <div className="rounded-md border p-4">
                  <h2 className="font-medium mb-2">Submitted summary</h2>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><span className="text-foreground">Name:</span> {lastSubmission.name}</p>
                    <p><span className="text-foreground">URL:</span> {lastSubmission.repositoryUrl}</p>
                    <p><span className="text-foreground">Category:</span> {lastSubmission.category}</p>
                    <p><span className="text-foreground">Author:</span> {lastSubmission.author}</p>
                    {lastSubmission.tags?.length ? (
                      <p><span className="text-foreground">Tags:</span> {lastSubmission.tags.join(", ")}</p>
                    ) : null}
                    <p><span className="text-foreground">Uses shadcn registry:</span> {lastSubmission.usesShadcnRegistry ? "Yes" : "No"}</p>
                    <p><span className="text-foreground">Provides reusable components:</span> {lastSubmission.providesReusableComponents ? "Yes" : "No"}</p>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="flex items-center gap-3 pt-2">
              <Button
                type="button"
                onClick={() => {
                  form.reset(defaultValues)
                  setIsSubmitted(false)
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
              >
                Submit another library
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Go to home</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


