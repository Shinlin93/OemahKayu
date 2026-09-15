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
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 overflow-hidden rounded-full border border-[#e8dfd3] bg-white px-3 py-2.5 text-[#2C1A0E] shadow-[0_8px_30px_rgba(44,26,14,0.12)] sm:px-5">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 -top-3 size-14 rotate-12 rounded-xl opacity-30"
          style={{
            background: "repeating-linear-gradient(8deg, #9a6a3a 0 2px, #d2a36e 2px 5px, #754522 5px 7px, #c28a52 7px 10px)",
          }}
        />
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
            style={{ filter: "brightness(0) saturate(100%)" }}
          />
          <span className="relative z-10 hidden truncate font-serif-display text-lg text-[#2C1A0E] sm:block">Oemah Kayu</span>
        </a>

        <div className="relative z-10 hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="whitespace-nowrap border-none bg-transparent py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#2C1A0E]/75 transition-colors hover:text-[#2C1A0E]"
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
            className="relative z-10 flex items-center justify-center rounded-full border border-[#e8dfd3] bg-[#f8f4ee] p-2 text-[#2C1A0E] lg:hidden"
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      <div className={`mx-auto max-w-7xl overflow-hidden transition-all duration-300 lg:hidden ${menuOpen ? "max-h-96 pt-2 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col gap-1 rounded-2xl border border-[#e8dfd3] bg-white p-3 text-[#2C1A0E] shadow-[0_8px_30px_rgba(44,26,14,0.12)]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="border-b border-[#e8dfd3] bg-transparent py-3 text-left text-xs font-medium uppercase tracking-[0.14em] text-[#2C1A0E]/75 last:border-b-0 hover:text-[#2C1A0E]"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
