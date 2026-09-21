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
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white mt-12 sm:mt-20">
        {/* Headline: Italic Serif + Bold Sans mix */}
        <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.08] mb-4 sm:mb-6">
          <span className="block font-serif italic font-normal text-neutral-200">
            See Beyond
          </span>
          <span className="block font-sans font-extrabold uppercase tracking-tight text-white mt-1">
            Wear Confidence
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-neutral-200 text-sm sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto font-normal leading-relaxed mb-8 sm:mb-10 text-balance px-2">
          Premium sunglasses and precision prescription eyeglasses crafted for every journey.
          Stylish, lightweight and engineered to protect eyes while elevating your look.
        </p>

        {/* Pill Buttons: Responsive column on mobile, row on desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-sm sm:max-w-none mx-auto">
          <a
            href="#featured"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white text-neutral-900 hover:bg-accent hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-xl"
          >
            <span>Explore Collection</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="https://wa.me/917014196382?text=Hello%20ChashmaBajaar%2C%20I%20would%20like%20to%20order%20or%20inquire%20about%20eyewear."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border border-white/40 hover:border-white text-white hover:bg-white/10 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 backdrop-blur-sm"
          >
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
