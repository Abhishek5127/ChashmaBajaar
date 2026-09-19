"use client";

export default function TrustMarquee() {
  const items = [
    "Free Computerized Eye Testing",
    "Certified Lenses",
    "WhatsApp Ordering",
    "Walk-Ins Welcome",
    "Exclusive In-Store Discounts",
    "Zero-Power Computer Optics",
    "100% UV Polarized Sunwear",
    "Precision Lens Customization",
  ];

  return (
    <section className="relative w-full bg-chalk-100 border-b border-neutral-200/80 py-4 overflow-hidden marquee-container select-none">
      <div className="marquee-track flex items-center whitespace-nowrap">
        {/* Render sequence twice for continuous infinite loop */}
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-700 px-6 sm:px-8 hover:text-accent transition-colors duration-200">
              {text}
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent/60" />
          </div>
        ))}
      </div>
    </section>
  );
}
