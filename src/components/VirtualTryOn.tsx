"use client";

import { useState } from "react";
import Image from "next/image";
import { ScanFace, Sliders, CheckCircle2, MessageCircle } from "lucide-react";

interface TryOnFrame {
  id: string;
  name: string;
  price: string;
  shape: string;
  image: string;
  message: string;
}

const tryOnFrames: TryOnFrame[] = [
  {
    id: "gold-aviator",
    name: "Vintage Metallic Gold Aviator",
    price: "₹1,899",
    shape: "Double Bridge Aviator",
    image: "/images/prod_gold_aviator.jpg",
    message: "I would like to try the Vintage Metallic Gold Aviator (₹1,899) at your Bijaynagar store.",
  },
  {
    id: "matte-black",
    name: "Matte Black Executive Frame",
    price: "₹1,299",
    shape: "Architectural Rectangular",
    image: "/images/prod_matte_black.jpg",
    message: "I would like to try the Matte Black Executive Frame (₹1,299) at your Bijaynagar store.",
  },
  {
    id: "crystal-acetate",
    name: "Crystal Transparent Acetate",
    price: "₹1,499",
    shape: "Round Clear Bio-Acetate",
    image: "/images/prod_crystal_acetate.jpg",
    message: "I would like to try the Crystal Transparent Acetate (₹1,499) at your Bijaynagar store.",
  },
  {
    id: "smart-shield",
    name: "Smart Shield Blue-Cut Glass",
    price: "₹999",
    shape: "Zero-Power Blue Light Shield",
    image: "/images/prod_smart_shield.jpg",
    message: "I would like to try the Smart Shield Blue-Cut Glass (₹999) at your Bijaynagar store.",
  },
];

export default function VirtualTryOn() {
  const [selectedFrame, setSelectedFrame] = useState<TryOnFrame>(tryOnFrames[0]);

  return (
    <section id="try-on" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1240px] mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent block mb-2">
          Optical Technology
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-neutral-900 tracking-tight mb-3">
          Virtual Fitting & Eye Diagnostics
        </h2>
        <p className="text-neutral-500 text-sm sm:text-base font-normal max-w-xl mx-auto mb-12">
          See how each frame looks, check custom prescription compatibility, and book your
          complimentary computerized eye testing at our Bijaynagar store.
        </p>

        {/* Central Showcase Card matching Moptica reference */}
        <div className="max-w-3xl mx-auto bg-neutral-50 rounded-3xl p-6 sm:p-10 border border-neutral-200/90 shadow-card">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-900 mb-6 flex items-center justify-center">
            {/* Model portrait */}
            <Image
              src="/images/grid_lifestyle.jpg"
              alt="Virtual Try On Model Preview"
              fill
              className="object-cover object-top opacity-90"
              sizes="(max-width: 1024px) 100vw, 768px"
            />

            {/* Virtual Scan HUD Box Overlay */}
            <div className="absolute inset-x-12 sm:inset-x-24 inset-y-8 sm:inset-y-12 border-2 border-white/60 rounded-3xl pointer-events-none flex flex-col justify-between p-4">
              <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-white/90 font-mono bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs w-max">
                <span>Face Detected • 99.4% Calibration</span>
              </div>
              <div className="text-right text-[10px] uppercase tracking-widest text-white/90 font-mono bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs w-max ml-auto">
                <span>{selectedFrame.shape}</span>
              </div>
            </div>

            {/* Frame Badge Overlay in Center */}
            <div className="absolute bottom-4 inset-x-4 flex items-center justify-between bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-lg border border-neutral-200">
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold block">
                  Active Selected Frame
                </span>
                <span className="font-bold text-sm sm:text-base text-neutral-900 block">
                  {selectedFrame.name}
                </span>
              </div>
              <div className="text-right">
                <span className="text-base sm:text-lg font-bold text-accent block">
                  {selectedFrame.price}
                </span>
                <a
                  href={`https://wa.me/917014196382?text=${encodeURIComponent(selectedFrame.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-neutral-700 hover:text-accent underline"
                >
                  Reserve on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Selectable Frame Pills matching reference */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {tryOnFrames.map((frame) => (
              <button
                key={frame.id}
                onClick={() => setSelectedFrame(frame)}
                className={`p-3 rounded-2xl border transition-all flex flex-col items-center justify-center bg-white ${
                  selectedFrame.id === frame.id
                    ? "border-neutral-900 shadow-md ring-2 ring-neutral-900/10"
                    : "border-neutral-200 hover:border-neutral-300"
                }`}
              >
                <div className="relative w-full h-12 mb-1.5 flex items-center justify-center">
                  <Image
                    src={frame.image}
                    alt={frame.name}
                    fill
                    className="object-contain"
                    sizes="120px"
                  />
                </div>
                <span className="text-[11px] font-bold text-neutral-800 line-clamp-1">
                  {frame.name}
                </span>
                <span className="text-[11px] font-semibold text-accent mt-0.5">
                  {frame.price}
                </span>
              </button>
            ))}
          </div>

          {/* 3 Callouts matching Moptica */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-neutral-200 text-left text-xs mb-8">
            <div className="flex items-start gap-3">
              <ScanFace className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-neutral-900 block">Precision Diagnostics</span>
                <span className="text-neutral-500">Accurate computerized refraction</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sliders className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-neutral-900 block">Find Your Perfect Fit</span>
                <span className="text-neutral-500">Bespoke temple & bridge adjustment</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-neutral-900 block">True-to-Life In Store</span>
                <span className="text-neutral-500">Free trials on Byavar Road</span>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/917014196382?text=Hello%20ChashmaBajaar%2C%20I%20would%20like%20to%20book%20a%20Free%20Computerized%20Eye%20Test%20and%20frame%20trial."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-accent text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Book Free Eye Test Slot</span>
          </a>
        </div>
      </div>
    </section>
  );
}
