"use client";

import { Eye, Shield, Laptop, CheckCircle2, MessageCircle } from "lucide-react";

export default function BrandTrustStrip() {
  const features = [
    { icon: Eye, title: "FREE EYE TESTING", desc: "Computerized diagnostics" },
    { icon: Shield, title: "100% UV POLARIZED", desc: "Anti-glare sunwear" },
    { icon: Laptop, title: "ZERO-POWER BLUE CUT", desc: "Digital screen shield" },
    { icon: CheckCircle2, title: "CERTIFIED CONTACTS", desc: "Daily & monthly lenses" },
    { icon: MessageCircle, title: "WHATSAPP ORDERING", desc: "Fast direct checkout" },
  ];

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-10 lg:px-14 border-b border-neutral-200 bg-white">
      <div className="w-full max-w-[1500px] mx-auto text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-neutral-400 font-bold mb-6 sm:mb-10 px-2">
          Explore an Exclusive Collection of Precision Eyewear at ChashmaBajaar
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 lg:gap-10 items-stretch justify-center">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl hover:bg-neutral-50 transition-colors bg-neutral-50/50 sm:bg-transparent border border-neutral-100 sm:border-0 ${
                  idx === 4 ? "col-span-2 sm:col-span-1 max-w-xs mx-auto w-full sm:max-w-none" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3 text-accent shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-sans font-extrabold text-xs sm:text-sm tracking-[0.14em] text-neutral-900 uppercase">
                  {item.title}
                </span>
                <span className="text-xs text-neutral-500 mt-1">
                  {item.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
