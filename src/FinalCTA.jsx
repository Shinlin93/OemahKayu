import { IconWhatsApp } from "./Icons";
import { WA_URL } from "../constants";

export default function FinalCTA() {
  return (
    <section className="bg-[#2C1A0E] relative overflow-hidden py-24 text-center">
      {/* Radial glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 100%, #3A5A3C 0%, transparent 60%), radial-gradient(ellipse at 50% 0%, #6B5846 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6" data-reveal>
        {/* Vertical line dekorasi */}
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#B8962E] mx-auto mb-10" />

        <p className="text-[#B8962E] text-xs tracking-[0.4em] uppercase font-light mb-6">
          Siap Menciptakan Momen Berharga?
        </p>

        <h2
          className="font-serif-display text-[#F5EFE6] mb-6"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 300, lineHeight: 1.25 }}
        >
          Beberapa Momen Terbaik<br />
          dalam Hidup Terjadi Saat<br />
          Kita Berkumpul Bersama<br />
          <em className="text-[#B8962E]">Orang-Orang Tersayang</em>
        </h2>

        <p
          className="text-[#F5EFE6]/60 font-light text-base mb-10"
          style={{ lineHeight: 1.8 }}
        >
          Cek ketersediaan tanggal dan dapatkan penawaran terbaik untuk Anda.
        </p>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-3 bg-[#B8962E] text-[#2C1A0E] px-10 py-5 text-sm tracking-[0.1em] uppercase font-medium transition-all duration-300 hover:bg-[#D4AE3A] hover:-translate-y-1"
        >
          <IconWhatsApp />
          Hubungi Kami via WhatsApp
        </a>

        <p className="text-[#F5EFE6]/25 text-xs tracking-[0.2em] uppercase mt-6 font-light">
          Ketersediaan terbatas · Pesan sebelum tanggal Anda terambil
        </p>
      </div>
    </section>
  );
}
