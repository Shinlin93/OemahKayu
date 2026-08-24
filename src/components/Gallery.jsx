import { useState, useEffect, useCallback } from "react";
import { IconChevron, IconClose } from "./Icons";

import parkir from "../assets/parkir.webp";
import belakang1 from "../assets/belakang-1.webp";
import belakang2 from "../assets/belakang-2.webp";
import bilyard from "../assets/bilyard.webp";
import pingpong from "../assets/pingpong.webp";

const galleryItems = [
  {
    label: "Oemah Kayu Penanggungan",
    img: parkir,
    span: "col-span-2 row-span-2",
    height: "340px",
  },
  {
    label: "Halaman Belakang",
    img: belakang1,
    height: "165px",
  },
  {
    label: "Area BBQ & Gathering",
    img: belakang2,
    height: "165px",
  },
  {
    label: "Meja Biliar",
    img: bilyard,
    height: "165px",
  },
  {
    label: "Meja Ping Pong",
    img: pingpong,
    height: "165px",
  },
];

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState(null); // null = lightbox tertutup
  const isOpen = activeIdx !== null;

  const close = useCallback(() => setActiveIdx(null), []);
  const prev = useCallback(
    () => setActiveIdx((i) => (i - 1 + galleryItems.length) % galleryItems.length),
    []
  );
  const next = useCallback(
    () => setActiveIdx((i) => (i + 1) % galleryItems.length),
    []
  );

  // Kunci scroll body & dukung navigasi keyboard selagi lightbox terbuka
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, close, prev, next]);

  return (
    <section id="galeri" className="py-20 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4"
          data-reveal
        >
          <div>
            <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-light mb-2">
              Galeri
            </p>

            <h2
              className="font-serif-display text-[#2C1A0E]"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
              }}
            >
              Setiap Sudut
              <br />
              Punya Cerita
            </h2>
          </div>
        </div>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          data-reveal
        >
          {galleryItems.map((g, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group border-none p-0 bg-transparent ${g.span ?? ""}`}
              style={{ minHeight: g.height }}
              aria-label={`Perbesar foto: ${g.label}`}
            >
              <img
                src={g.img}
                alt={g.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ minHeight: g.height }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/70 to-transparent" />

              {/* Label */}
              <p className="absolute bottom-3 left-4 font-serif-display text-[#F5EFE6] text-sm italic z-10 text-left">
                {g.label}
              </p>
            </button>
          ))}
        </div>

      </div>

      {/* ═══ LIGHTBOX ═══ */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={close}
        >
          {/* Tombol tutup */}
          <button
            onClick={close}
            aria-label="Tutup"
            className="absolute top-5 right-5 sm:top-8 sm:right-8 text-white/80 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer z-10"
          >
            <IconClose />
          </button>

          {/* Counter */}
          <p className="absolute top-6 left-6 sm:top-8 sm:left-8 text-white/60 text-xs tracking-widest uppercase font-light z-10">
            {activeIdx + 1} / {galleryItems.length}
          </p>

          {/* Tombol prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Foto sebelumnya"
            className="absolute left-3 sm:left-6 text-white/70 hover:text-white transition-colors duration-200 bg-white/5 hover:bg-white/10 rounded-full p-2 sm:p-3 border-none cursor-pointer z-10"
          >
            <span className="block rotate-180"><IconChevron /></span>
          </button>

          {/* Tombol next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Foto berikutnya"
            className="absolute right-3 sm:right-6 text-white/70 hover:text-white transition-colors duration-200 bg-white/5 hover:bg-white/10 rounded-full p-2 sm:p-3 border-none cursor-pointer z-10"
          >
            <IconChevron />
          </button>

          {/* Foto besar */}
          <img
            src={galleryItems[activeIdx].img}
            alt={galleryItems[activeIdx].label}
            className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Caption bawah */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 font-serif-display italic text-sm sm:text-base text-center px-6">
            {galleryItems[activeIdx].label}
          </p>
        </div>
      )}
    </section>
  );
}
