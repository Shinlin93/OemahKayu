import heroImage from "../assets/HERO-OMAH.png";
import { IconWhatsApp } from "./Icons";
import { WA_URL } from "../constants";
import { scrollToSection } from "../hooks";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Hero Background */}
      <img
        src={heroImage}
        alt="Oemah Kayu Penanggungan"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Luxury Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
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
                Tempat Berkumpul
              </span>

              <span className="block">
                dengan Orang-Orang
              </span>

              <span
                className="block text-[#D4AE3A]"
                style={{
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                yang Paling Berarti
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-white/85 max-w-2xl mb-10 font-light"
              style={{
                lineHeight: 1.9,
                fontSize: "1.1rem",
              }}
            >
              Rumah kayu Jawa yang hangat, kolam renang pribadi,
              dan panorama Gunung Penanggungan untuk momen keluarga,
              gathering, retreat, dan pengalaman menginap yang
              tak terlupakan.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  bg-[#D4AE3A]
                  text-[#2C1A0E]
                  px-10
                  py-4
                  rounded-lg
                  uppercase
                  tracking-[0.15em]
                  text-sm
                  font-medium
                  shadow-lg
                  hover:bg-[#E6BF4B]
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                "
              >
                <IconWhatsApp />
                Cek Ketersediaan
              </a>

              <button
                onClick={() => scrollToSection("galeri")}
                className="
                  border
                  border-white/40
                  text-white
                  px-10
                  py-4
                  rounded-lg
                  uppercase
                  tracking-[0.15em]
                  text-sm
                  backdrop-blur-sm
                  hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                Lihat Galeri
              </button>

            </div>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-3">

          <span
            className="text-white/70 uppercase"
            style={{
              fontSize: "11px",
              letterSpacing: "0.35em",
            }}
          >
            Scroll Ke Bawah
          </span>

          <div className="w-px h-14 bg-gradient-to-b from-[#D4AE3A] to-transparent" />

        </div>
      </div>

    </section>
  );
}