"use client";

import { useActionState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, PaperClipIcon } from "@heroicons/react/24/outline";
import { handleJobApplication, type FormState } from "@/app/lib/actions";
import { SubmitButton } from "@/components/SubmitButton";

function ApplicationForm() {
  const searchParams = useSearchParams();
  const jobTitle = searchParams.get("job") || "General Application";

  const initialState: FormState = null;
  const [state, formAction] = useActionState(
    handleJobApplication,
    initialState
  );

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-10 text-center">
        <Link
          href="/careers"
          className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 mb-6 transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Careers
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Apply for <span className="text-blue-600">{jobTitle}</span>
        </h1>
        <p className="text-slate-600">
          Please fill out the form below and attach your resume.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
        <form action={formAction} className="space-y-6">
          <input type="hidden" name="jobTitle" value={jobTitle} />

          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="Jane Doe"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="jane@example.com"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="(555) 123-4567"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                LinkedIn URL (Optional)
              </label>
              <input
                type="url"
                name="linkedIn"
                placeholder="linkedin.com/in/..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Resume / CV
            </label>
            <div className="relative">
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-3 file:px-6
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100
                  cursor-pointer border border-slate-200 rounded-lg bg-slate-50"
              />
              <div className="absolute right-4 top-3 pointer-events-none text-slate-400">
                <PaperClipIcon className="w-5 h-5" />
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Accepted formats: PDF, DOC, DOCX. Max size: 5MB.
            </p>
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Cover Letter / Additional Notes
            </label>
            <textarea
              name="coverLetter"
              rows={5}
              placeholder="Tell us why you're a great fit for this role..."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
            ></textarea>
          </div>

          <div className="pt-4">
            <SubmitButton
              text="Submit Application"
              className="w-full py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25"
            />
          </div>

          {state?.status === "success" && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center animate-in fade-in slide-in-from-bottom-2">
              {state.message}
            </div>
          )}
          {state?.status === "error" && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center animate-in fade-in slide-in-from-bottom-2">
              {state.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 mt-16">
      <div className="container mx-auto px-4">
        <Suspense
          fallback={
            <div className="text-center p-20">Loading application form...</div>
          }
        >
          <ApplicationForm />
        </Suspense>
      </div>
    </div>
  );
}
