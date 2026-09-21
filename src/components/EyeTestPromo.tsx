"use client";

import { Sparkles, CheckCircle, ArrowUpRight, Clock, MapPin } from "lucide-react";

export default function EyeTestPromo() {
  return (
    <section id="eye-test" className="py-16 sm:py-28 px-4 sm:px-10 lg:px-14 bg-neutral-50/80">
      <div className="w-full max-w-[1500px] mx-auto">
        <div className="bg-white rounded-3xl border border-neutral-200/90 shadow-card p-6 sm:p-14 lg:p-18 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-5 sm:mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Complimentary In-Store Service</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-sans font-extrabold text-neutral-900 tracking-tight leading-tight mb-4 sm:mb-6">
                Free Computerized Eye Testing & Walk-In Privileges
              </h2>

              <p className="text-sm sm:text-lg text-neutral-600 font-normal leading-relaxed mb-6 sm:mb-8 max-w-2xl">
                Get an accurate prescription check with our modern computerized optical diagnostics.
                Plus, enjoy exclusive walk-in discounts across all designer frames, sunglasses, and
                screen-shield lenses at our Bijaynagar store.
              </p>

              {/* 3 Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 mb-8 sm:mb-10">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-bold text-neutral-900">
                    Spherical & Cylindrical Check
                  </span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-bold text-neutral-900">
                    Zero Consultation Fee
                  </span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-bold text-neutral-900">
                    Instant Frame Trials
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="https://wa.me/917014196382?text=Hello%20ChashmaBajaar%2C%20I%20would%20like%20to%20reserve%20a%20Free%20Computerized%20Eye%20Test%20slot."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 shadow-md"
                >
                  <span>Book Free Test on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <div className="w-full sm:w-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-neutral-700 py-3 px-4 sm:px-5 rounded-full bg-neutral-100 border border-neutral-200">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>Mon–Sun · 10:00 AM – 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Right Column: Walk-in Card */}
            <div className="lg:col-span-5">
              <div className="bg-neutral-50 rounded-3xl border border-neutral-200/90 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-400 block mb-2">
                    Walk-In Destination
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
                    Opposite Nagar Palika
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
                    Near Shanti Nursing Home, Byavar Road, Bijaynagar, Rajasthan.
                  </p>

                  <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-2xs mb-8">
                    <span className="text-xs uppercase tracking-wider text-accent font-bold block mb-1.5">
                      Exclusive In-Store Privilege
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-neutral-900 leading-relaxed">
                      Special walk-in discounts applied directly at billing on any frame purchase. Free fitting and lens microfiber kit included.
                    </p>
                  </div>
                </div>

                <a
                  href="#boutique"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 rounded-full bg-neutral-900 hover:bg-accent text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 shadow-sm"
                >
                  <MapPin className="w-4 h-4" />
                  <span>View Location & Hours</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
