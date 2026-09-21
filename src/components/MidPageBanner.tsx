"use client";

import Image from "next/image";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export default function MidPageBanner() {
  return (
    <section className="relative w-full h-[500px] sm:h-[650px] lg:h-[720px] flex items-center justify-center overflow-hidden bg-neutral-900 my-12 sm:my-24">
      <Image
        src="/images/indian_man_eyewear.jpg"
        alt="Indian Man Wearing Optical Eyewear in Rajasthan"
        fill
        className="object-cover object-center scale-100"
        sizes="100vw"
      />
      {/* Cinematic dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-10 text-center text-white">
        <span className="font-serif italic text-xl sm:text-4xl md:text-5xl text-neutral-200 block mb-2">
          Stylish shades for
        </span>
        <h2 className="font-sans font-extrabold text-3xl xs:text-4xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase text-white mb-4 sm:mb-6">
          PERFECT VISION
        </h2>
        <p className="text-xs sm:text-xl lg:text-2xl text-neutral-300 font-normal max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed text-balance">
          Crafted for visual comfort and everyday elegance. Walk into our Bijaynagar store opposite Nagar
          Palika to experience personal frame fitting and free computerized testing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-sm sm:max-w-none mx-auto">
          <a
            href="https://wa.me/917014196382?text=Hello%20ChashmaBajaar%2C%20I%20am%20interested%20in%20trying%20eyewear%20at%20your%20Bijaynagar%20store."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white text-neutral-900 hover:bg-accent hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-xl"
          >
            <MessageCircle className="w-4 h-4 fill-neutral-900" />
            <span>Consult on WhatsApp</span>
          </a>

          <a
            href="#boutique"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/50 hover:border-white text-white hover:bg-white/10 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors backdrop-blur-sm"
          >
            <span>Store Directions</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
