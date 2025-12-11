"use client";

import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  text?: string;
  className?: string;
}

export function SubmitButton({ text = "Submit", className }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  // Default styles used if no className is provided
  const defaultClasses = "px-8 py-3 bg-blue-600 text-white font-semibold rounded-full transition-colors duration-300 hover:bg-blue-700";

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${className || defaultClasses} ${
        pending ? "!bg-slate-400 cursor-not-allowed" : ""
      }`}
    >
      {pending ? "Sending..." : text}
    </button>
  );
}