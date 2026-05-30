// ─── OemahKayu.jsx ───────────────────────────────────────────────────────────
// File utama: hanya merangkai semua komponen.
// Untuk edit bagian tertentu, buka file komponen yang sesuai di /components/
// ─────────────────────────────────────────────────────────────────────────────

import { useReveal } from "./hooks";

import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import QuickFacts    from "./components/QuickFacts";
import Gallery       from "./components/Gallery";
import Story         from "./components/Story";
import Activities    from "./components/Activities";
import Facilities    from "./components/Facilities";
import Testimonials  from "./components/Testimonials";
import Location      from "./components/Location";
import FAQ           from "./components/FAQ";
import FinalCTA      from "./components/FinalCTA";
import Footer        from "./components/Footer";
import StickyWA      from "./components/StickyWA";

export default function OemahKayuLanding() {
  // Aktifkan scroll-reveal untuk semua elemen [data-reveal]
  useReveal();

  return (
    <div
      className="overflow-x-hidden"
      style={{ fontFamily: "'Jost', sans-serif", background: "#F5EFE6", color: "#2C1A0E" }}
    >
      <Navbar />
      <Hero />
      <QuickFacts />
      <Gallery />
      <Story />
      <Activities />
      <Facilities />
      <Testimonials />
      <Location />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyWA />
    </div>
  );
}
