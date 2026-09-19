"use client";

import Image from "next/image";
import { ArrowUp, Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111113] text-neutral-400 pt-20 pb-12 px-6 sm:px-10 lg:px-14 border-t border-neutral-800">
      <div className="w-full max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-neutral-800 items-start">
          {/* Brand Info with Official Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 bg-white rounded-2xl p-1 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="ChashmaBajaar Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-xl tracking-[0.2em] text-white leading-tight">
                  CHASHMABAJAAR
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-400 font-semibold">
                  Bijaynagar · Rajasthan
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-400 font-normal leading-relaxed max-w-sm mb-6">
              Bijaynagar’s destination for precision prescription eyeglasses, polarized sunglasses,
              anti-glare computer wear, and certified contact lenses.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/917014196382?text=Hello%20ChashmaBajaar%2C%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-800 hover:bg-accent text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:+917014196382"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-700 hover:border-neutral-500 text-neutral-300 text-xs font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store</span>
              </a>
            </div>
          </div>

          {/* Column: Collections */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-5">
              Collections
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="#featured" className="hover:text-white transition-colors">
                  Prescription Eyeglasses
                </a>
              </li>
              <li>
                <a href="#featured" className="hover:text-white transition-colors">
                  Polarized Sunglasses
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Blue-Cut Computer Optics
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Certified Contact Lenses
                </a>
              </li>
              <li>
                <a href="#eye-test" className="hover:text-white transition-colors">
                  Free Eye Testing Offer
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Store Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-5">
              Visit Retail Store
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-1" />
                <span>Near Shanti Nursing Home, Opposite Nagar Palika, Byavar Road, Bijaynagar</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-1" />
                <div>
                  <span className="text-white font-medium block">Mon – Sun: 10:00 AM – 9:00 PM</span>
                  <span className="text-xs text-emerald-400">Open 7 Days a Week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column: Direct Lines */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-5">
              Contact Numbers
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-0.5">
                  Primary / WhatsApp
                </span>
                <a href="tel:+917014196382" className="text-white hover:text-accent font-semibold block text-sm">
                  +91 7014196382
                </a>
              </li>
              <li>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-0.5">
                  Support Line 2
                </span>
                <a href="tel:+919413539551" className="text-neutral-300 hover:text-white block">
                  +91 9413539551
                </a>
              </li>
              <li>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 block mb-0.5">
                  Support Line 3
                </span>
                <a href="tel:+919057214990" className="text-neutral-300 hover:text-white block">
                  +91 9057214990
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} ChashmaBajaar Bijaynagar. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
