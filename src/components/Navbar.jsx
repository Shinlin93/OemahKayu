import { useState } from "react";
import { IconMenu, IconClose } from "./Icons";
import { navLinks } from "../data";
import { WA_URL } from "../constants";
import { scrollToSection } from "../hooks";
import { useScrolled } from "../hooks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(60);

  const handleNav = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F8F5EF]/80 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] border-b border-[#2C1A0E]/10"
          : "bg-white/5 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNav("hero");
            }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <img
              src="/logo-icon.png"
              alt=""
              aria-hidden="true"
              className={`w-auto object-contain transition-all duration-500 ${
                scrolled ? "h-9" : "h-10"
              }`}
              style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }}
            />
            <div className="flex flex-col leading-none">
              <span
                className={`font-serif-display transition-colors duration-500 ${
                  scrolled ? "text-[#2C1A0E]" : "text-white"
                }`}
                style={{ fontSize: "1.35rem", fontWeight: 500, letterSpacing: "0.02em" }}
              >
                Oemah Kayu
              </span>
              <span
                className={`text-[9px] tracking-[0.3em] uppercase font-light mt-0.5 transition-colors duration-500 ${
                  scrolled ? "text-[#B8962E]" : "text-white/70"
                }`}
              >
                Penanggungan
              </span>
            </div>
          </a>

          {/* Desktop Menu — Glassmorphism Style like Supaste */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-4 py-2 text-[11px] tracking-[0.15em] uppercase font-medium rounded-full transition-all duration-300 bg-transparent border-none cursor-pointer ${
                  scrolled
                    ? "text-[#2C1A0E] hover:bg-[#2C1A0E]/10 hover:text-[#B8962E]"
                    : "text-white/90 hover:bg-white/15 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA — Glassmorphism style */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] tracking-[0.15em] uppercase font-medium transition-all duration-300 ${
              scrolled
                ? "bg-[#2C1A0E] text-[#F5EFE6] hover:bg-[#3D2A1A] shadow-lg"
                : "bg-white/15 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
            }`}
          >
            Booking
            <span className="text-sm">↗</span>
          </a>

          {/* Mobile Button */}
          <button
            className={`lg:hidden p-2 rounded-full transition-colors duration-300 ${
              scrolled
                ? "text-[#2C1A0E] hover:bg-[#2C1A0E]/10"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — Glassmorphism */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen
            ? "max-h-screen py-4 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-6 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] p-5">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-left px-4 py-3 rounded-xl text-sm uppercase tracking-[0.15em] transition-all duration-300 bg-transparent border-none cursor-pointer ${
                  scrolled
                    ? "text-[#2C1A0E] hover:bg-[#2C1A0E]/10"
                    : "text-white/90 hover:bg-white/15"
                }`}
              >
                {link.label}
              </button>
            ))}

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 mt-2 py-3.5 rounded-xl text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                scrolled
                  ? "bg-[#2C1A0E] text-[#F5EFE6] hover:bg-[#3D2A1A]"
                  : "bg-white/15 backdrop-blur-md border border-white/20 text-white hover:bg-white/25"
              }`}
            >
              Booking ↗
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}