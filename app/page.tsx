import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import TrustedManufacturers from "@/components/TrustedManufacturers";

const StatsSection = dynamic(() => import("@/components/StatsSection"), {
  loading: () => <div className="h-48 bg-slate-50" />,
});
const FeaturesGrid = dynamic(() => import("@/components/FeaturesGrid"), {
  loading: () => <div className="h-[600px] bg-white" />,
});
// const Testimonials = dynamic(() => import("@/components/Testimonials"), {
//   loading: () => <div className="h-[500px] bg-slate-900" />,
// });
const CtaSection = dynamic(() => import("@/components/CtaSection"));

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturesGrid />
      {/* <Testimonials /> */}
      <TrustedManufacturers />
      <CtaSection />
    </>
  );
}
