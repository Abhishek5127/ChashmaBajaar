"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function DualBanner() {
  return (
    <section className="py-8 sm:py-16 px-4 sm:px-10 lg:px-14 bg-white">
      <div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {/* Banner 1: Prescription Glasses with Indian Woman in Glasses */}
        <div className="relative rounded-3xl overflow-hidden h-[420px] sm:h-[540px] lg:h-[660px] group bg-neutral-900 flex flex-col justify-end p-6 sm:p-12 lg:p-16 shadow-sm">
          <Image
            src="/images/indian_woman_eyewear.jpg"
            alt="Indian Woman Wearing Prescription Eyewear in Rajasthan"
            fill
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

          <div className="relative z-10 text-white">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-neutral-300 block mb-2">
              Everyday Architecture
            </span>
            <h3 className="font-sans font-extrabold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-2.5 sm:mb-3.5 leading-tight">
              Prescription Glasses
            </h3>
            <p className="text-neutral-300 text-xs sm:text-base lg:text-lg font-normal max-w-md mb-6 sm:mb-8 leading-relaxed">
              Featherweight titanium and durable acetate frames calibrated for screen fatigue, reading, and daily elegance.
            </p>
            <a
              href="https://wa.me/917014196382?text=Hello%20ChashmaBajaar%2C%20I%20am%20interested%20in%20Prescription%20Eyeglasses."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-white text-neutral-900 hover:bg-accent hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-lg"
            >
              <span>Explore Optical Frames</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Banner 2: Designer Sunglasses with Indian Man in Stylish Eyewear */}
        <div className="relative rounded-3xl overflow-hidden h-[420px] sm:h-[540px] lg:h-[660px] group bg-neutral-900 flex flex-col justify-end p-6 sm:p-12 lg:p-16 shadow-sm">
          <Image
            src="/images/indian_man_eyewear.jpg"
            alt="Indian Man Wearing Designer Eyewear in Rajasthan"
            fill
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

          <div className="relative z-10 text-white">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-neutral-300 block mb-2.5">
              High-Protection Sunwear
            </span>
            <h3 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-3.5 leading-tight">
              Designer Sunglasses
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base lg:text-lg font-normal max-w-md mb-8 leading-relaxed">
              100% UV polarized lenses engineered to cancel harsh reflections and elevate your outdoor look.
            </p>
            <a
              href="https://wa.me/917014196382?text=Hello%20ChashmaBajaar%2C%20I%20am%20interested%20in%20Polarized%20Sunglasses."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 rounded-full bg-white text-neutral-900 hover:bg-accent hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-lg"
            >
              <span>Explore Sunglasses</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
