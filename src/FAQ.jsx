import { useState } from "react";
import { faqs } from "../data";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section id="faq" className="py-20 bg-[#EDE0CC]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">

        {/* Header */}
        <div className="text-center mb-14" data-reveal>
          <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-light mb-3">
            FAQ
          </p>
          <h2
            className="font-serif-display text-[#2C1A0E]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}
          >
            Pertanyaan yang Sering Ditanyakan
          </h2>
        </div>

        {/* Items */}
        <div className="flex flex-col" data-reveal>
          {faqs.map((f, i) => (
            <div
              key={i}
              className="border-b border-[#2C1A0E]/12"
            >
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4 bg-transparent border-none cursor-pointer"
                onClick={() => toggle(i)}
                aria-expanded={openIdx === i}
              >
                <h3
                  className="font-serif-display text-[#2C1A0E] text-base sm:text-lg"
                  style={{ fontWeight: 400 }}
                >
                  {f.q}
                </h3>
                <span
                  className={`w-8 h-8 flex items-center justify-center border flex-shrink-0 text-lg transition-all duration-300 ${
                    openIdx === i
                      ? "rotate-45 bg-[#B8962E] text-[#F5EFE6] border-[#B8962E]"
                      : "border-[#2C1A0E]/20 text-[#B8962E]"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIdx === i ? "max-h-48 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-[#6B5846] font-light text-sm leading-relaxed">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
