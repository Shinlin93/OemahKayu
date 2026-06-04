import { useState } from "react";
import logo from "../logo.png";
import { IconWhatsApp, IconMenu, IconClose } from "./Icons";
import { navLinks } from "../data";
import { WA_URL } from "../constants";
import { scrollToSection } from "../hooks";
import { useScrolled } from "../hooks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(40);

  const handleNav = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1A0F07]/90 backdrop-blur-xl shadow-lg"
          : "bg-[#1A0F07]/35 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Desktop Navbar */}
        <div className="h-24 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNav("hero");
            }}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Oemah Kayu Penanggungan"
              className="h-20 lg:h-24 w-auto object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="
                  text-[#F5EFE6]
                  hover:text-[#D4AE3A]
                  text-sm
                  tracking-[0.18em]
                  uppercase
                  font-light
                  transition-colors
                  duration-300
                "
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener"
            className="
              hidden lg:flex
              items-center
              gap-2
              bg-[#D4AE3A]
              text-[#2C1A0E]
              px-7
              py-3
              rounded-none
              text-sm
              tracking-[0.15em]
              uppercase
              font-medium
              hover:bg-[#E8C04A]
              transition-all
              duration-300
            "
          >
            <IconWhatsApp />
            Cek Ketersediaan
          </a>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-500
          bg-[#1A0F07]/95
          backdrop-blur-xl
          ${
            menuOpen
              ? "max-h-screen py-6"
              : "max-h-0"
          }
        `}
      >
        <div className="flex flex-col items-center gap-6 px-8">

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="
                text-[#F5EFE6]
                text-sm
                tracking-[0.18em]
                uppercase
                border-b
                border-white/10
                pb-4
                w-full
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
              flex
              items-center
              justify-center
              gap-2
              bg-[#D4AE3A]
              text-[#2C1A0E]
              w-full
              py-4
              uppercase
              tracking-[0.15em]
              text-sm
              font-medium
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