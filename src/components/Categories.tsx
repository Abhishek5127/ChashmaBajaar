"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Category {
  id: string;
  name: string;
  badge: string;
  description: string;
  image: string;
  inquiryText: string;
}

const categories: Category[] = [
  {
    id: "eyeglasses",
    name: "Eyeglasses",
    badge: "Daily Wear",
    description: "Durable, lightweight, and trendy frames curated for everyday comfort and style.",
    image: "/images/cat_eyeglasses.jpg",
    inquiryText: "Hello ChashmaBajaar, I would like to see your Eyeglasses collection for daily wear.",
  },
  {
    id: "sunglasses",
    name: "Sunglasses",
    badge: "100% UV",
    description: "100% UV protection and precision polarized lenses for superior glare reduction.",
    image: "/images/cat_sunglasses.jpg",
    inquiryText: "Hello ChashmaBajaar, I am looking for Polarized 100% UV Sunglasses.",
  },
  {
    id: "computer-glasses",
    name: "Computer Glasses",
    badge: "Anti-Glare",
    description: "Zero-power anti-glare blue-cut lenses engineered specifically for screen-heavy work.",
    image: "/images/cat_computer.jpg",
    inquiryText: "Hello ChashmaBajaar, I am interested in Zero-Power Anti-Glare Computer Glasses.",
  },
  {
    id: "contact-lenses",
    name: "Contact Lenses",
    badge: "Certified",
    description: "Daily, monthly, and colored lenses sourced exclusively from certified optical brands.",
    image: "/images/cat_contact_lenses.jpg",
    inquiryText: "Hello ChashmaBajaar, I want to inquire about Certified Daily, Monthly, and Colored Contact Lenses.",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-20 sm:py-28 px-6 sm:px-10 bg-chalk-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent block mb-2">
              Optical Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-ink-900 tracking-tight">
              We Deal In
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink-500 font-normal max-w-md leading-relaxed">
            Four specialized collections tailored for clarity, screen ergonomics, and sun protection.
          </p>
        </div>

        {/* 4 Clean White Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.a
              key={cat.id}
              href={`https://wa.me/917014196382?text=${encodeURIComponent(cat.inquiryText)}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-white rounded-2xl p-6 border border-neutral-200/90 hover:border-neutral-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rounded-Square Product Photo (No circular masks) */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-chalk-200 mb-6">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-ink-800 shadow-sm">
                      {cat.badge}
                    </span>
                  </div>
                </div>

                <h3 className="font-sans font-bold text-xl text-ink-900 group-hover:text-accent transition-colors duration-200 mb-2">
                  {cat.name}
                </h3>

                <p className="text-xs sm:text-sm text-ink-500 font-normal leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              {/* "Explore" Text Link with Arrow sliding on hover */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-ink-800 group-hover:text-accent transition-colors duration-200">
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
