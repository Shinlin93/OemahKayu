import logo from "../logo.png";
import { navLinks } from "../data";
import { WA_URL } from "../constants";
import { scrollToSection } from "../hooks";

export default function Footer() {
  return (
    <footer className="bg-[#1A0F07] py-12 text-center">
      <div className="max-w-7xl mx-auto px-6">

        {/* Logo */}
        <img
          src={logo}
          alt="Oemah Kayu Penanggungan"
          className="h-16 w-auto object-contain mx-auto mb-4 drop-shadow-lg"
        />

        <p className="text-[#B8962E] text-xs tracking-[0.3em] uppercase font-light mb-8">
          Pandaan · Pasuruan · Jawa Timur · Sejak 2024
        </p>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-[#F5EFE6]/30 hover:text-[#B8962E] text-xs tracking-widest uppercase font-light transition-colors duration-300 bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* WA link */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 text-[#B8962E]/60 hover:text-[#B8962E] text-xs tracking-widest uppercase font-light transition-colors duration-300 mb-8"
        >
          WhatsApp
        </a>

        <div className="w-full h-px bg-[#F5EFE6]/6 mb-6" />

        <p className="text-[#F5EFE6]/20 text-xs font-light">
          © 2025 Oemah Kayu Penanggungan. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  );
}
