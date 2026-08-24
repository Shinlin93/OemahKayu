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
          ? "bg-[#F8F5EF]/95 backdrop-blur-xl shadow-md border-b border-[#2C1A0E]/5"
          : "bg-transparent"
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

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`relative text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 group bg-transparent border-none cursor-pointer ${
                  scrolled ? "text-[#2C1A0E] hover:text-[#B8962E]" : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1.5 h-px w-0 group-hover:w-full transition-all duration-300 ${
                    scrolled ? "bg-[#B8962E]" : "bg-white"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* CTA — minimalis, teks + panah, bukan pill besar */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden lg:inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${
              scrolled ? "text-[#2C1A0E] hover:text-[#B8962E]" : "text-white hover:text-white/70"
            }`}
          >
            Booking
            <span className="text-sm">↗</span>
          </a>

          {/* Mobile Button */}
          <button
            className={`lg:hidden transition-colors duration-300 ${scrolled ? "text-[#2C1A0E]" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden bg-[#F8F5EF] transition-all duration-500 ${
          menuOpen ? "max-h-screen py-8" : "max-h-0"
        }`}
      >
        <div className="px-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-[#2C1A0E] text-sm uppercase tracking-[0.2em] border-b border-[#2C1A0E]/10 pb-4 text-left bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#2C1A0E] text-[#F5EFE6] py-4 uppercase tracking-[0.18em] text-sm font-medium"
          >
            Booking ↗
          </a>
        </div>
      </div>
    </header>
  );
}
