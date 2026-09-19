"use client";

import { MapPin, Navigation, Clock, ExternalLink } from "lucide-react";

export default function VisitStore() {
  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Near+Shanti+Nursing+Home+Opposite+Nagar+Palika+Byavar+Road+Bijaynagar";

  return (
    <section id="boutique" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-14 bg-white border-t border-neutral-200">
      <div className="w-full max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Clean text address & timings */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-accent block mb-2">
                Visit Our Retail Store
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-neutral-900 tracking-tight mb-6">
                ChashmaBajaar
              </h2>

              <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed mb-8">
                Located conveniently on Byavar Road right opposite the Nagar Palika in Bijaynagar.
                Drop by to try hundreds of frames, test your eyes for free, or collect customized lenses.
              </p>

              {/* Address Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-neutral-50 border border-neutral-200/90 mb-6 shadow-2xs">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900 mb-2.5">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Physical Store Location</span>
                </div>
                <p className="text-base font-bold text-neutral-900 leading-snug">
                  Near Shanti Nursing Home, Opposite Nagar Palika,
                </p>
                <p className="text-base text-neutral-600 leading-snug mt-1">
                  Byavar Road, Bijaynagar, Rajasthan
                </p>
              </div>

              {/* Timings Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-neutral-50 border border-neutral-200/90 mb-8 shadow-2xs">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900 mb-3.5">
                  <Clock className="w-5 h-5 text-accent" />
                  <span>Store Working Hours</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neutral-200 text-sm sm:text-base">
                  <span className="text-neutral-600 font-medium">Monday to Sunday</span>
                  <span className="font-extrabold text-neutral-900">10:00 AM – 9:00 PM</span>
                </div>
                <div className="flex items-center justify-between pt-2.5 text-xs sm:text-sm text-neutral-500">
                  <span>Open 7 Days a Week</span>
                  <span className="text-emerald-700 font-bold uppercase text-[11px] tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    ● Currently Open
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-neutral-900 hover:bg-accent text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ExternalLink className="w-4 h-4 ml-0.5 opacity-80" />
              </a>

              <a
                href="https://wa.me/917014196382?text=Hello%20ChashmaBajaar%2C%20I%20need%20directions%20to%20your%20Bijaynagar%20store."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-neutral-300 hover:border-neutral-900 text-neutral-900 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200"
              >
                <span>WhatsApp Store Team</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Light Map Graphic */}
          <div className="lg:col-span-7 rounded-3xl bg-neutral-50 border border-neutral-200/90 relative overflow-hidden min-h-[420px] sm:min-h-[500px] flex items-center justify-center p-6 shadow-2xs">
            {/* Street Map Vector Illustration */}
            <svg
              className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
              viewBox="0 0 700 450"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern id="light-grid-lg" width="35" height="35" patternUnits="userSpaceOnUse">
                  <path d="M 35 0 L 0 0 0 35" fill="none" stroke="#E5E5DE" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#light-grid-lg)" />

              {/* Byavar Road Highway */}
              <line x1="40" y1="225" x2="660" y2="225" stroke="#FFFFFF" strokeWidth="20" strokeLinecap="round" />
              <line x1="40" y1="225" x2="660" y2="225" stroke="#D8C7B5" strokeWidth="14" strokeLinecap="round" />
              <line x1="40" y1="225" x2="660" y2="225" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="8 8" />

              {/* Cross Street */}
              <line x1="360" y1="30" x2="360" y2="420" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" />
              <line x1="360" y1="30" x2="360" y2="420" stroke="#E2E2DC" strokeWidth="10" strokeLinecap="round" />

              <line x1="170" y1="80" x2="170" y2="370" stroke="#EBEBE5" strokeWidth="6" />
              <line x1="530" y1="80" x2="530" y2="370" stroke="#EBEBE5" strokeWidth="6" />

              {/* Landmarks */}
              <rect x="220" y="80" width="115" height="75" rx="8" fill="#F0F0EA" stroke="#D5D5CE" strokeWidth="1" />
              <rect x="400" y="270" width="130" height="80" rx="8" fill="#F0F0EA" stroke="#D5D5CE" strokeWidth="1" />
            </svg>

            {/* Street Labels */}
            <div className="absolute top-[195px] left-10 text-xs font-bold uppercase tracking-widest text-neutral-600 bg-white/95 px-3 py-1 rounded-md shadow-xs border border-neutral-200">
              Byavar Road
            </div>
            <div className="absolute top-20 left-[230px] text-[11px] font-bold uppercase tracking-wider text-neutral-700 bg-white/95 px-2.5 py-1 rounded-md shadow-xs border border-neutral-200">
              Opp. Nagar Palika
            </div>
            <div className="absolute bottom-20 right-[180px] text-[11px] font-bold uppercase tracking-wider text-neutral-700 bg-white/95 px-2.5 py-1 rounded-md shadow-xs border border-neutral-200">
              Shanti Nursing Home
            </div>

            {/* Interactive Pin Marker */}
            <div className="relative z-10 text-center max-w-sm">
              <div className="relative inline-flex items-center justify-center mb-4">
                <div className="absolute w-24 h-24 rounded-full bg-accent/20 animate-ping" />
                <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-lg">
                  <MapPin className="w-7 h-7 fill-white" />
                </div>
              </div>

              <div className="bg-white border border-neutral-200/90 p-6 rounded-3xl shadow-card">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent block mb-1">
                  Retail Eyewear Store
                </span>
                <h4 className="font-sans font-extrabold text-lg sm:text-xl text-neutral-900 mb-1.5">
                  ChashmaBajaar
                </h4>
                <p className="text-xs sm:text-sm text-neutral-500 mb-4">
                  Opposite Nagar Palika, Byavar Road, Bijaynagar
                </p>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-accent text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
