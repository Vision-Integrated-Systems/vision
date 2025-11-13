import { ReactNode } from 'react';

interface ContentSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean; // If true, puts image on left, text on right
  bgColor?: "white" | "slate";
  customVisual?: ReactNode; // Optional slot for SVGs or custom divs instead of an image
}

export default function ContentSection({ 
  id, 
  title, 
  children, 
  imageSrc, 
  imageAlt = "Vision Integrated Systems", 
  reverse = false, 
  bgColor = "white",
  customVisual
}: ContentSectionProps) {
  return (
    <section id={id} className={`py-20 ${bgColor === "slate" ? "bg-slate-50" : "bg-white"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          
          {/* Text Side */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 relative">
              {title}
              <span className="block h-1 w-20 bg-blue-600 mt-2 rounded-full"></span>
            </h2>
            <div className="text-lg text-slate-700 leading-relaxed">
              {children}
            </div>
          </div>

          {/* Visual Side */}
          <div className="lg:w-1/2 w-full">
            {customVisual ? (
              customVisual
            ) : imageSrc ? (
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={imageSrc} 
                  alt={imageAlt}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : null}
          </div>

        </div>
      </div>
    </section>
  );
}