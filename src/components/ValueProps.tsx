"use client";

import { Eye, ShieldCheck, MessageCircle, Clock } from "lucide-react";

export default function ValueProps() {
  const values = [
    {
      icon: Eye,
      title: "Free Computerized Testing",
      desc: "Accurately calibrated spherical & cylindrical lens checks with zero walk-in consultation fee.",
    },
    {
      icon: ShieldCheck,
      title: "Certified Optical Guarantee",
      desc: "100% UV400, polarized sun lenses, and certified multi-coated anti-glare filters.",
    },
    {
      icon: MessageCircle,
      title: "Instant WhatsApp Support",
      desc: "Direct guidance with our optical team, custom power consultation, and fast order booking.",
    },
    {
      icon: Clock,
      title: "Open 7 Days a Week",
      desc: "Monday to Sunday · 10:00 AM – 9:00 PM. Welcoming walk-ins daily at Byavar Road, Bijaynagar.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-14 border-y border-neutral-200 bg-white">
      <div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <div key={i} className="flex items-start gap-4 p-5 rounded-2xl hover:bg-neutral-50 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 text-accent shadow-2xs">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-base sm:text-lg text-neutral-900 mb-1.5">
                  {v.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
