"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: "prescription" | "sunglasses" | "computer";
  price: string;
  originalPrice?: string;
  shape: string;
  badge?: string;
  badgeType?: "popular" | "sale" | "new" | "value";
  image: string;
  colors: string[];
  message: string;
}

const featuredProducts: Product[] = [
  {
    id: "vintage-gold-aviator",
    name: "Vintage Metallic Gold Aviator",
    category: "sunglasses",
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
    category: "prescription",
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
    category: "prescription",
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
    category: "computer",
    price: "₹999",
    originalPrice: "₹1,499",
    shape: "BLUE-CUT SCREEN SHIELD",
    badge: "Best Value",
    badgeType: "value",
    image: "/images/prod_smart_shield.jpg",
    colors: ["#1A202C", "#2D3748"],
    message: "I am interested in Smart Shield Blue-Cut Glass (₹999) at ChashmaBajaar.",
  },
  {
    id: "heritage-desert-wayfarer",
    name: "Polarized Rajasthan Sunwear",
    category: "sunglasses",
    price: "₹1,899",
    originalPrice: "₹2,399",
    shape: "100% UV POLARIZED",
    badge: "Desert Edition",
    badgeType: "popular",
    image: "/images/cat_sunglasses.jpg",
    colors: ["#2C3E50", "#141414", "#8E44AD"],
    message: "I am interested in Polarized Rajasthan Sunwear (₹1,899) at ChashmaBajaar.",
  },
  {
    id: "titanium-comfort-optical",
    name: "Titanium Daily Prescription",
    category: "prescription",
    price: "₹1,399",
    originalPrice: "₹1,899",
    shape: "FEATHERWEIGHT METAL",
    badge: "Ultra Light",
    badgeType: "new",
    image: "/images/cat_eyeglasses.jpg",
    colors: ["#B0BEC5", "#37474F", "#D4AF37"],
    message: "I am interested in Titanium Daily Prescription (₹1,399) at ChashmaBajaar.",
  },
  {
    id: "digital-relief-pro",
    name: "Digital Workstation Filter",
    category: "computer",
    price: "₹1,099",
    originalPrice: "₹1,599",
    shape: "ZERO-POWER ANTI-GLARE",
    badge: "Eye Care",
    badgeType: "value",
    image: "/images/cat_computer.jpg",
    colors: ["#141414", "#4A5568"],
    message: "I am interested in Digital Workstation Filter (₹1,099) at ChashmaBajaar.",
  },
  {
    id: "gold-double-rim-aviator",
    name: "Classic Heritage Gold Aviator",
    category: "sunglasses",
    price: "₹1,799",
    originalPrice: "₹2,299",
    shape: "RETRO DROP AVIATOR",
    badge: "Top Rated",
    badgeType: "popular",
    image: "/images/sku_gold_aviator.jpg",
    colors: ["#D4AF37", "#141414"],
    message: "I am interested in Classic Heritage Gold Aviator (₹1,799) at ChashmaBajaar.",
  },
];

export default function FeaturedEyewear() {
  const [activeCategory, setActiveCategory] = useState<"all" | "prescription" | "sunglasses" | "computer">("all");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const filteredProducts = activeCategory === "all"
    ? featuredProducts
    : featuredProducts.filter((p) => p.category === activeCategory);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      const progress = scrollWidth > clientWidth ? (scrollLeft / (scrollWidth - clientWidth)) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    }
  };

  useEffect(() => {
    checkScroll();
    const current = scrollRef.current;
    if (current) {
      current.addEventListener("scroll", checkScroll, { passive: true });
      return () => current.removeEventListener("scroll", checkScroll);
    }
  }, [filteredProducts]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="featured" className="py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-14 bg-white overflow-hidden w-full max-w-full">
      <div className="w-full max-w-[1500px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-6 border-b border-neutral-100 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-accent mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Eyewear Carousel</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-neutral-900 tracking-tight">
              Featured Eyewear
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1 font-normal">
              Swipe or use arrows to explore precision frames and certified sunglasses.
            </p>
          </div>

          {/* Filter Tabs & Navigation Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 p-1 bg-neutral-100 rounded-full overflow-x-auto max-w-full">
              {[
                { id: "all", label: "All" },
                { id: "prescription", label: "Prescription" },
                { id: "sunglasses", label: "Sunglasses" },
                { id: "computer", label: "Blue-Cut" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveCategory(tab.id as any);
                    if (scrollRef.current) scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                  }}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                    activeCategory === tab.id
                      ? "bg-neutral-900 text-white shadow-xs"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Desktop / Tablet Carousel Arrow Buttons */}
            <div className="hidden sm:flex items-center gap-2 ml-auto">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll Carousel Left"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? "border-neutral-300 text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 shadow-xs active:scale-95"
                    : "border-neutral-200 text-neutral-300 cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll Carousel Right"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  canScrollRight
                    ? "border-neutral-300 text-neutral-900 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 shadow-xs active:scale-95"
                    : "border-neutral-200 text-neutral-300 cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Track with Snap & Touch Scrolling */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-4 sm:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="w-[270px] sm:w-[310px] md:w-[340px] lg:w-[360px] shrink-0 snap-start group bg-neutral-50/70 rounded-3xl p-5 sm:p-7 border border-neutral-200/90 hover:border-neutral-400 hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Canvas */}
                <div className="relative w-full h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden bg-white mb-5 flex items-center justify-center p-3 sm:p-4 border border-neutral-100 shadow-2xs">
                  <div className="relative w-full h-full flex items-center justify-center scale-110 group-hover:scale-120 transition-transform duration-500 ease-out">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 640px) 270px, (max-width: 1024px) 340px, 360px"
                    />
                  </div>

                  {/* Badge */}
                  {prod.badge && (
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span
                        className={`inline-block px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-xs ${
                          prod.badgeType === "popular"
                            ? "bg-neutral-900 text-white"
                            : prod.badgeType === "sale"
                            ? "bg-blue-600 text-white"
                            : prod.badgeType === "value"
                            ? "bg-emerald-700 text-white"
                            : "bg-accent text-white"
                        }`}
                      >
                        {prod.badge}
                      </span>
                    </div>
                  )}

                  {/* Hover Quick WhatsApp Order overlay */}
                  <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                    <a
                      href={`https://wa.me/917014196382?text=${encodeURIComponent(prod.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-neutral-900 hover:bg-accent text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Shape / Category Tag */}
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-1.5 text-center">
                  {prod.shape}
                </span>

                {/* Product Name */}
                <h3 className="font-sans font-bold text-base sm:text-lg text-neutral-900 text-center line-clamp-1 mb-2 group-hover:text-accent transition-colors">
                  {prod.name}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-center gap-2.5 mb-5">
                  <span className="font-sans font-extrabold text-xl sm:text-2xl lg:text-3xl text-accent">
                    {prod.price}
                  </span>
                  {prod.originalPrice && (
                    <span className="text-xs sm:text-sm text-neutral-400 line-through font-medium">
                      {prod.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Color Swatches and Direct Order Link */}
              <div className="pt-4 border-t border-neutral-150 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {prod.colors.map((c, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full border border-neutral-300 shadow-2xs"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>

                <a
                  href={`https://wa.me/917014196382?text=${encodeURIComponent(prod.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-800 hover:text-accent uppercase tracking-wider transition-colors group/link"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-accent" />
                  <span>Inquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Bottom Progress Tracker & Mobile Arrows */}
        <div className="mt-8 flex items-center justify-between gap-4 pt-4 border-t border-neutral-100">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Explore Collection
            </span>
            {/* Sleek Progress Bar */}
            <div className="w-28 sm:w-44 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent rounded-full transition-all duration-300"
                style={{ width: `${Math.max(15, scrollProgress)}%` }}
              />
            </div>
          </div>

          {/* Mobile Arrows (Visible on small screens) */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll Carousel Left"
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "border-neutral-300 text-neutral-900 bg-white"
                  : "border-neutral-200 text-neutral-300 opacity-40"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll Carousel Right"
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                canScrollRight
                  ? "border-neutral-300 text-neutral-900 bg-white"
                  : "border-neutral-200 text-neutral-300 opacity-40"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
