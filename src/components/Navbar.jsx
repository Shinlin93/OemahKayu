import { useState } from "react";
import logo from "../logo.png";
import { IconWhatsApp, IconMenu, IconClose } from "./Icons";
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
          ? "bg-[#2C1A0E]/95 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">

        {/* ── Logo ── */}
        <a href="#" onClick={(e) => { e.preventDefault(); handleNav("hero"); }}>
          <img
            src={logo}
            alt="Oemah Kayu Penanggungan"
            className="h-14 w-auto object-contain drop-shadow-lg"
          />
        </a>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-[#F5EFE6]/80 hover:text-[#B8962E] text-xs tracking-[0.18em] uppercase font-light transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener"
          className="hidden lg:inline-flex items-center gap-2 border border-[#B8962E] text-[#B8962E] hover:bg-[#B8962E] hover:text-[#2C1A0E] px-5 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 font-medium"
        >
          <IconWhatsApp /> Cek Ketersediaan
        </a>

        {/* ── Mobile Hamburger ── */}
        <button
          className="lg:hidden text-[#F5EFE6]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        className={`lg:hidden bg-[#2C1A0E] transition-all duration-400 overflow-hidden ${
          menuOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-5 px-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-[#F5EFE6]/80 text-sm tracking-widest uppercase font-light border-b border-[#F5EFE6]/10 pb-4 w-full text-center"
            >
              {link.label}
            </button>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 bg-[#B8962E] text-[#2C1A0E] px-8 py-3.5 text-xs tracking-widest uppercase font-medium w-full justify-center"
          >
            <IconWhatsApp /> Cek Ketersediaan
          </a>
        </div>
      </div>
    </header>
  );
}
