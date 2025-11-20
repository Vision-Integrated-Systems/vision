import Image from "next/image";

export default function TrustedManufacturers() {
  const manufacturers = [
    {
      name: "Biamp",
      src: "/logos/biamp.jpg",
      width: 200,
      height: 60,
    },
    {
      name: "Shure",
      src: "/logos/shure.svg",
      width: 200,
      height: 60,
    },
    {
      name: "Belden",
      src: "/logos/belden.png",
      width: 200,
      height: 60,
    },
    {
      name: "Axis",
      src: "/logos/axis.png",
      width: 200,
      height: 60,
    },
  ];

  const allLogos = [...manufacturers, ...manufacturers];

  return (
    <section className="py-20 border-t border-slate-100 bg-slate-50">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-slate-500 text-2xl md:text-3xl uppercase tracking-widest font-bold mb-14">
          Trusted Manufacturers
        </h3>
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
            {allLogos.map((logo, index) => (
              <div key={index} className="flex-none px-10 md:px-12">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}