import { useState } from "react";
import { IconMenu, IconClose } from "./Icons";
import { navLinks } from "../data";
import { WA_URL } from "../constants";
import { scrollToSection } from "../hooks";
import { useScrolled } from "../hooks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const scrolled = useScrolled(60);

  const handleNav = (id) => {
    setActiveLink(id);
    scrollToSection(id);
    setMenuOpen(false);
    
    // Reset active state after animation
    setTimeout(() => {
      setActiveLink(null);
    }, 1500);
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
                
                {/* Underline */}
                <span
                  className={`absolute left-0 -bottom-1.5 h-px w-0 group-hover:w-full transition-all duration-300 ${
                    scrolled ? "bg-[#B8962E]" : "bg-white"
                  }`}
                />
                
                {/* Wind Swirl Effect - Active State */}
                {activeLink === link.id && (
                  <span className="absolute inset-0 pointer-events-none">
                    {/* Main spinning circle */}
                    <span 
                      className="absolute inset-[-8px] rounded-full border-2 opacity-70 animate-spin"
                      style={{ 
                        animationDuration: '0.8s',
                        animationTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)',
                        borderColor: scrolled ? '#B8962E' : '#FFFFFF'
                      }}
                    />
                    
                    {/* Secondary orbit - larger and slower */}
                    <span 
                      className="absolute inset-[-18px] rounded-full border opacity-30 animate-spin"
                      style={{ 
                        animationDuration: '1.2s',
                        animationDirection: 'reverse',
                        borderColor: scrolled ? '#B8962E' : '#FFFFFF'
                      }}
                    />
                    
                    {/* Wind dots on cardinal points */}
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="block w-1.5 h-1.5 rounded-full bg-[#B8962E] animate-pulse" />
                    </span>
                    <span className="absolute top-1/2 -right-4 -translate-y-1/2">
                      <span className="block w-1.5 h-1.5 rounded-full bg-[#B8962E] animate-pulse" style={{ animationDelay: '0.2s' }} />
                    </span>
                    <span className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                      <span className="block w-1.5 h-1.5 rounded-full bg-[#B8962E] animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </span>
                    <span className="absolute top-1/2 -left-4 -translate-y-1/2">
                      <span className="block w-1.5 h-1.5 rounded-full bg-[#B8962E] animate-pulse" style={{ animationDelay: '0.6s' }} />
                    </span>
                    
                    {/* Wind swirl particles */}
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[#B8962E] text-[8px] animate-spin" style={{ animationDuration: '0.6s' }}>
                      ⟳
                    </span>
                    <span className="absolute bottom-5 right-1/2 translate-x-1/2 text-[#B8962E] text-[8px] animate-spin" style={{ animationDuration: '0.7s', animationDirection: 'reverse' }}>
                      ⟳
                    </span>
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* CTA - minimalis */}
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
              className="text-[#2C1A0E] text-sm uppercase tracking-[0.2em] border-b border-[#2C1A0E]/10 pb-4 text-left bg-transparent border-none cursor-pointer relative"
            >
              {link.label}
              
              {/* Mobile active indicator */}
              {activeLink === link.id && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#B8962E] animate-ping" />
              )}
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