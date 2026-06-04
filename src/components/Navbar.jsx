import { useState } from "react";
import logo from "../logo.png";
import { IconWhatsApp, IconMenu, IconClose } from "./Icons";
import { navLinks } from "../data";
import { WA_URL } from "../constants";
import { scrollToSection } from "../hooks";
import { useScrolled } from "../hooks";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);
const scrolled = useScrolled(50);

const handleNav = (id) => {
scrollToSection(id);
setMenuOpen(false);
};

return (
<header
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F8F5EF]/95 backdrop-blur-xl shadow-lg border-b border-[#D4AE3A]/20"
          : "bg-[#F8F5EF]/80 backdrop-blur-md"
      }`}
> <div className="max-w-[1600px] mx-auto px-8 lg:px-12">

    <div className="h-24 flex items-center justify-between">

      {/* Logo */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleNav("hero");
        }}
        className="flex items-center flex-shrink-0"
      >
        <img
          src={logo}
          alt="Oemah Kayu Penanggungan"
          className="h-20 lg:h-24 w-auto object-contain"
        />
      </a>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex items-center gap-12">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNav(link.id)}
            className="
              relative
              text-[#2C1A0E]
              text-sm
              uppercase
              tracking-[0.25em]
              font-medium
              transition-all
              duration-300
              hover:text-[#D4AE3A]
              group
            "
          >
            {link.label}

            <span
              className="
                absolute
                left-0
                -bottom-3
                h-[2px]
                w-0
                bg-[#D4AE3A]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </button>
        ))}
      </nav>

      {/* CTA */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="
          hidden lg:flex
          items-center
          gap-3
          bg-[#D4AE3A]
          text-[#2C1A0E]
          px-8
          py-4
          rounded-xl
          text-sm
          uppercase
          tracking-[0.18em]
          font-semibold
          shadow-lg
          hover:scale-105
          hover:bg-[#E6BF4B]
          transition-all
          duration-300
        "
      >
        <IconWhatsApp />
        Cek Ketersediaan
      </a>

      {/* Mobile Button */}
      <button
        className="lg:hidden text-[#2C1A0E]"
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
      bg-[#F8F5EF]
      transition-all
      duration-500
      ${menuOpen ? "max-h-screen py-8" : "max-h-0"}
    `}
  >
    <div className="px-8 flex flex-col gap-6">

      {navLinks.map((link) => (
        <button
          key={link.id}
          onClick={() => handleNav(link.id)}
          className="
            text-[#2C1A0E]
            text-sm
            uppercase
            tracking-[0.2em]
            border-b
            border-[#D4AE3A]/20
            pb-4
            text-left
          "
        >
          {link.label}
        </button>
      ))}

      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          items-center
          justify-center
          gap-3
          bg-[#D4AE3A]
          text-[#2C1A0E]
          py-4
          rounded-xl
          uppercase
          tracking-[0.18em]
          text-sm
          font-semibold
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
