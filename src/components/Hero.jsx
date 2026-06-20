import React from 'react';

export default function Hero() {
  return (
    {/* Content */}
    <div className="relative z-10 min-h-screen flex items-center pb-28">
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 pt-32">
        <div className="max-w-3xl">

          {/* Location */}
          <p className="text-[#D4AE3A] text-xs tracking-[0.45em] uppercase mb-6 font-light">
            Oemah Kayu Penanggungan · Pandaan · Pasuruan
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
            <span className="block">
              Dekat dengan Alam,
            </span>
            <span className="block">
              Dekat dengan Momen
            </span>
            <span
              className="block text-[#D4AE3A]"
              style={{
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              yang Tak Tergantikan
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-white/85 max-w-2xl mb-12 font-light"
            style={{
              lineHeight: 1.9,
              fontSize: "1.1rem",
            }}
          >
            Rumah kayu Jawa yang hangat dengan kolam renang pribadi,
            jalur jogging pagi yang menyegarkan, dan panorama Gunung
            Penanggungan yang memanjakan mata.
            <br />
            <br />
            Tempat sempurna untuk beristirahat, berkumpul, dan menikmati
            keindahan alam pegunungan yang menenangkan.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Tombol Utama */}
            <button className="bg-[#D4AE3A] text-slate-900 px-8 py-3 rounded font-medium hover:bg-[#bfa035] transition">
              Pesan Sekarang
            </button>
            {/* Tombol Kedua */}
            <button className="border border-white text-white px-8 py-3 rounded font-medium hover:bg-white/10 transition">
              Lihat Galeri
            </button>
          </div> {/* <-- Menutup div bagian Buttons */}

        </div> {/* <-- Menutup div max-w-3xl */}
      </div> {/* <-- Menutup div w-full max-w-7xl */}
    </div> {/* <-- Menutup div relative z-10 */}
  );
}