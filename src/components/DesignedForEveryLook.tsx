"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CategoryItem {
  id: string;
  name: string;
  badge: string;
  desc: string;
  image: string;
  price: string;
  query: string;
}

const categoryItems: CategoryItem[] = [
  {
    id: "cat-eyeglasses",
    name: "Prescription Eyeglasses",
    badge: "Daily Wear",
    desc: "Lightweight titanium and acetate frames engineered for all-day comfort and sharp focus.",
    image: "/images/cat_eyeglasses.jpg",
    price: "From ₹1,299",
    query: "Hello ChashmaBajaar, I want to explore prescription daily eyeglasses.",
  },
  {
    id: "cat-sunglasses",
    name: "Polarized Sunglasses",
    badge: "100% UV",
    desc: "Certified UV400 lenses with anti-reflective back coating for intense desert sunlight.",
    image: "/images/cat_sunglasses.jpg",
    price: "From ₹1,899",
    query: "Hello ChashmaBajaar, I want to explore polarized sunglasses.",
  },
  {
    id: "cat-computer",
    name: "Computer Screen Glasses",
    badge: "Anti-Glare",
    desc: "Zero-power blue-cut filter to relieve digital eye fatigue and prevent headaches.",
    image: "/images/cat_computer.jpg",
    price: "From ₹999",
    query: "Hello ChashmaBajaar, I want to explore zero-power computer glasses.",
  },
  {
    id: "cat-contacts",
    name: "Certified Contact Lenses",
    badge: "Certified",
    desc: "High-hydration daily, monthly, and colored lenses sourced from certified optical labs.",
    image: "/images/cat_contact_lenses.jpg",
    price: "Inquire In-Store",
    query: "Hello ChashmaBajaar, I want to inquire about certified contact lenses.",
  },
];

export default function DesignedForEveryLook() {
  return (
    <section id="collections" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 bg-neutral-50/70 border-t border-neutral-100">
      <div className="w-full max-w-[1500px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-accent block mb-2">
            Optical Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-neutral-900 tracking-tight mb-4">
            Designed for Every Look
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed">
            Specialized eyewear collections calibrated for work, travel, screen time, and daily wear.
          </p>
        </div>

        {/* 4 Cards Grid with Generous, Wide Proportions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8 lg:gap-9">
          {categoryItems.map((item) => (
            <a
              key={item.id}
              href={`https://wa.me/917014196382?text=${encodeURIComponent(item.query)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-3xl p-6 sm:p-8 lg:p-9 border border-neutral-200/90 hover:border-neutral-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-neutral-100 mb-6 shadow-2xs">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-108"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-xs font-bold uppercase tracking-wider text-neutral-900 shadow-xs">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <h3 className="font-sans font-bold text-lg sm:text-xl text-neutral-900 group-hover:text-accent transition-colors mb-2">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900">
                <span className="text-accent font-extrabold text-base">{item.price}</span>
                <span className="inline-flex items-center gap-1.5 group-hover:text-accent group-hover:translate-x-1.5 transition-all">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
