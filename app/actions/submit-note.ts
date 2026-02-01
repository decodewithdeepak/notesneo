"use server";

import emailjs from "@emailjs/browser";

export interface UploadNoteFormValues {
  title: string;
  description: string;
  subject: string;
  branch: string;
  semester: string;
  unit: string;
  downloadUrl: string;
  uploaderName: string;
  uploaderEmail: string;
}

export async function submitNote(values: UploadNoteFormValues) {
  try {
    emailjs.init(process.env.EMAILJS_PUBLIC_KEY || "");

    const { title, description, subject, branch, semester, unit, downloadUrl } =
      values;

    const templateParams = {
      ...values,
      jsonData: JSON.stringify(
        {
          id: `${subject.toLowerCase().replace(/\s+/g, "-")}-${unit}-${Date.now()}`,
          title,
          description,
          subject,
          branch,
          semester: parseInt(semester),
          unit: parseInt(unit),
          downloadUrl,
        },
        null,
        2,
      ),
    };

    // Send email using EmailJS
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID || "",
      process.env.EMAILJS_TEMPLATE_ID || "",
      templateParams,
    );

    return { success: true };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return {
      success: false,
      error: "Failed to submit note. Please try again or contact support.",
    };
  }
}
