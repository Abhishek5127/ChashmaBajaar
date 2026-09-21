"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Featured", href: "#featured" },
    { label: "Collections", href: "#collections" },
    { label: "Eye Testing", href: "#eye-test" },
    { label: "Visit Store", href: "#boutique" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md w-full max-w-full ${
        scrolled
          ? "shadow-sm border-b border-neutral-200/90 py-3"
          : "border-b border-neutral-100 py-3.5 sm:py-4 lg:py-5"
      }`}
    >
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left Corner: Brand Logo + Brand Name kept together with clean left padding */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 shrink-0">
            <Image
              src="/logo.png"
              alt="ChashmaBajaar Eyewear Logo"
              fill
              priority
              className="object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col shrink-0">
            <span className="font-sans font-extrabold text-sm sm:text-lg lg:text-xl tracking-[0.14em] sm:tracking-[0.18em] text-neutral-900 leading-tight">
              CHASHMABAJAAR
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-neutral-400 font-semibold mt-0.5">
              Bijaynagar · Rajasthan
            </span>
          </div>
        </a>

        {/* Middle Navigation Links: Desktop only (Centered & well separated from brand and actions) */}
        <nav className="hidden lg:flex items-center justify-center gap-5 xl:gap-7 2xl:gap-9 text-xs xl:text-sm font-semibold uppercase tracking-[0.14em] text-neutral-600 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-neutral-950 transition-colors py-1 border-b-2 border-transparent hover:border-neutral-900 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions for Desktop */}
        <div className="hidden lg:flex items-center gap-2.5 sm:gap-3 shrink-0">
          <a
            href="tel:+917014196382"
            className="flex items-center gap-1.5 text-xs xl:text-sm font-semibold text-neutral-700 hover:text-neutral-950 px-3.5 py-2 rounded-full border border-neutral-200 hover:border-neutral-400 transition-colors shrink-0"
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

        {/* Mobile & Tablet Action Icons (Fits 100% within mobile viewport, no horizontal overflow) */}
        <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Quick Call */}
          <a
            href="tel:+917014196382"
            aria-label="Call ChashmaBajaar"
            className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-800 hover:bg-neutral-50 transition-colors"
          >
            <Phone className="w-4 h-4 text-accent" />
          </a>

          {/* Quick WhatsApp */}
          <a
            href="https://wa.me/917014196382?text=Hello%20ChashmaBajaar%2C%20I%20would%20like%20to%20order%20or%20inquire%20about%20eyewear."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Order"
            className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-accent transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
          </a>

          {/* Mobile Menu Hamburger / Close Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 hover:bg-neutral-200 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Slide-Down Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[100%] bg-white/98 backdrop-blur-xl border-b border-neutral-200 shadow-2xl z-50 max-h-[calc(100vh-60px)] overflow-y-auto transition-all animate-fadeIn">
          <div className="px-5 py-6 space-y-6">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-bold text-neutral-900 hover:text-accent py-2.5 border-b border-neutral-100 transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-neutral-400" />
                </a>
              ))}
            </nav>

            {/* Mobile CTAs */}
            <div className="space-y-3 pt-2">
              <a
                href="https://wa.me/917014196382?text=Hello%20ChashmaBajaar%2C%20I%20would%20like%20to%20order%20or%20inquire%20about%20eyewear."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full bg-neutral-900 text-white hover:bg-accent text-sm font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Order & Inquiry</span>
              </a>

              <a
                href="tel:+917014196382"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-neutral-300 text-neutral-800 hover:border-neutral-500 text-sm font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>Call Store: +91 7014196382</span>
              </a>
            </div>

            {/* Store Quick Info Footer */}
            <div className="pt-4 border-t border-neutral-100 text-xs text-neutral-500 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Opposite Nagar Palika, Byavar Road, Bijaynagar, Rajasthan</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>Open Daily: 10:00 AM – 9:00 PM (Mon–Sun)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
