import { useState, useEffect } from "react";
import heroGunung from "../assets/hero-gunung.png";
import heroOmah from "../assets/HERO-OMAH.png";
import logo from "../logo.png";
import { IconWhatsApp, IconCalendar } from "./Icons";
import { WA_URL } from "../constants";

// ─── DAFTAR FOTO HERO ────────────────────────────────────────────────────────
// Tambah foto baru: 1) import foto-nya di atas, 2) masukkan ke array ini.
const heroImages = [heroGunung, heroOmah];

// Durasi tiap slide sebelum otomatis geser ke slide berikutnya (dalam ms)
const SLIDE_DURATION = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">

      {/* ── Background images — crossfade ── */}
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

      {/* Overlay tipis — cukup untuk jaga kontras dot & elemen luar box,
          tidak menggelapkan foto sebanyak sebelumnya karena glass box
          sudah punya kontrasnya sendiri */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/25" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center pt-24 pb-20">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

          {/* ── Glass Box ── */}
          <div
            className="max-w-lg rounded-2xl p-8 md:p-10"
            style={{
              background: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.20)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
            }}
          >
            {/* Mini logo lockup */}
            <div className="flex items-center gap-3 mb-8">
              <img
                src={logo}
                alt="Oemah Kayu Penanggungan"
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* Heading */}
            <h1
              className="font-serif-display text-white mb-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Tempat Beristirahat,
              <br />
              Dekat dengan Alam
            </h1>

            {/* Description */}
            <p
              className="text-white/85 font-light mb-8"
              style={{ lineHeight: 1.8, fontSize: "0.95rem" }}
            >
              Nikmati suasana tenang, udara sejuk, dan pemandangan
              menakjubkan di Oemah Kayu Penanggungan.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-[#C9A87C] text-[#2C1A0E] px-5 py-3 rounded-lg text-sm font-medium hover:bg-[#D4B98C] hover:-translate-y-0.5 transition-all duration-300"
              >
                <IconCalendar />
                Cek Ketersediaan
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-white transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <IconWhatsApp />
                Hubungi Kami
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Dot indicator ── */}
      {heroImages.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Lihat foto ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer border-none ${
                current === i ? "w-8 bg-[#D4AE3A]" : "w-4 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}

    </section>
  );
}
