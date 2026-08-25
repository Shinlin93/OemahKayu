import { useState, useRef } from "react";
import { IconMenu, IconClose, IconWhatsApp } from "./Icons";
import { navLinks } from "../data";
import { WA_URL } from "../constants";
import { scrollToSection } from "../hooks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const handleNav = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  // ── Efek "liquid glass" ala iOS — highlight cahaya mengikuti kursor ──
  const handleMouseMove = (e) => {
    const el = navRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
    el.style.setProperty("--glow-opacity", "1");
  };

  const handleMouseLeave = () => {
    const el = navRef.current;
    if (!el) return;
    el.style.setProperty("--glow-opacity", "0");
  };

  return (
    <>
      {/* ═══ Logo — pojok kiri-atas, terpisah dari tab nav links ═══ */}
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); handleNav("hero"); }}
        className="fixed top-5 left-5 sm:top-6 sm:left-6 z-50 flex items-center gap-2.5"
        style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.45))" }}
      >
        <img
          src="/logo-icon.png"
          alt=""
          aria-hidden="true"
          className="h-7 sm:h-8 w-auto object-contain"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <span
          className="hidden sm:block text-white font-serif-display"
          style={{ fontSize: "1.1rem", fontWeight: 500, letterSpacing: "0.02em" }}
        >
          Oemah Kayu
        </span>
      </a>

      {/* ═══ Booking CTA — pojok kanan-atas, terpisah dari tab nav links ═══ */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-5 right-5 sm:top-6 sm:right-6 z-50 inline-flex items-center gap-2 bg-white text-[#2C1A0E] px-4 sm:px-5 py-2.5 rounded-full text-[13px] font-medium hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
      >
        <IconWhatsApp />
        <span className="hidden sm:inline uppercase tracking-[0.08em]">Booking</span>
      </a>

      {/* ═══ Nav links — tab kaca nempel di ujung atas, tengah layar ═══ */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 z-40">

        {/* ── Desktop: tab kaca nempel di ujung atas, rounded cuma di bawah ── */}
        <nav
          ref={navRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative hidden lg:flex items-center gap-8 px-9 pt-4 pb-3.5 rounded-b-[28px] overflow-hidden"
          style={{
            "--mx": "50%",
            "--my": "50%",
            "--glow-opacity": "0",
            background: "rgba(26,15,7,0.28)",
            backdropFilter: "blur(22px) saturate(160%)",
            WebkitBackdropFilter: "blur(22px) saturate(160%)",
            borderLeft: "1px solid rgba(255,255,255,0.18)",
            borderRight: "1px solid rgba(255,255,255,0.18)",
            borderBottom: "1px solid rgba(255,255,255,0.18)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.15)",
          }}
        >
          {/* Highlight cahaya mengikuti kursor — efek "kaca pembesar" */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: "var(--glow-opacity)",
              background:
                "radial-gradient(circle 120px at var(--mx) var(--my), rgba(255,255,255,0.35), rgba(255,255,255,0.08) 45%, transparent 70%)",
              mixBlendMode: "overlay",
            }}
          />

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="group relative text-white/80 hover:text-white text-[11px] uppercase tracking-[0.18em] font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer whitespace-nowrap py-1"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#D4AE3A] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* ── Mobile: burger nempel di ujung atas, sama gaya ── */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="flex items-center justify-center px-6 pt-4 pb-3.5 rounded-b-[24px] text-white border-none cursor-pointer"
            style={{
              background: "rgba(26,15,7,0.32)",
              backdropFilter: "blur(22px) saturate(160%)",
              WebkitBackdropFilter: "blur(22px) saturate(160%)",
              borderLeft: "1px solid rgba(255,255,255,0.18)",
              borderRight: "1px solid rgba(255,255,255,0.18)",
              borderBottom: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>

          {/* Dropdown mobile */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 overflow-hidden transition-all duration-400 ease-in-out ${
              menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
            style={{ width: "min(88vw, 320px)" }}
          >
            <div
              className="flex flex-col gap-1 p-4 rounded-b-3xl"
              style={{
                background: "rgba(26,15,7,0.55)",
                backdropFilter: "blur(22px) saturate(160%)",
                WebkitBackdropFilter: "blur(22px) saturate(160%)",
                borderLeft: "1px solid rgba(255,255,255,0.18)",
                borderRight: "1px solid rgba(255,255,255,0.18)",
                borderBottom: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className="text-white/80 hover:text-white text-xs uppercase tracking-[0.15em] font-medium py-3.5 text-left bg-transparent border-none cursor-pointer border-b border-white/10 last:border-b-0"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

      </header>
    </>
  );
}

