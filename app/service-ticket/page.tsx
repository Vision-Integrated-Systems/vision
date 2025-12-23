"use client";

import { useActionState, useState } from "react";
import {
  WrenchScrewdriverIcon,
  PhotoIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { handleServiceTicket, type FormState } from "../lib/actions";
import { SubmitButton } from "@/components/SubmitButton";

export default function ServiceTicket() {
  const initialState: FormState = null;
  const [state, formAction] = useActionState(handleServiceTicket, initialState);
  const [urgency, setUrgency] = useState("high");

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      {/* Hero Header */}
      <section className="bg-slate-900 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-red-600 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
          <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            System Status: All Systems Operational
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Service{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              Center
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Experiencing an issue? Submit a ticket below and our support team
            will respond rapidly.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 pb-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* LEFT: Ticket Form */}
          <div className="lg:w-2/3">
            <form
              action={formAction}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-slate-100">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <WrenchScrewdriverIcon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    New Support Ticket
                  </h2>
                  <p className="text-slate-500 text-sm">
                    Please provide as much detail as possible.
                  </p>
                </div>
              </div>

              {/* Priority Selector */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Urgency Level
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      id: "low",
                      label: "Low",
                      desc: "Feature request / Minor",
                      color:
                        "border-slate-200 hover:border-blue-400 peer-checked:border-blue-600 peer-checked:bg-blue-50 peer-checked:text-blue-700",
                    },
                    {
                      id: "high",
                      label: "High",
                      desc: "System impairment",
                      color:
                        "border-slate-200 hover:border-yellow-400 peer-checked:border-yellow-600 peer-checked:bg-yellow-50 peer-checked:text-yellow-700",
                    },
                    {
                      id: "critical",
                      label: "Critical",
                      desc: "System down",
                      color:
                        "border-slate-200 hover:border-red-400 peer-checked:border-red-600 peer-checked:bg-red-50 peer-checked:text-red-700",
                    },
                  ].map((level) => (
                    <label key={level.id} className="cursor-pointer">
                      <input
                        type="radio"
                        name="urgency"
                        value={level.id}
                        className="peer sr-only"
                        checked={urgency === level.id}
                        onChange={() => setUrgency(level.id)}
                      />
                      <div
                        className={`p-4 rounded-xl border-2 transition-all h-full ${level.color}`}
                      >
                        <div className="font-bold mb-1">{level.label}</div>
                        <div className="text-xs opacity-70">{level.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    System Type
                  </label>
                  <div className="relative">
                    <select
                      name="systemType"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                    >
                      <option>Audio / Video</option>
                      <option>Security / Access Control</option>
                      <option>Structured Cabling</option>
                      <option>Network / Wi-Fi</option>
                      <option>Other</option>
                    </select>
                    <div className="absolute right-4 top-3.5 pointer-events-none text-slate-500">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Issue Description
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                  placeholder="Describe the issue, including error messages or specific equipment..."
                ></textarea>
              </div>

              {/* File Upload */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Attach Photo (Optional)
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer relative">
                  <input
                    type="file"
                    name="attachment"
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <PhotoIcon className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-500">
                    <span className="text-blue-600 font-semibold">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    PNG, JPG up to 5MB
                  </p>
                </div>
              </div>

              <SubmitButton
                text="Submit Ticket"
                className="w-full py-4 bg-slate-900 text-white font-bold text-lg rounded-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/25"
              />

              {state?.status === "success" && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center animate-in fade-in">
                  <CheckCircleIcon className="w-6 h-6 mr-3" />
                  {state.message}
                </div>
              )}
              {state?.status === "error" && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center animate-in fade-in">
                  <ExclamationTriangleIcon className="w-6 h-6 mr-3" />
                  {state.message}
                </div>
              )}
            </form>
          </div>

          {/* RIGHT: Info Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* SLA Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                <ClockIcon className="w-5 h-5 mr-2 text-blue-600" />
                Response Times
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between items-center pb-3 border-b border-slate-50">
                  <span className="text-slate-600">Critical (System Down)</span>
                  <span className="font-semibold text-red-600">4 Hours</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-slate-50">
                  <span className="text-slate-600">High Priority</span>
                  <span className="font-semibold text-yellow-600">
                    24 Hours
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-600">Low Priority</span>
                  <span className="font-semibold text-blue-600">48 Hours</span>
                </li>
              </ul>
            </div>

            {/* Support Process */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
              {/* Decorative bg */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>

              <h3 className="font-bold mb-4 flex items-center relative z-10">
                <ShieldCheckIcon className="w-5 h-5 mr-2 text-blue-400" />
                The Vision Guarantee
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed relative z-10">
                We stand behind every installation. If your system isn't
                performing to spec, we will make it right.
              </p>
              <div className="text-xs text-slate-500 relative z-10">
                <p className="font-bold text-slate-400 mb-1">Emergency Line:</p>
                <p className="text-xl text-white">832.535.1991</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
