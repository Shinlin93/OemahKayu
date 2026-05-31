import { IconWhatsApp } from "./Icons";
import { WA_URL } from "../constants";
import { scrollToSection } from "../hooks";
import heroImage from "../assets/HERO-OMAH.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay tipis agar teks tetap terbaca */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-32">
        <p className="text-[#B8962E] text-xs tracking-[0.4em] uppercase font-light mb-8">
          Rumah Kayu Jawa di Kaki Gunung · Pandaan, Pasuruan
        </p>

        <h1
          className="font-serif-display text-[#F5EFE6] leading-[1.15] mb-8"
          style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)", fontWeight: 400 }}
        >
          Berkumpul Kembali
          <br />
          di Tengah Hangatnya
          <br />
          <em className="text-[#B8962E]">Rumah Kayu</em> dan Sejuknya
          <br />
          Gunung Penanggungan
        </h1>

        <p
          className="text-[#F5EFE6]/80 font-light text-base sm:text-lg max-w-xl mx-auto mb-12"
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
            <IconWhatsApp />
            Cek Ketersediaan Tanggal
          </a>

          <button
            onClick={() => scrollToSection("galeri")}
            className="inline-flex items-center justify-center gap-2 border border-[#F5EFE6]/40 text-[#F5EFE6] hover:border-[#B8962E] hover:text-[#B8962E] px-8 py-4 text-sm tracking-[0.12em] uppercase font-light transition-all duration-300 backdrop-blur-sm"
          >
            Lihat Galeri ↓
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-[#B8962E] to-transparent animate-pulse" />
      </div>
    </section>
  );
}