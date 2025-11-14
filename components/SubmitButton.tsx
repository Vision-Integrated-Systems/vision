"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({ text = "Submit" }: { text?: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`px-8 py-3 bg-blue-600 text-white font-semibold rounded-full transition-colors duration-300 ${
        pending
          ? "bg-slate-400 cursor-not-allowed"
          : "hover:bg-blue-700"
      }`}
    >
      {pending ? "Sending..." : text}
    </button>
  );
}