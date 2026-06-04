import { useState, useEffect } from "react";

// ─── useScrolled ─────────────────────────────────────────────────────────────
// Returns true saat halaman di-scroll lebih dari `threshold` px
export function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}

// ─── useReveal ───────────────────────────────────────────────────────────────
// Mengamati semua elemen [data-reveal] dan menambah class "is-visible"
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ─── scrollToSection ─────────────────────────────────────────────────────────
// Fungsi helper untuk smooth scroll ke section
export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
