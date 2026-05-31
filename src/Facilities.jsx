import { facilities } from "../data";
import { facilityIcons } from "./Icons";

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
            className="font-serif-display text-[#2C1A0E]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}
          >
            Semua yang Anda Butuhkan
          </h2>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#2C1A0E]/10"
          data-reveal
        >
          {facilities.map((f, i) => (
            <div
              key={i}
              className="
                relative overflow-hidden
                bg-[#F5EFE6] hover:bg-[#2C1A0E]
                flex flex-col items-center text-center
                px-5 py-10 gap-4
                transition-all duration-350 cursor-default group
                after:content-[''] after:absolute after:bottom-0 after:left-0
                after:w-0 after:h-0.5 after:bg-[#B8962E]
                after:transition-all after:duration-500
                hover:after:w-full
              "
            >
              {/* Nomor dekoratif */}
              <span
                className="font-serif-display text-[#EDE0CC] group-hover:text-[#2C1A0E]/20 transition-colors duration-300"
                style={{ fontSize: "2.2rem", lineHeight: 1, position: "absolute", top: 12, right: 16 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="text-[#3A5A3C] group-hover:text-[#B8962E] transition-colors duration-300">
                {facilityIcons[i]}
              </div>

              {/* Text */}
              <div>
                <p
                  className="font-serif-display text-[#2C1A0E] group-hover:text-[#F5EFE6] transition-colors duration-300"
                  style={{ fontSize: 17, fontWeight: 400 }}
                >
                  {f.title}
                </p>
                <p className="text-[#6B5846] group-hover:text-[#F5EFE6]/50 text-xs font-light mt-1 transition-colors duration-300">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
