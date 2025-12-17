"use client";
import { StarIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Facilities Manager, TechCorp",
    content: "Vision Integrated Systems transformed our conference rooms. The video clarity is amazing and the system is so easy to use.",
  },
  {
    name: "Michael Ross",
    role: "Director of IT, EduCampus",
    content: "The fiber backbone installation was flawless. Their team worked around our schedule and finished ahead of time.",
  },
  {
    name: "David Chen",
    role: "Owner, Chen Logistics",
    content: "Security is vital for our warehouses. Vision provided a robust camera system that we can access from anywhere.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">"{t.content}"</p>
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-blue-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}