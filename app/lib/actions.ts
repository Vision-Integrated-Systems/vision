"use server";

export type FormState = {
  status: "success" | "error";
  message: string;
} | null;

export async function handleContactSubmit(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  // --- TODO: Add your email sending logic here ---
  console.log("New Contact Form Submission:");
  console.log({ firstName, lastName, email, phone, message });

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      status: "success",
      message: "Your message has been sent! We'll be in touch soon.",
    };
  } catch (error) {
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}