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

export async function handleJobApplication(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const jobTitle = formData.get("jobTitle");
  
  // Personal Info
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const gender = formData.get("gender"); // New
  
  // Address - New
  const address = formData.get("address");
  const city = formData.get("city");
  const state = formData.get("state");
  const zip = formData.get("zip");

  const email = formData.get("email");
  const phone = formData.get("phone");
  const linkedIn = formData.get("linkedIn");
  
  // Qualifications
  const experience = formData.get("experience");
  const certifications = formData.get("certifications");
  const startDate = formData.get("startDate");
  const workAuth = formData.get("workAuth");
  const backgroundCheck = formData.get("backgroundCheck"); // New
  const referralSource = formData.get("referralSource"); // New
  
  const coverLetter = formData.get("coverLetter");
  const resume = formData.get("resume") as File;

  console.log(`New Application for ${jobTitle}:`);
  console.log({ 
    name: `${firstName} ${lastName}`,
    contact: `${email}, ${phone}, ${linkedIn}`,
    gender,
    location: `${address}, ${city}, ${state} ${zip}`,
    referralSource,
    experience,
    certifications,
    startDate,
    backgroundCheck,
    workAuth,
    coverLetter,
    resume: resume ? resume.name : null,
  });
  
  if (resume && resume.size > 0) {
    console.log(`Resume uploaded: ${resume.name}`);
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return {
      status: "success",
      message: "Application received! We will review your qualifications and contact you shortly.",
    };
  } catch (error) {
    return {
      status: "error",
      message: "Failed to submit application. Please try again.",
    };
  }
}

export async function handleServiceTicket(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const company = formData.get("companyName");
  const name = formData.get("contactName");
  const email = formData.get("email");
  const urgency = formData.get("urgency");
  const systemType = formData.get("systemType");
  const message = formData.get("message");
  const attachment = formData.get("attachment") as File;

  console.log("New Service Ticket:");
  console.log({ company, name, email, urgency, systemType, message });
  
  if (attachment && attachment.size > 0) {
    console.log(`Issue attachment: ${attachment.name} (${attachment.size} bytes)`);
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return {
      status: "success",
      message: `Ticket #${Math.floor(Math.random() * 10000)} created. A technician will review your request shortly.`,
    };
  } catch (error) {
    return {
      status: "error",
      message: "Failed to submit ticket. Please call us directly at 832.535.1991.",
    };
  }
}