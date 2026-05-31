import { useState } from "react";
import { testimonials } from "../data";
import { IconStar } from "./Icons";

// ─── GANTI URL foto avatar di bawah ─────────────────────────────────────────
const avatarImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
];

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-5">
      {[...Array(5)].map((_, i) => <IconStar key={i} />)}
    </div>
  );
}

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="ulasan" className="bg-[#2C1A0E] py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Header */}
        <div className="text-center mb-14" data-reveal>
          <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-light mb-3">
            Kata Tamu Kami
          </p>
          <h2
            className="font-serif-display text-[#F5EFE6]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}
          >
            Mereka Sudah Merasakannya
          </h2>
        </div>

        {/* Desktop — 3 cards */}
        <div className="hidden sm:grid grid-cols-3 gap-5" data-reveal>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#F5EFE6] p-8 border-t-2 border-[#B8962E]"
            >
              <StarRow />
              <p
                className="font-serif-display text-[#2C1A0E] italic mb-6"
                style={{ fontSize: 15, lineHeight: 1.75 }}
              >
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={avatarImages[i]}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover flex-shrink-0 border-2 border-[#B8962E]/30"
                />
                <div>
                  <p className="text-[#2C1A0E] text-sm font-medium">{t.name}</p>
                  <p className="text-[#6B5846] text-xs font-light">
                    {t.type} · {t.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile — slider */}
        <div className="sm:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIdx * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 bg-[#F5EFE6] p-7 border-t-2 border-[#B8962E]"
              >
                <StarRow />
                <p
                  className="font-serif-display text-[#2C1A0E] italic mb-5"
                  style={{ fontSize: 14, lineHeight: 1.75 }}
                >
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={avatarImages[i]}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="text-[#2C1A0E] text-sm font-medium">{t.name}</p>
                    <p className="text-[#6B5846] text-xs font-light">
                      {t.type} · {t.city}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`h-0.5 transition-all duration-300 border-none cursor-pointer ${
                  i === activeIdx ? "w-8 bg-[#B8962E]" : "w-4 bg-[#F5EFE6]/20"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
