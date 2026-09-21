"use client";

import { Phone, MessageCircle } from "lucide-react";

interface ContactChannel {
  name: string;
  role: string;
  number: string;
  displayNumber: string;
  isPrimary?: boolean;
  whatsappMessage?: string;
}

const channels: ContactChannel[] = [
  {
    name: "Primary & WhatsApp Line",
    role: "Order Placement, In-Store Trials & Consultations",
    number: "+917014196382",
    displayNumber: "+91 7014196382",
    isPrimary: true,
    whatsappMessage: "Hello ChashmaBajaar, I have an inquiry regarding eyewear products.",
  },
  {
    name: "Support Line 2",
    role: "Prescription Check & Frame Guidance",
    number: "+919413539551",
    displayNumber: "+91 9413539551",
    isPrimary: false,
    whatsappMessage: "Hello ChashmaBajaar Support, I would like guidance on lens power.",
  },
  {
    name: "Support Line 3",
    role: "Order Readiness, Adjustments & Lens Fittings",
    number: "+919057214990",
    displayNumber: "+91 9057214990",
    isPrimary: false,
    whatsappMessage: "Hello ChashmaBajaar Support, I am inquiring about my frame order.",
  },
];

export default function ContactConcierge() {
  return (
    <section id="contact" className="py-16 sm:py-28 px-4 sm:px-10 lg:px-14 bg-neutral-50/70 border-t border-neutral-200">
      <div className="w-full max-w-[1500px] mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-accent block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-neutral-900 tracking-tight mb-4">
            Connect With Our Specialists
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            Need help selecting frames or checking prescription compatibility? Reach out directly via
            phone or WhatsApp.
          </p>
        </div>

        {/* Light 3-column layout with generous card sizing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {channels.map((ch, idx) => (
            <div
              key={ch.number}
              className={`bg-white rounded-3xl p-8 sm:p-9 border transition-all duration-300 flex flex-col justify-between ${
                ch.isPrimary
                  ? "border-accent/60 shadow-card relative ring-2 ring-accent/10"
                  : "border-neutral-200/90 hover:border-neutral-400 hover:shadow-subtle"
              }`}
            >
              {ch.isPrimary && (
                <div className="absolute -top-3.5 left-8 px-4 py-1 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-wider shadow-xs">
                  Primary Line
                </div>
              )}

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                  Line 0{idx + 1}
                </span>
                <h3 className="font-sans font-bold text-xl text-neutral-900 mb-1.5">
                  {ch.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed mb-8">
                  {ch.role}
                </p>

                {/* Divider */}
                <div className="h-[1px] bg-neutral-100 mb-8" />

                {/* Big Display Number */}
                <a
                  href={`tel:${ch.number}`}
                  className="font-sans font-extrabold text-2xl sm:text-3xl text-neutral-900 hover:text-accent transition-colors block mb-8 tracking-tight"
                >
                  {ch.displayNumber}
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-neutral-100">
                <a
                  href={`tel:${ch.number}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-neutral-300 hover:border-neutral-900 text-neutral-900 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  <span>Call</span>
                </a>

                {ch.whatsappMessage && (
                  <a
                    href={`https://wa.me/${ch.number.replace("+", "")}?text=${encodeURIComponent(
                      ch.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-neutral-900 hover:bg-accent text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
