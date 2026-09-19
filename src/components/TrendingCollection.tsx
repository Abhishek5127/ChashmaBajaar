"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  shape: string;
  badge?: string;
  badgeColor?: string;
  image: string;
  colors: string[];
  messageText: string;
}

const products: Product[] = [
  {
    id: "matte-black-executive",
    name: "Matte Black Executive Frame",
    price: "₹1,299",
    shape: "Executive Rectangular",
    badge: "Bestseller",
    badgeColor: "bg-neutral-900 text-white",
    image: "/images/prod_matte_black.jpg",
    colors: ["#141414", "#3D3D3D"],
    messageText: "I am interested in Matte Black Executive Frame (₹1,299) at ChashmaBajaar.",
  },
  {
    id: "vintage-gold-aviator",
    name: "Vintage Metallic Gold Aviator",
    price: "₹1,899",
    shape: "Double Brow Aviator",
    badge: "Popular",
    badgeColor: "bg-accent text-white",
    image: "/images/prod_gold_aviator.jpg",
    colors: ["#D4AF37", "#C9A567", "#141414"],
    messageText: "I am interested in Vintage Metallic Gold Aviator (₹1,899) at ChashmaBajaar.",
  },
  {
    id: "crystal-transparent-acetate",
    name: "Crystal Transparent Acetate",
    price: "₹1,499",
    shape: "Modern Round Acetate",
    badge: "New Arrival",
    badgeColor: "bg-neutral-100 text-ink-800 border border-neutral-300",
    image: "/images/prod_crystal_acetate.jpg",
    colors: ["#E8ECEF", "#D5D8DC"],
    messageText: "I am interested in Crystal Transparent Acetate (₹1,499) at ChashmaBajaar.",
  },
  {
    id: "smart-shield-blue-cut",
    name: "Smart Shield Blue-Cut Glass",
    price: "₹999",
    shape: "Ergonomic Screen Shield",
    badge: "Blue-Cut 420nm",
    badgeColor: "bg-blue-600 text-white",
    image: "/images/prod_smart_shield.jpg",
    colors: ["#1A202C", "#2D3748"],
    messageText: "I am interested in Smart Shield Blue-Cut Glass (₹999) at ChashmaBajaar.",
  },
];

export default function TrendingCollection() {
  return (
    <section id="trending" className="py-20 sm:py-28 px-6 sm:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent block mb-2">
              Customer Favorites
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-ink-900 tracking-tight">
              Trending Collection
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Direct WhatsApp Checkout
            </span>
            <span className="text-neutral-300">•</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              In-Store Trials
            </span>
          </div>
        </div>

        {/* E-commerce Grid with woven Lifestyle Tile (matching Moptica reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Lifestyle Photo Tile inside the grid (breaks up product grid) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl overflow-hidden min-h-[420px] md:min-h-[500px] flex flex-col justify-end p-8 bg-neutral-900 group"
          >
            <Image
              src="/images/grid_lifestyle.jpg"
              alt="Everyday Optical Frames Lifestyle"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Tile Text Overlay */}
            <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/80 block mb-2">
                Handcrafted Optics
              </span>
              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white mb-3 leading-tight">
                Designed for Everyday Clarity
              </h3>
              <p className="text-white/80 text-xs sm:text-sm font-normal leading-relaxed mb-6">
                Lightweight comfort and precision lenses tailored at our Bijaynagar store.
              </p>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-ink-950 hover:bg-accent hover:text-white text-xs font-bold uppercase tracking-wider transition-colors duration-200"
              >
                <span>View All Collections</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Product Cards (First 2 products) */}
          {products.slice(0, 2).map((prod, idx) => (
            <ProductCard key={prod.id} product={prod} index={idx} />
          ))}

          {/* Product Cards (Remaining 2 products) */}
          {products.slice(2, 4).map((prod, idx) => (
            <ProductCard key={prod.id} product={prod} index={idx + 2} />
          ))}

          {/* In-Store Privilege Banner Tile (Balances the 6-slot grid on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-dashed border-neutral-300 bg-chalk-100 p-8 flex flex-col justify-between"
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-4">
                Walk-In Benefit
              </span>
              <h3 className="font-sans font-bold text-2xl text-ink-900 mb-3">
                Free Computerized Eye Testing
              </h3>
              <p className="text-sm text-ink-500 font-normal leading-relaxed mb-6">
                Accurate spherical & cylindrical lens calibration with zero walk-in consultation fees.
                Try any of our frames in person on Byavar Road.
              </p>
            </div>

            <a
              href="https://wa.me/917014196382?text=Hello%20ChashmaBajaar%2C%20I%20would%20like%20to%20reserve%20a%20Free%20Computerized%20Eye%20Test%20slot."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-ink-900 hover:bg-accent text-white text-xs font-bold uppercase tracking-wider transition-all duration-200"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Book Eye Test on WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group bg-white rounded-2xl border border-neutral-200/90 hover:border-neutral-400 hover:shadow-card transition-all duration-300 p-6 flex flex-col justify-between relative"
    >
      <div>
        {/* Product Image Stage (Crisp White Canvas) */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white mb-6 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-2 left-2 z-10">
              <span
                className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm ${product.badgeColor}`}
              >
                {product.badge}
              </span>
            </div>
          )}

          {/* Quick WhatsApp Action button appearing on hover */}
          <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
            <a
              href={`https://wa.me/917014196382?text=${encodeURIComponent(product.messageText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-ink-900 hover:bg-accent text-white text-xs font-bold uppercase tracking-wider transition-colors duration-150 shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Shape / Subtitle */}
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-400 block mb-1">
          {product.shape}
        </span>

        {/* Product Name */}
        <h3 className="font-sans font-bold text-lg text-ink-900 group-hover:text-accent transition-colors duration-200 mb-2">
          {product.name}
        </h3>

        {/* Price in Accent Color */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="font-sans font-bold text-2xl text-accent">
            {product.price}
          </span>
          <span className="text-[11px] text-ink-400 uppercase tracking-wider">
            All-Inclusive
          </span>
        </div>
      </div>

      {/* Swatches and Direct Link */}
      <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {product.colors.map((c, i) => (
            <span
              key={i}
              className="inline-block w-3.5 h-3.5 rounded-full border border-neutral-300"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>

        <a
          href={`https://wa.me/917014196382?text=${encodeURIComponent(product.messageText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-ink-800 hover:text-accent flex items-center gap-1 uppercase tracking-wider transition-colors duration-150"
        >
          <span>Order</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
}
