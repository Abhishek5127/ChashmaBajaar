"use client";

export default function AnnouncementBar() {
  return (
    <div className="bg-neutral-900 text-white text-[11px] sm:text-xs py-2.5 px-4 tracking-wider uppercase font-medium">
      <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Bijaynagar Store Open Today · 10:00 AM – 9:00 PM</span>
        </div>

        <div className="flex items-center gap-4 text-neutral-300 text-[11px]">
          <span>Complimentary Computerized Eye Testing</span>
          <span className="hidden md:inline text-neutral-500">•</span>
          <a
            href="https://wa.me/917014196382?text=Hello%20ChashmaBajaar%2C%20I%20would%20like%20to%20inquire%20about%20walk-in%20eyewear%20fitting."
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent underline underline-offset-4 transition-colors"
          >
            WhatsApp Support: +91 7014196382
          </a>
        </div>
      </div>
    </div>
  );
}
