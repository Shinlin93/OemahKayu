import { useState, useEffect } from "react";
import heroGunung from "../assets/hero-gunung.png";
import heroOmah from "../assets/HERO-OMAH.png";
import { IconWhatsApp } from "./Icons";
import { WA_URL } from "../constants";
import { scrollToSection } from "../hooks";

// ─── DAFTAR FOTO HERO ────────────────────────────────────────────────────────
// Tambah foto baru: 1) import foto-nya di atas, 2) masukkan ke array ini.
// Urutan array = urutan slide. Semua foto sebaiknya rasio & resolusi mirip
// (idealnya landscape 16:9, minimal ±1600px lebar) supaya transisinya mulus.
const heroImages = [heroGunung, heroOmah];

// Durasi tiap slide sebelum otomatis geser ke slide berikutnya (dalam ms)
const SLIDE_DURATION = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return; // tidak perlu timer kalau cuma 1 foto
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">

      {/* ── Background images — ditumpuk, crossfade pakai opacity ── */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: current === i ? 1 : 0,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1A0F07]/55" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center pb-28">
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 pt-32">
          <div className="max-w-3xl">

            {/* Location */}
            <p className="text-[#D4AE3A] text-xs tracking-[0.45em] uppercase mb-6 font-light">
              Oemah Kayu Penanggungan · Prigen · Pasuruan
            </p>

            {/* Gold Divider */}
            <div className="w-28 h-[1px] bg-[#D4AE3A] mb-8" />

            {/* Heading */}
            <h1
              className="font-serif-display text-white mb-8"
              style={{
                fontSize: "clamp(3.2rem, 6vw, 6.2rem)",
                lineHeight: 1.02,
                fontWeight: 400,
              }}
            >
              <span className="block">Dekat dengan Alam,</span>
              <span className="block">Nikmati setiap Momen</span>
              <span
                className="block text-[#D4AE3A]"
                style={{ fontStyle: "italic", fontWeight: 300 }}
              >
                yang Tak Tergantikan
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-white/85 max-w-2xl mb-12 font-light"
              style={{ lineHeight: 1.9, fontSize: "1.1rem" }}
            >
              Rumah kayu Jawa dengan kolam renang pribadi,
              jalur jogging pagi yang menyegarkan, dan panorama Gunung
              Penanggungan yang memanjakan mata.
              <br /><br />
              Tempat sempurna untuk beristirahat, berkumpul, dan menikmati
              keindahan alam pegunungan yang menenangkan.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-3 bg-[#D4AE3A] text-[#2C1A0E] px-8 py-4 text-sm tracking-[0.1em] uppercase font-semibold hover:bg-[#E6BF4B] hover:-translate-y-0.5 transition-all duration-300"
              >
                <IconWhatsApp />
                Cek Ketersediaan
              </a>
              <button
                onClick={() => scrollToSection("fasilitas")}
                className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-8 py-4 text-sm tracking-[0.1em] uppercase font-light hover:border-[#D4AE3A] hover:text-[#D4AE3A] transition-all duration-300 bg-transparent cursor-pointer"
              >
                Lihat Fasilitas
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ── Dot indicator — muncul cuma kalau foto lebih dari 1 ── */}
      {heroImages.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Lihat foto ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer border-none ${
                current === i ? "w-8 bg-[#D4AE3A]" : "w-4 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      )}

    </section>
  );
}
