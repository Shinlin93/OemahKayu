import { useState } from "react";
import logo from "../logo.png";
import { IconWhatsApp, IconMenu, IconClose } from "./Icons";
import { navLinks } from "../data";
import { WA_URL } from "../constants";
import { scrollToSection } from "../hooks";
import { useScrolled } from "../hooks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navbar berubah setelah scroll 120px
  const scrolled = useScrolled(120);

  const handleNav = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "backdrop-blur-[30px] border-b border-white/10 py-2"
          : "bg-transparent py-4"
      }`}
      style={
        scrolled
          ? {
              background: "rgba(255, 255, 255, 0.04)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.07)",
            }
          : {}
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNav("hero");
          }}
        >
          <img
            src={logo}
            alt="Oemah Kayu Penanggungan"
            className="h-14 w-auto object-contain"
            style={{
              filter:
                "drop-shadow(0 4px 20px rgba(0,0,0,0.55))",
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="
                text-white
                hover:text-[#D4AE3A]
                text-xs
                tracking-[0.18em]
                uppercase
                font-medium
                transition-all
                duration-300
              "
              style={{
                textShadow:
                  "0 2px 12px rgba(0,0,0,0.7)",
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener"
          className="
            hidden lg:inline-flex
            items-center gap-2
            px-5 py-2.5
            text-xs
            tracking-[0.15em]
            uppercase
            font-medium
            rounded-full
            transition-all
            duration-300
            border border-white/20
            text-white
            hover:bg-white/10
          "
          style={{
            backdropFilter: "blur(12px)",
            textShadow:
              "0 2px 12px rgba(0,0,0,0.5)",
          }}
        >
          <IconWhatsApp />
          Cek Ketersediaan
        </a>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white"
          style={{
            textShadow:
              "0 2px 12px rgba(0,0,0,0.7)",
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
        style={{
          backdropFilter: "blur(30px)",
          background: "rgba(255, 255, 255, 0.07)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex flex-col items-center gap-5 px-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="
                text-white
                text-sm
                tracking-widest
                uppercase
                font-light
                border-b
                border-white/10
                pb-4
                w-full
                text-center
              "
            >
              {link.label}
            </button>
          ))}

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener"
            className="
              flex items-center gap-2
              bg-[#B8962E]
              text-[#2C1A0E]
              px-8 py-3.5
              text-xs
              tracking-widest
              uppercase
              font-medium
              w-full
              justify-center
              rounded-full
            "
          >
            <IconWhatsApp />
            Cek Ketersediaan
          </a>
        </div>
      </div>
    </header>
  );
}