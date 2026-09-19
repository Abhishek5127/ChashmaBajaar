"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, ArrowUpRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  shape: string;
  badge?: string;
  badgeType?: "popular" | "sale" | "new";
  image: string;
  colors: string[];
  message: string;
}

const featuredProducts: Product[] = [
  {
    id: "vintage-gold-aviator",
    name: "Vintage Metallic Gold Aviator",
    price: "₹1,899",
    originalPrice: "₹2,499",
    shape: "DOUBLE BROW AVIATOR",
    badge: "Popular",
    badgeType: "popular",
    image: "/images/prod_gold_aviator.jpg",
    colors: ["#D4AF37", "#141414", "#C9A567"],
    message: "I am interested in Vintage Metallic Gold Aviator (₹1,899) at ChashmaBajaar.",
  },
  {
    id: "matte-black-executive",
    name: "Matte Black Executive Frame",
    price: "₹1,299",
    originalPrice: "₹1,799",
    shape: "ARCHITECTURAL RECTANGULAR",
    badge: "Sale",
    badgeType: "sale",
    image: "/images/prod_matte_black.jpg",
    colors: ["#141414", "#3D3D3D"],
    message: "I am interested in Matte Black Executive Frame (₹1,299) at ChashmaBajaar.",
  },
  {
    id: "crystal-transparent-acetate",
    name: "Crystal Transparent Acetate",
    price: "₹1,499",
    originalPrice: "₹1,999",
    shape: "ROUND BIO-ACETATE",
    badge: "New Arrival",
    badgeType: "new",
    image: "/images/prod_crystal_acetate.jpg",
    colors: ["#E8ECEF", "#D5D8DC", "#B0BEC5"],
    message: "I am interested in Crystal Transparent Acetate (₹1,499) at ChashmaBajaar.",
  },
  {
    id: "smart-shield-blue-cut",
    name: "Smart Shield Blue-Cut Glass",
    price: "₹999",
    originalPrice: "₹1,499",
    shape: "BLUE-CUT SCREEN SHIELD",
    badge: "Best Value",
    badgeType: "sale",
    image: "/images/prod_smart_shield.jpg",
    colors: ["#1A202C", "#2D3748"],
    message: "I am interested in Smart Shield Blue-Cut Glass (₹999) at ChashmaBajaar.",
  },
];

export default function FeaturedEyewear() {
  const [activeTab, setActiveTab] = useState<"bestsellers" | "new">("bestsellers");

  return (
    <section id="featured" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 bg-white">
      <div className="w-full max-w-[1500px] mx-auto">
        {/* Section Header with Large Confident Typography */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 pb-6 border-b border-neutral-100 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-accent block mb-2.5">
              Curated Eyewear Collection
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-neutral-900 tracking-tight">
              Featured Eyewear
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <button
              onClick={() => setActiveTab("bestsellers")}
              className={`px-6 py-3 rounded-full transition-all duration-200 ${
                activeTab === "bestsellers"
                  ? "bg-neutral-900 text-white shadow-md"
                  : "bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200"
              }`}
            >
              Best Sellers
            </button>
            <button
              onClick={() => setActiveTab("new")}
              className={`px-6 py-3 rounded-full transition-all duration-200 ${
                activeTab === "new"
                  ? "bg-neutral-900 text-white shadow-md"
                  : "bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200"
              }`}
            >
              New Arrivals
            </button>
          </div>
        </div>

        {/* 4-Column Product Grid with Large, Close-Up Spectacles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8 lg:gap-9">
          {featuredProducts.map((prod) => (
            <div
              key={prod.id}
              className="group bg-neutral-50/80 rounded-3xl p-6 sm:p-8 lg:p-9 border border-neutral-200/90 hover:border-neutral-400 hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Large Product Canvas - Spectacles fill the frame cleanly without tiny margins */}
                <div className="relative w-full h-64 sm:h-76 lg:h-80 rounded-2xl overflow-hidden bg-white mb-6 flex items-center justify-center p-3 sm:p-4 border border-neutral-100 shadow-2xs">
                  <div className="relative w-full h-full flex items-center justify-center scale-115 group-hover:scale-125 transition-transform duration-500 ease-out">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Badges on top */}
                  {prod.badge && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 z-10">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs ${
                          prod.badgeType === "popular"
                            ? "bg-neutral-900 text-white"
                            : prod.badgeType === "sale"
                            ? "bg-blue-600 text-white"
                            : "bg-accent text-white"
                        }`}
                      >
                        {prod.badge}
                      </span>
                    </div>
                  )}

                  {/* Hover WhatsApp CTA Button */}
                  <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                    <a
                      href={`https://wa.me/917014196382?text=${encodeURIComponent(prod.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-neutral-900 hover:bg-accent text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Shape / Category Tag */}
                <span className="text-xs font-bold tracking-[0.22em] text-neutral-400 uppercase block mb-2 text-center">
                  {prod.shape}
                </span>

                {/* Product Name */}
                <h3 className="font-sans font-bold text-base sm:text-lg lg:text-xl text-neutral-900 text-center line-clamp-1 mb-2 group-hover:text-accent transition-colors">
                  {prod.name}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-accent">
                    {prod.price}
                  </span>
                  {prod.originalPrice && (
                    <span className="text-sm sm:text-base text-neutral-400 line-through font-medium">
                      {prod.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Color Swatches and Direct Order Link */}
              <div className="pt-4 border-t border-neutral-150 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  {prod.colors.map((c, i) => (
                    <span
                      key={i}
                      className="w-4.5 h-4.5 rounded-full border border-neutral-300 shadow-2xs"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>

                <a
                  href={`https://wa.me/917014196382?text=${encodeURIComponent(prod.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold text-neutral-900 hover:text-accent uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Indicator Slider Bar */}
        <div className="mt-16 flex justify-center">
          <div className="w-40 h-1.5 bg-neutral-200 rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-neutral-900 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
