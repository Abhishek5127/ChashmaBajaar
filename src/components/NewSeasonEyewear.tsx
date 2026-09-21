"use client";

import Image from "next/image";
import { MessageCircle, ArrowUpRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  shape: string;
  image: string;
  colors: string[];
  message: string;
}

const seasonProducts: Product[] = [
  {
    id: "luxury-gold-aviator",
    name: "Vintage Metallic Gold Aviator",
    price: "₹1,899",
    originalPrice: "₹2,499",
    shape: "AVIATOR",
    image: "/images/prod_gold_aviator.jpg",
    colors: ["#D4AF37", "#141414", "#C9A567"],
    message: "I want to order Vintage Metallic Gold Aviator (₹1,899) from New Season collection.",
  },
  {
    id: "matte-exec",
    name: "Matte Black Executive Frame",
    price: "₹1,299",
    originalPrice: "₹1,799",
    shape: "RECTANGULAR",
    image: "/images/prod_matte_black.jpg",
    colors: ["#141414", "#333333"],
    message: "I want to order Matte Black Executive Frame (₹1,299) from New Season collection.",
  },
  {
    id: "blue-cut-screen",
    name: "Smart Shield Blue-Cut Glass",
    price: "₹999",
    originalPrice: "₹1,499",
    shape: "ANTI-GLARE",
    image: "/images/prod_smart_shield.jpg",
    colors: ["#1A202C", "#2D3748"],
    message: "I want to order Smart Shield Blue-Cut Glass (₹999) from New Season collection.",
  },
  {
    id: "crystal-clear",
    name: "Crystal Transparent Acetate",
    price: "₹1,499",
    originalPrice: "₹1,999",
    shape: "BIO-ACETATE",
    image: "/images/prod_crystal_acetate.jpg",
    colors: ["#E8ECEF", "#D5D8DC"],
    message: "I want to order Crystal Transparent Acetate (₹1,499) from New Season collection.",
  },
];

export default function NewSeasonEyewear() {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 bg-neutral-50/70 border-t border-neutral-100">
      <div className="w-full max-w-[1500px] mx-auto">
        <div className="mb-12 text-center sm:text-left">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-accent block mb-2">
            Bijaynagar Lookbook
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-neutral-900 tracking-tight">
            New Season Eyewear
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-normal mt-2">
            Most-loved optical frames and sunglasses chosen by our in-store customers.
          </p>
        </div>

        {/* Split Grid: Left Lifestyle Hero Tile + Right 2x2 Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Vertical Lifestyle Tile featuring Indian Woman in Glasses */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[560px] lg:min-h-[680px] bg-neutral-900 flex flex-col justify-end p-8 sm:p-12 lg:p-14 group shadow-sm">
            <Image
              src="/images/indian_woman_eyewear.jpg"
              alt="Indian Woman in Stylish Eyewear on Rajasthan Heritage Terrace"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="relative z-10 text-white">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-neutral-300 block mb-2.5">
                Special In-Store Privilege
              </span>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-3 leading-tight">
                Complimentary Frame Fitting
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base font-normal leading-relaxed mb-8">
                Receive personalized nose pad adjustment, precision temple bending, and a complimentary
                lens microfiber care kit with every purchase.
              </p>

              <a
                href="https://wa.me/917014196382?text=Hello%20ChashmaBajaar%2C%20I%20would%20like%20to%20inquire%20about%20your%20in-store%20promotions."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-neutral-900 hover:bg-accent hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <span>Visit Boutique</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right 2x2 Product Grid (Desktop) & Swipeable Carousel (Mobile) */}
          <div className="lg:col-span-7 flex sm:grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-7 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar pb-3 -mx-4 px-4 sm:mx-0 sm:px-0">
            {seasonProducts.map((prod) => (
              <div
                key={prod.id}
                className="w-[270px] sm:w-auto shrink-0 snap-start group bg-white rounded-3xl p-5 sm:p-7 border border-neutral-200/90 hover:border-neutral-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden bg-neutral-50 mb-5 p-3 sm:p-4 flex items-center justify-center border border-neutral-100 shadow-2xs">
                    <div className="relative w-full h-full flex items-center justify-center scale-115 group-hover:scale-122 transition-transform duration-500 ease-out">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        className="object-contain object-center"
                        sizes="(max-width: 640px) 100vw, 25vw"
                      />
                    </div>

                    <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <a
                        href={`https://wa.me/917014196382?text=${encodeURIComponent(prod.message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-neutral-900 hover:bg-accent text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>WhatsApp Order</span>
                      </a>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-1.5 text-center">
                    {prod.shape}
                  </span>
                  <h4 className="font-sans font-bold text-base sm:text-lg text-neutral-900 text-center line-clamp-1 mb-2 group-hover:text-accent transition-colors">
                    {prod.name}
                  </h4>
                  <div className="flex items-center justify-center gap-2.5 mb-4">
                    <span className="font-sans font-extrabold text-xl sm:text-2xl text-accent">
                      {prod.price}
                    </span>
                    <span className="text-sm text-neutral-400 line-through font-medium">
                      {prod.originalPrice}
                    </span>
                  </div>
                </div>

                <div className="pt-3.5 border-t border-neutral-100 flex items-center justify-center gap-2">
                  {prod.colors.map((c, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full border border-neutral-300 shadow-2xs"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
