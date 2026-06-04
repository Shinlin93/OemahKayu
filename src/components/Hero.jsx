import heroImage from "../assets/HERO-OMAH.png";
import { IconWhatsApp } from "./Icons";
import { WA_URL } from "../constants";
import { scrollToSection } from "../hooks";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Image */}
      <img
        src={heroImage}
        alt="Oemah Kayu Penanggungan"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Luxury Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.25) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <p className="text-[#D4AE3A] text-xs tracking-[0.4em] uppercase mb-6 font-light">
          Oemah Kayu Penanggungan · Pandaan · Pasuruan
        </p>

        <h1
          className="font-serif-display text-white mb-8"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 5.8rem)",
            lineHeight: 1.15,
            fontWeight: 400,
          }}
        >
          Tempat Berkumpul
          <br />
          dengan Orang-Orang
          <br />
          <em className="text-[#D4AE3A]">yang Paling Berarti</em>
        </h1>

        <p
          className="text-white/85 max-w-2xl mx-auto mb-10 font-light"
          style={{
            lineHeight: 1.8,
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
          }}
        >
          Rumah kayu Jawa yang hangat, kolam renang pribadi,
          dan panorama Gunung Penanggungan untuk momen keluarga,
          gathering, dan retreat yang tak terlupakan.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-3 bg-[#D4AE3A] text-[#2C1A0E] px-8 py-4 uppercase tracking-wider text-sm font-medium hover:bg-[#E8C04A] transition-all duration-300"
          >
            <IconWhatsApp />
            Cek Ketersediaan
          </a>

          <button
            onClick={() => scrollToSection("galeri")}
            className="border border-white/40 text-white px-8 py-4 uppercase tracking-wider text-sm hover:bg-white/10 transition-all duration-300"
          >
            Lihat Galeri
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-[#D4AE3A] to-transparent animate-pulse" />
      </div>
    </section>
  );
}