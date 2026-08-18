// ─── OemahKayu.jsx ───────────────────────────────────────────────────────────
// File utama: hanya merangkai semua komponen.
// Untuk edit bagian tertentu, buka file komponen yang sesuai di /components/
//
// Urutan section disusun mengikuti alur AIDA (Attention → Interest →
// Desire → Action) supaya perjalanan tamu dari "lihat pertama kali" sampai
// "closing via WhatsApp" terasa natural:
//
//   Hero          → tangkap perhatian
//   QuickFacts    → validasi cepat, hilangkan keraguan awal
//   VideoSection  → imersi visual & emosional
//   Story         → bangun koneksi ("lebih dari sekadar tempat menginap")
//   Activities    → tamu membayangkan diri mereka di sana
//   Facilities    → bukti rasional (apa saja yang didapat)
//   Gallery       → bukti visual tambahan, memperkuat keinginan
//   Testimonials  → social proof sebelum closing
//   Location      → hilangkan friksi praktis
//   FAQ           → hilangkan objection terakhir
//   FinalCTA      → closing
// ─────────────────────────────────────────────────────────────────────────────
import { useReveal } from "./hooks";

import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import QuickFacts     from "./components/QuickFacts";
import VideoSection  from "./components/VideoSection";
import Story         from "./components/Story";
import Activities    from "./components/Activities";
import Facilities    from "./components/Facilities";
import Gallery       from "./components/Gallery";
import Testimonials  from "./components/Testimonials";
import Location      from "./components/Location";
import FAQ           from "./components/FAQ";
import FinalCTA      from "./components/FinalCTA";
import Footer        from "./components/Footer";
import StickyWA      from "./components/StickyWA";

export default function OemahKayuLanding() {
  useReveal();

  return (
    <div
      className="overflow-x-hidden"
      style={{
        fontFamily: "'Jost', sans-serif",
        background: "#F5EFE6",
        color: "#2C1A0E",
      }}
    >
      <Navbar />

      <Hero />

      <QuickFacts />

      {/* VIDEO DRONE FULL WIDTH — imersi sebelum masuk ke cerita */}
      <VideoSection />

      <Story />

      <Activities />

      <Facilities />

      <Gallery />

      <Testimonials />

      <Location />

      <FAQ />

      <FinalCTA />

      <Footer />

      <StickyWA />
    </div>
  );
}
