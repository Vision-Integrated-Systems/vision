import { Suspense } from "react";
import ApplicationForm from "@/components/ApplicationForm";

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 mt-16">
      <div className="container mx-auto px-4">
        <Suspense
          fallback={
            <div className="text-center p-20 text-slate-500">
              Loading application form...
            </div>
          }
        >
          <ApplicationForm />
        </Suspense>
      </div>
    </div>
  );
}
