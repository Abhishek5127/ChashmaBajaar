"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function LookbookCommunity() {
  const images = [
    { src: "/images/indian_man_eyewear.jpg", alt: "Indian Man in Luxury Eyewear" },
    { src: "/images/indian_woman_eyewear.jpg", alt: "Indian Woman in Optical Glasses" },
    { src: "/images/cat_sunglasses.jpg", alt: "Polarized Sunwear Collection" },
    { src: "/images/cat_eyeglasses.jpg", alt: "Daily Acetate Eyeglasses" },
    { src: "/images/grid_lifestyle.jpg", alt: "Modern Optical Styling" },
    { src: "/images/hero_lifestyle.jpg", alt: "Rajasthan Heritage Sunwear" },
  ];

  return (
    <section className="py-14 sm:py-24 px-4 sm:px-10 lg:px-14 bg-white border-t border-neutral-100">
      <div className="w-full max-w-[1500px] mx-auto text-center mb-12">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-accent block mb-2">
          Bijaynagar Optical Style
        </span>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-neutral-900 tracking-tight">
          Crafted for Every Face
        </h3>
      </div>

      <div className="w-full max-w-[1500px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-100 group shadow-xs border border-neutral-100"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <a
                href="https://wa.me/917014196382?text=Hello%20ChashmaBajaar%2C%20I%20saw%20this%20look%20on%20your%20website%20and%20want%20similar%20frames."
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-md hover:bg-accent hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
