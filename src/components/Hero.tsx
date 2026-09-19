"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[88vh] min-h-[640px] max-h-[920px] flex items-center justify-center overflow-hidden bg-neutral-900">
      {/* Full-bleed outdoor lifestyle photograph */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_lifestyle.jpg"
          alt="ChashmaBajaar Lifestyle Eyewear Campaign"
          fill
          priority
          className="object-cover object-center scale-100"
          sizes="100vw"
        />
        {/* Soft natural vignette/contrast overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
      </div>

      {/* Centered Content overlay matching Moptica reference */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-12 sm:mt-20">
        {/* Headline: Italic Serif + Bold Sans mix */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight leading-[1.06] mb-6">
          <span className="block font-serif italic font-normal text-neutral-200">
            See Beyond
          </span>
          <span className="block font-sans font-extrabold uppercase tracking-tight text-white mt-1">
            Wear Confidence
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-neutral-200 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto font-normal leading-relaxed mb-10 text-balance">
          Premium sunglasses and precision prescription eyeglasses crafted for every journey.
          Stylish, lightweight and engineered to protect eyes while elevating your look.
        </p>

        {/* Pill Button: Explore Collection */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <a
            href="#featured"
            className="inline-flex items-center gap-2 px-9 sm:px-10 py-4 rounded-full bg-white text-neutral-900 hover:bg-accent hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-xl"
          >
            <span>Explore Collection</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="https://wa.me/917014196382?text=Hello%20ChashmaBajaar%2C%20I%20would%20like%20to%20order%20or%20inquire%20about%20eyewear."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-9 sm:px-10 py-4 rounded-full border border-white/40 hover:border-white text-white hover:bg-white/10 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 backdrop-blur-sm"
          >
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
