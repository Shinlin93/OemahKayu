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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 sm:pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-white/20 bg-[#1a0f07]/75 px-3 py-2.5 text-white shadow-lg backdrop-blur-xl sm:px-5">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); handleNav("hero"); }}
          className="flex min-w-0 items-center gap-2"
        >
          <img
            src="/logo-icon.png"
            alt=""
            aria-hidden="true"
            className="size-7 shrink-0 object-contain sm:size-8"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span className="hidden truncate font-serif-display text-lg sm:block">Oemah Kayu</span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="whitespace-nowrap border-none bg-transparent py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-3 py-2 text-[11px] font-medium uppercase tracking-[0.06em] text-[#2C1A0E] transition-colors hover:bg-white/90 sm:px-4 sm:text-[12px]"
          >
            <IconWhatsApp />
            <span className="hidden sm:inline">Booking</span>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            className="flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-white lg:hidden"
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      <div className={`mx-auto max-w-7xl overflow-hidden transition-all duration-300 lg:hidden ${menuOpen ? "max-h-96 pt-2 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col gap-1 rounded-2xl border border-white/20 bg-[#1a0f07]/90 p-3 shadow-lg backdrop-blur-xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="border-b border-white/10 bg-transparent py-3 text-left text-xs font-medium uppercase tracking-[0.14em] text-white/80 last:border-b-0 hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
