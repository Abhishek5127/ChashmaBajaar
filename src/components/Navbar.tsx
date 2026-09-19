"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        scrolled
          ? "shadow-sm border-b border-neutral-200/90 py-3.5"
          : "border-b border-neutral-100 py-4 sm:py-5"
      }`}
    >
      <div className="w-full px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 flex items-center justify-between gap-4">
        {/* Left Corner: Brand Logo + Brand Name kept together with generous left padding */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0">
            <Image
              src="/logo.png"
              alt="ChashmaBajaar Eyewear Logo"
              fill
              priority
              className="object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col shrink-0">
            <span className="font-sans font-extrabold text-base sm:text-lg lg:text-xl tracking-[0.18em] text-neutral-900 leading-tight">
              CHASHMABAJAAR
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 font-semibold mt-0.5">
              Bijaynagar · Rajasthan
            </span>
          </div>
        </a>

        {/* Middle Navigation Links: Clearly separated from brand and actions */}
        <nav className="hidden lg:flex items-center justify-center gap-5 xl:gap-7 2xl:gap-9 text-xs xl:text-sm font-semibold uppercase tracking-[0.14em] text-neutral-600 shrink-0">
          <a
            href="#"
            className="hover:text-neutral-950 transition-colors py-1 border-b-2 border-transparent hover:border-neutral-900 whitespace-nowrap"
          >
            Home
          </a>
          <a
            href="#featured"
            className="hover:text-neutral-950 transition-colors py-1 border-b-2 border-transparent hover:border-neutral-900 whitespace-nowrap"
          >
            Featured
          </a>
          <a
            href="#collections"
            className="hover:text-neutral-950 transition-colors py-1 border-b-2 border-transparent hover:border-neutral-900 whitespace-nowrap"
          >
            Collections
          </a>
          <a
            href="#eye-test"
            className="hover:text-neutral-950 transition-colors py-1 border-b-2 border-transparent hover:border-neutral-900 whitespace-nowrap"
          >
            Eye Testing
          </a>
          <a
            href="#boutique"
            className="hover:text-neutral-950 transition-colors py-1 border-b-2 border-transparent hover:border-neutral-900 whitespace-nowrap"
          >
            Visit Store
          </a>
        </nav>

        {/* Right CTA Actions: Call + Solid WhatsApp Order Pill in the RIGHT CORNER */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <a
            href="tel:+917014196382"
            className="hidden sm:flex items-center gap-1.5 text-xs xl:text-sm font-semibold text-neutral-700 hover:text-neutral-950 px-3.5 py-2 rounded-full border border-neutral-200 hover:border-neutral-400 transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span className="tracking-wide whitespace-nowrap">+91 7014196382</span>
          </a>

          <a
            href="https://wa.me/917014196382?text=Hello%20ChashmaBajaar%2C%20I%20would%20like%20to%20order%20or%20inquire%20about%20eyewear."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-neutral-900 text-white hover:bg-accent text-xs xl:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="whitespace-nowrap">WhatsApp Order</span>
          </a>
        </div>
      </div>
    </header>
  );
}
