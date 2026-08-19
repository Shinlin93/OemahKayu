import { facilities } from "../data";
import { facilityIcons } from "./Icons";

const MiniLeaf = () => (
  <svg width="14" height="14" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 22V12" />
    <path d="M14 12C14 12 8 10 8 4c4 0 6 4 6 8z" />
    <path d="M14 16C14 16 20 14 20 8c-4 0-6 4-6 8z" />
  </svg>
);

export default function Facilities() {
  return (
    <section id="fasilitas" className="py-20 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Header */}
        <div className="text-center mb-14" data-reveal>
          <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-light mb-3">
            Fasilitas Lengkap
          </p>
          <h2
            className="font-serif-display text-[#2C1A0E] mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}
          >
            Semua yang Anda Butuhkan
          </h2>
          <p
            className="text-[#6B5846] text-sm font-light max-w-lg mx-auto"
            style={{ lineHeight: 1.8 }}
          >
            Fasilitas lengkap untuk kenyamanan Anda dan keluarga. Nikmati
            waktu berkualitas tanpa perlu pergi jauh.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          data-reveal
        >
          {facilities.map((f, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Nomor ghost — dekoratif, tidak perlu dibaca */}
              <span
                aria-hidden="true"
                className="absolute top-4 right-5 font-serif-display text-[#2C1A0E]"
                style={{ fontSize: "2.6rem", lineHeight: 1, opacity: 0.06 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon badge */}
              <div className="w-14 h-14 rounded-full bg-[#3A5A3C]/10 flex items-center justify-center text-[#3A5A3C] mb-5">
                {facilityIcons[i]}
              </div>

              <p
                className="font-serif-display text-[#2C1A0E] mb-2"
                style={{ fontSize: 17, fontWeight: 600 }}
              >
                {f.title}
              </p>
              <div className="w-6 h-0.5 bg-[#3A5A3C] mb-3" />
              <p
                className="text-[#6B5846] text-xs font-light"
                style={{ lineHeight: 1.6 }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline pill */}
        <div className="flex justify-center mt-10" data-reveal>
          <div className="inline-flex items-center gap-2.5 border border-[#3A5A3C]/25 rounded-full px-6 py-2.5 text-[#3A5A3C] text-sm font-light">
            <MiniLeaf />
            Nyaman · Lengkap · Berkesan
          </div>
        </div>

      </div>
    </section>
  );
}
