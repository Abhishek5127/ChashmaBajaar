"use client";

import { motion } from "framer-motion";
import { Eye, MapPin, Sparkles, Clock, ArrowRight } from "lucide-react";

export default function StoreBanner() {
  return (
    <section id="experience" className="py-16 px-6 sm:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Horizontal wipe reveal card container */}
        <motion.div
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0 }}
          whileInView={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            opacity: 1,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden glass-lens-accent p-8 sm:p-12 lg:p-14 border border-brass/30 shadow-2xl"
        >
          {/* Subtle decorative background watermarks */}
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-brass/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-1/3 bottom-0 w-64 h-64 bg-smoked/15 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            {/* Left: Boutique Invitation */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brass/15 border border-brass/30 text-brass text-[11px] font-sans uppercase tracking-[0.2em] mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Complimentary In-Boutique Privilege</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-bone-50 leading-tight mb-6">
                Welcome to Our Bijaynagar Boutique
              </h2>

              <p className="text-bone-300 font-light text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                Experience meticulous vision care with our <strong>Free Computerized Eye Testing</strong>.
                Every walk-in guest enjoys bespoke frame styling and exclusive in-store privileges
                across designer collections.
              </p>

              {/* Timing & Location Pill Details */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-bone-300">
                <div className="flex items-center gap-2 bg-ink-950/60 px-4 py-2.5 rounded-full border border-white/10">
                  <Clock className="w-4 h-4 text-brass" />
                  <span>Mon – Sun · 10:00 AM – 9:00 PM</span>
                </div>
                <div className="flex items-center gap-2 bg-ink-950/60 px-4 py-2.5 rounded-full border border-white/10">
                  <MapPin className="w-4 h-4 text-brass" />
                  <span>Byavar Road, Bijaynagar</span>
                </div>
              </div>
            </div>

            {/* Right: Feature Highlight Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-ink-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl relative group">
                <div className="w-12 h-12 rounded-xl bg-brass/10 border border-brass/30 flex items-center justify-center text-brass mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-bone-50 mb-3">
                  Computerized Refraction & Diagnostics
                </h3>

                <p className="text-bone-400 text-sm font-light leading-relaxed mb-6">
                  State-of-the-art optical instruments calibrate exact cylindrical and spherical
                  focal points, ensuring 100% visual comfort for daily, screen, and driving wear.
                </p>

                <div className="divider-subtle-hairline mb-6" />

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-bone-400 block">
                      Consultation Cost
                    </span>
                    <span className="font-serif text-lg text-brass font-medium">
                      Complimentary (₹0)
                    </span>
                  </div>

                  <a
                    href="https://wa.me/917014196382?text=Hello%20ChashmaBajaar%2C%20I%20would%20like%20to%20book%20a%20Free%20Computerized%20Eye%20Test%20at%20your%20Bijaynagar%20store."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brass hover:text-brass-light transition-colors"
                  >
                    <span>Book Slot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
