import { useState, useEffect } from "react";
import heroDepan from "../assets/hero-depan.webp";
import heroGunung from "../assets/hero-gunung.webp";
import heroMalam from "../assets/tampak-depan-malam.webp";
import { WA_URL } from "../constants";

// ─── DAFTAR FOTO HERO ────────────────────────────────────────────────────────
const heroImages = [heroDepan, heroGunung, heroMalam];
const SLIDE_DURATION = 6000;

// ─── Jam & tanggal live ──────────────────────────────────────────────────────
const DAYS = ["MINGGU", "SENIN", "SELASA", "RABU", "KAMIS", "JUMAT", "SABTU"];
const MONTHS = [
  "JAN", "FEB", "MAR", "APR", "MEI", "JUN",
  "JUL", "AGU", "SEP", "OKT", "NOV", "DES",
];

function LiveClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  const dayName = DAYS[now.getDay()];
  const dateStr = `${now.getDate()}.${MONTHS[now.getMonth()]}.${String(now.getFullYear()).slice(2)}`;

  return (
    <div className="text-white/90">
      <p className="text-xs tracking-[0.15em] font-light" style={{ fontVariantNumeric: "tabular-nums" }}>
        {hh}:{mm}:{ss} PRIGEN, ID
      </p>
      <p className="text-xs tracking-[0.15em] font-light text-white/60 mt-0.5">
        {dayName}, {dateStr}
      </p>
    </div>
  );
}

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

      {/* Overlay tipis — cukup untuk kontras teks & navbar */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-black/35" />

      {/* ── Konten ── */}
      <div className="relative z-10 min-h-[100svh] flex flex-col justify-between px-4 sm:px-10 lg:px-14 pt-24 pb-[max(2rem,env(safe-area-inset-bottom))]">

        {/* Baris atas — kosong, navbar sudah fixed terpisah di atasnya */}
        <div />

        {/* Baris tengah — paragraf deskripsi, rata kanan seperti referensi */}
        <div className="flex justify-end">
          <div className="w-full max-w-sm sm:max-w-md text-right sm:text-left">
            <p
              className="text-white font-light"
              style={{ lineHeight: 1.85, fontSize: "0.95rem" }}
            >
              Rumah kayu Jawa yang kami bangun dengan hati, menghadirkan
              kolam renang pribadi, udara pegunungan yang sejuk, dan
              panorama Gunung Penanggungan — dirancang untuk momen
              berkualitas bersama orang-orang tercinta.
            </p>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2.5 mt-7 rounded-full bg-[#0171e3] text-white px-6 sm:px-7 py-3.5 text-[11px] sm:text-xs tracking-[0.12em] sm:tracking-[0.15em] uppercase font-medium hover:bg-[#0b82f5] transition-all duration-300 min-h-12 max-w-full"
            >
              <span className="text-sm">↘</span>
              Cek Ketersediaan
            </a>
          </div>
        </div>

        {/* Baris bawah — jam live, tombol scroll, dot indicator */}
        <div className="flex items-end justify-between gap-4">
          <LiveClock />

          <a
            href="#quick-facts"
            aria-label="Scroll ke informasi villa"
            className="group absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 transition-colors duration-300 hover:text-white"
          >
            <span className="text-[10px] tracking-[0.24em] uppercase">Scroll ke bawah</span>
            <span className="flex size-10 items-center justify-center rounded-full border border-white/45 transition-transform duration-300 group-hover:translate-y-1">
              <span aria-hidden="true" className="text-lg leading-none">↓</span>
            </span>
          </a>

          {heroImages.length > 1 && (
            <div className="flex gap-2">
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
        </div>

      </div>
    </section>
  );
}
