import { useState } from "react";
import { IconMenu, IconClose, IconWhatsApp } from "./Icons";
import { navLinks } from "../data";
import { WA_URL } from "../constants";
import { scrollToSection } from "../hooks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4">
      <div className="max-w-4xl mx-auto">

        {/* ── Pill mengambang — glassmorphism ── */}
        <div
          className="flex items-center justify-between gap-4 px-5 sm:px-6 py-3 rounded-full transition-all duration-300"
          style={{
            background: "rgba(26,15,7,0.55)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleNav("hero"); }}
            className="flex items-center gap-2.5 flex-shrink-0"
          >
            <img
              src="/logo-icon.png"
              alt=""
              aria-hidden="true"
              className="h-6 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span
              className="text-white font-serif-display hidden sm:block"
              style={{ fontSize: "1.05rem", fontWeight: 500 }}
            >
              Oemah Kayu
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-white/70 hover:text-white text-[13px] font-light transition-colors duration-200 bg-transparent border-none cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA — pill putih solid, kontras dengan kaca gelap */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-white text-[#2C1A0E] px-4 py-2 rounded-full text-[13px] font-medium hover:bg-white/90 transition-all duration-200 flex-shrink-0"
          >
            <IconWhatsApp />
            Booking
          </a>

          {/* Mobile burger */}
          <button
            className="lg:hidden text-white flex-shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>

        {/* ── Dropdown mobile — glass juga, muncul di bawah pill ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            menuOpen ? "max-h-96 mt-3 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="flex flex-col gap-1 p-4 rounded-3xl"
            style={{
              background: "rgba(26,15,7,0.75)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-white/80 hover:text-white text-sm font-light py-3 text-left bg-transparent border-none cursor-pointer border-b border-white/10 last:border-b-0"
              >
                {link.label}
              </button>
            ))}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-[#2C1A0E] py-3 rounded-full text-sm font-medium mt-3"
            >
              <IconWhatsApp />
              Booking
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}
