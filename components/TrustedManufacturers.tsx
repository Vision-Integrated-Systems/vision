export default function TrustedManufacturers() {
  const manufacturers = [
    { name: "Crestron", src: "https://vision-texas.com/wp-content/uploads/2021/08/crestron_logo.jpg" },
    { name: "Biamp", src: "https://vision-texas.com/wp-content/uploads/2021/08/biamp_logo.jpg" },
    { name: "Control4", src: "https://vision-texas.com/wp-content/uploads/2021/08/c4_logo.jpg" },
    { name: "Belden", src: "https://vision-texas.com/wp-content/uploads/2021/08/b_elden_logo.png" },
    { name: "Axis", src: "https://vision-texas.com/wp-content/uploads/2021/08/a_xis_logo.png" },
    { name: "Extron", src: "https://vision-texas.com/wp-content/uploads/2021/08/e_xtron_logo.png" },
  ];

  return (
    <section className="py-20 border-t border-slate-100 bg-slate-50">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-slate-500 text-2xl md:text-3xl uppercase tracking-widest font-bold mb-14">
          Trusted Manufacturers
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center transition-all duration-500">
          {manufacturers.map((logo) => (
            <div key={logo.name} className="flex justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-20 md:h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}