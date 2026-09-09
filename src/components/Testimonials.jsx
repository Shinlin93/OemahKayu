import { useState } from "react";
import { testimonials } from "../data";
import { IconStar } from "./Icons";

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-5">
      {[...Array(5)].map((_, i) => <IconStar key={i} />)}
    </div>
  );
}

// Avatar berbasis inisial nama asli tamu — jujur, bukan foto stok generik (R-18/R-23/R-38)
function GuestAvatar({ name, size = "md" }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const dimension = size === "sm" ? "w-10 h-10" : "w-11 h-11";

  return (
    <div className={`${dimension} rounded-full bg-[#B8962E]/15 border-2 border-[#B8962E]/30 flex items-center justify-center flex-shrink-0`}>
      <span className="text-[#B8962E] text-sm font-medium">{initials}</span>
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
                <GuestAvatar name={t.name} />
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
                  <GuestAvatar name={t.name} size="sm" />
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
