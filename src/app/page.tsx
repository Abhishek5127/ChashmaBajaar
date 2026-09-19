import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandTrustStrip from "@/components/BrandTrustStrip";
import FeaturedEyewear from "@/components/FeaturedEyewear";
import DualBanner from "@/components/DualBanner";
import DesignedForEveryLook from "@/components/DesignedForEveryLook";
import MidPageBanner from "@/components/MidPageBanner";
import NewSeasonEyewear from "@/components/NewSeasonEyewear";
import ValueProps from "@/components/ValueProps";
import EyeTestPromo from "@/components/EyeTestPromo";
import VisitStore from "@/components/VisitStore";
import ContactConcierge from "@/components/ContactConcierge";
import LookbookCommunity from "@/components/LookbookCommunity";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white text-neutral-900 selection:bg-accent/15 selection:text-accent">
        {/* Clean Sticky Navbar with Official Logo (Black top strip removed) */}
        <Navbar />

        {/* Hero Section (hero_lifestyle preserved) */}
        <Hero />

        {/* Brand Trust Strip */}
        <BrandTrustStrip />

        {/* Featured Eyewear (4 Real SKUs with Prices, Swatches & Badges) */}
        <FeaturedEyewear />

        {/* Dual Editorial Lifestyle Banners (Indian Woman & Man in Eyewear) */}
        <DualBanner />

        {/* Designed for Every Look (4 Collections Grid) */}
        <DesignedForEveryLook />

        {/* Mid-Page Full-Width Lifestyle Banner (Indian Model) */}
        <MidPageBanner />

        {/* New Season Eyewear (Split Lifestyle Tile + 2x2 Grid) */}
        <NewSeasonEyewear />

        {/* 4-Pillar Value Proposition Bar */}
        <ValueProps />

        {/* Complimentary Eye Testing & Walk-In Privileges Banner */}
        <EyeTestPromo />

        {/* Visit Retail Store & Light Street Map */}
        <VisitStore />

        {/* Connect With Our Specialists (3 Direct Phone Lines) */}
        <ContactConcierge />

        {/* Community Lookbook Gallery (6 Diverse Photos Row) */}
        <LookbookCommunity />

        {/* Luxury Footer with Logo & Complete Store Data */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
