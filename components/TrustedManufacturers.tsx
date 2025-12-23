"use client";
import Image from "next/image";

export default function TrustedManufacturers() {
  const manufacturers = [
    { name: "Biamp", src: "/logos/biamp.jpg", width: 200, height: 60 },
    { name: "Shure", src: "/logos/shure.svg", width: 200, height: 60 },
    { name: "Belden", src: "/logos/belden.png", width: 200, height: 60 },
    { name: "Axis", src: "/logos/axis.png", width: 200, height: 60 },
  ];

  const allLogos = [...manufacturers, ...manufacturers, ...manufacturers];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.2em] mb-12">
          Powered By Industry Leaders
        </p>

        <div className="relative w-full overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />

          <div className="flex w-max animate-scroll hover:[animation-play-state:paused] items-center">
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-none px-12 md:px-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-12 md:h-16 w-auto object-contain mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
