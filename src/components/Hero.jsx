import { IconWhatsApp } from "./Icons";
import { WA_URL } from "../constants";
import { scrollToSection } from "../hooks";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1A0F07 0%, #2C1A0E 30%, #1A2E1C 60%, #0D1A10 100%)",
      }}
    >
      {/* Atmospheric glow layers */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 60%, #3A5A3C 0%, transparent 50%), radial-gradient(ellipse at 70% 40%, #6B5846 0%, transparent 50%)",
        }}
      />

      {/* Mountain silhouette SVG */}
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        style={{ height: "200px" }}
      >
        <defs>
          <linearGradient id="mtn" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1A3020" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0D1A10" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="mtn2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3A5A3C" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#1A3020" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <polygon points="0,200 200,60 400,200"    fill="url(#mtn)" />
        <polygon points="250,200 550,20 850,200"  fill="url(#mtn2)" />
        <polygon points="700,200 1050,40 1440,200" fill="url(#mtn)" />
        <polygon
          points="0,200 300,120 600,200 900,80 1200,200 1440,100 1440,200"
          fill="#0D1A10"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-32">
        <p className="text-[#B8962E] text-xs tracking-[0.4em] uppercase font-light mb-8">
          Rumah Kayu Jawa di Kaki Gunung · Pandaan, Pasuruan
        </p>

        <h1
          className="font-serif-display text-[#F5EFE6] leading-[1.15] mb-8"
          style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)", fontWeight: 400 }}
        >
          Berkumpul Kembali<br />
          di Tengah Hangatnya<br />
          <em className="text-[#B8962E]">Rumah Kayu</em> dan Sejuknya<br />
          Gunung Penanggungan
        </h1>

        <p
          className="text-[#F5EFE6]/70 font-light text-base sm:text-lg max-w-xl mx-auto mb-12"
          style={{ lineHeight: 1.75 }}
        >
          Tempat privat untuk keluarga besar, reuni, gathering,
          <br className="hidden sm:block" />
          dan retreat yang tak terlupakan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener"
            className="hover-lift inline-flex items-center justify-center gap-2.5 bg-[#B8962E] text-[#2C1A0E] px-8 py-4 text-sm tracking-[0.12em] uppercase font-medium transition-all duration-300 hover:bg-[#D4AE3A]"
          >
            <IconWhatsApp /> Cek Ketersediaan Tanggal
          </a>
          <button
            onClick={() => scrollToSection("galeri")}
            className="inline-flex items-center justify-center gap-2 border border-[#F5EFE6]/30 text-[#F5EFE6] hover:border-[#B8962E] hover:text-[#B8962E] px-8 py-4 text-sm tracking-[0.12em] uppercase font-light transition-all duration-300"
          >
            Lihat Galeri ↓
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-[#B8962E] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
