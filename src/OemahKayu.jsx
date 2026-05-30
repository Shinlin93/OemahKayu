import { useState, useEffect, useRef } from "react";

import logo from "./logo.png";
import heroImage from "./assets/HERO-OMAH.png";

const LOGO_SRC = logo;
// ─── COLOR TOKENS ───────────────────────────────────────────────────────────
// Gold: #B8962E  |  Cream BG: #F5EFE6  |  Deep Brown: #2C1A0E
// Forest Green: #3A5A3C  |  Walnut: #6B5846  |  Ivory: #FAF6F0

// ─── SVG ICONS ──────────────────────────────────────────────────────────────
const IconCapacity = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="9" r="3.5"/><circle cx="20" cy="9" r="3.5"/>
    <path d="M4 26c0-4.4 3.6-8 8-8h8c4.4 0 8 3.6 8 8"/>
  </svg>
);
const IconPool = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2"/>
    <path d="M4 27c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2"/>
    <path d="M20 8v10M12 12v6"/><circle cx="20" cy="6" r="2"/>
    <path d="M12 10c0-2 2-3 4-3"/>
  </svg>
);
const IconLocation = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 3C11.6 3 8 6.6 8 11c0 6.6 8 18 8 18s8-11.4 8-18c0-4.4-3.6-8-8-8z"/>
    <circle cx="16" cy="11" r="3"/>
  </svg>
);
const IconPrivate = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="15" width="16" height="12" rx="2"/>
    <path d="M11 15v-4a5 5 0 0 1 10 0v4"/>
    <circle cx="16" cy="21" r="1.5"/>
  </svg>
);
const IconMountain = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 28L12 10l5 8 3-4 10 14H2z"/>
    <path d="M20 10l2-4"/>
  </svg>
);
const IconBed = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 20V10m0 0h22v10M3 10v-3a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v3"/>
    <rect x="8" y="12" width="5" height="4" rx="1"/>
    <rect x="15" y="12" width="5" height="4" rx="1"/>
    <path d="M1 22h26v2H1z"/>
  </svg>
);
const IconSofa = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 20v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6"/>
    <path d="M3 16a2 2 0 0 1 2-2v6H3v-4zM23 14a2 2 0 0 1 2 2v4h-2v-6z"/>
    <path d="M5 22h18M8 22v2M20 22v2"/>
    <path d="M7 12V9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/>
  </svg>
);
const IconKitchen = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="20" height="20" rx="2"/>
    <path d="M4 11h20"/>
    <circle cx="9" cy="7.5" r="1.5"/><circle cx="14" cy="7.5" r="1.5"/>
    <rect x="8" y="15" width="12" height="6" rx="1"/>
    <path d="M11 15v6M17 15v6"/>
  </svg>
);
const IconBBQ = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 20l-3 5M20 20l3 5M6 20h16"/>
    <ellipse cx="14" cy="16" rx="8" ry="4"/>
    <path d="M10 12V8M14 12V7M18 12V8"/>
    <path d="M10 8c0-2 2-3 2-5M14 7c0-2 2-3 2-5M18 8c0-2 2-3 2-5"/>
  </svg>
);
const IconWifi = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10C7.5 5.5 20.5 5.5 25 10"/><path d="M6.5 13.5C9.5 10.5 18.5 10.5 21.5 13.5"/>
    <path d="M10 17c2-2 6-2 8 0"/><circle cx="14" cy="21" r="1.5"/>
  </svg>
);
const IconParking = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="20" height="20" rx="2"/>
    <path d="M10 20V8h5a4 4 0 0 1 0 8h-5"/>
  </svg>
);
const IconGarden = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 22V12"/><path d="M14 12C14 12 8 10 8 4c4 0 6 4 6 8z"/>
    <path d="M14 16C14 16 20 14 20 8c-4 0-6 4-6 8z"/>
    <path d="M6 22h16"/>
  </svg>
);
const IconHotWater = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 4c0 3-3 5-3 8a7 7 0 0 0 14 0c0-3-3-5-3-8"/>
    <path d="M14 4v5"/>
  </svg>
);
const IconWhatsApp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const IconClose = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="#B8962E">
    <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5L7 1z"/>
  </svg>
);
const IconPlay = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z"/>
  </svg>
);
const IconChevron = ({ dir = "right" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" style={{ transform: dir === "left" ? "rotate(180deg)" : "none" }}>
    <path d="M7 4l6 6-6 6"/>
  </svg>
);

// ─── WABUTTON FLOATING ───────────────────────────────────────────────────────
const WA_URL = "https://wa.me/6281234567890?text=Halo!%20Saya%20tertarik%20dengan%20Oemah%20Kayu%20Penanggungan.%20Boleh%20saya%20tanya%20ketersediaannya%3F";

// ─── DATA ────────────────────────────────────────────────────────────────────
const quickFacts = [
  { icon: <IconCapacity />, label: "Kapasitas", value: "15–20 Orang" },
  { icon: <IconPool />, label: "Kolam Renang", value: "Pribadi" },
  { icon: <IconLocation />, label: "45 Menit dari", value: "Surabaya" },
  { icon: <IconPrivate />, label: "Privat", value: "Hanya untuk Anda" },
  { icon: <IconMountain />, label: "Udara Pegunungan", value: "Sejuk & Asri" },
];

const facilities = [
  { icon: <IconBed />, title: "6 Kamar Tidur", desc: "AC & Kamar Mandi Dalam" },
  { icon: <IconSofa />, title: "Ruang Keluarga", desc: "Nyaman & Luas" },
  { icon: <IconKitchen />, title: "Dapur Lengkap", desc: "Peralatan Memasak" },
  { icon: <IconBBQ />, title: "Area BBQ", desc: "Outdoor" },
  { icon: <IconWifi />, title: "Wi-Fi Cepat", desc: "Internet Stabil" },
  { icon: <IconParking />, title: "Parkir Luas", desc: "Banyak Mobil" },
  { icon: <IconGarden />, title: "Taman Luas", desc: "Asri & Sejuk" },
  { icon: <IconHotWater />, title: "Air Panas", desc: "24 Jam" },
];

const activities = [
  { emoji: "🏡", title: "Family Gathering", desc: "Kebersamaan tanpa batas" },
  { emoji: "🤝", title: "Reuni", desc: "Kenangan yang terulang indah" },
  { emoji: "🧘", title: "Retreat", desc: "Tenang, fokus, dan menyegarkan" },
  { emoji: "🌿", title: "Staycation", desc: "Liburan singkat yang berkesan" },
  { emoji: "💼", title: "Team Building", desc: "Sinergi tim yang kuat" },
  { emoji: "💐", title: "Arisan", desc: "Momen berkumpul yang istimewa" },
  { emoji: "🎉", title: "Acara Keluarga", desc: "Perayaan yang tak terlupakan" },
  { emoji: "🌟", title: "Corporate Retreat", desc: "Ide segar di alam terbuka" },
];

const testimonials = [
  {
    initials: "KS", color: "#6B5846",
    name: "Keluarga Sutrisno", city: "Surabaya",
    text: "Tempatnya luar biasa! Suasana hijau, rumah kayunya hangat, anak-anak betah, orang tua juga nyaman. Pasti akan balik lagi!",
    type: "Family Gathering"
  },
  {
    initials: "AW", color: "#3A5A3C",
    name: "Arif Wicaksono", city: "Malang",
    text: "Kami reuni 18 orang di sini, semua puas. Fasilitas lengkap, halaman luas, kolam bersih, dan view gunungnya highly recommend!",
    type: "Reuni Keluarga"
  },
  {
    initials: "DB", color: "#B8962E",
    name: "Dewi & Budi", city: "Sidoarjo",
    text: "Cocok untuk yang ingin healing dari rutinitas. Pagi-pagi minum kopi di teras sambil lihat Gunung Penanggungan, damai sekali.",
    type: "Staycation"
  },
];

const faqs = [
  { q: "Berapa kapasitas maksimal tamu?", a: "Oemah Kayu Penanggungan dapat menampung 15 hingga 20 orang dengan nyaman. Tersedia 6 kamar tidur dengan fasilitas lengkap, ruang keluarga luas, dan area outdoor yang lapang." },
  { q: "Apakah kolam renangnya benar-benar privat?", a: "Ya, 100% privat. Kolam renang outdoor hanya untuk Anda dan rombongan selama masa sewa. Tidak ada tamu lain, tidak ada jadwal bersama." },
  { q: "Apakah bisa untuk acara keluarga atau ulang tahun?", a: "Sangat cocok! Area indoor dan outdoor yang luas memberi keleluasaan untuk berbagai perayaan. Anda bebas mendekorasi sesuai tema acara." },
  { q: "Apakah tersedia area BBQ?", a: "Tersedia area BBQ outdoor yang luas. Malam di kaki gunung sangat sempurna untuk menikmati BBQ bersama orang tersayang." },
  { q: "Bagaimana cara pemesanan?", a: "Pemesanan dilakukan melalui WhatsApp. Hubungi kami, informasikan tanggal dan jumlah tamu, dan kami akan segera konfirmasi ketersediaan." },
  { q: "Apakah cocok untuk anak-anak?", a: "Sangat cocok! Halaman luas memberi ruang bermain yang aman. Udara bersih dan suasana alam sangat baik untuk anak-anak." },
];

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function OemahKayuLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [testimIdx, setTestimIdx] = useState(0);
  const [visible, setVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) setVisible(v => ({ ...v, [e.target.dataset.reveal]: true }));
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const navLinks = ["Fasilitas", "Galeri", "Untuk Momen", "Lokasi", "Ulasan", "FAQ"];
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  const revealClass = (key, delay = 0) =>
    `transition-all duration-700 ease-out ${delay ? `delay-[${delay}ms]` : ""} ${visible[key] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  return (
    <div className="font-sans bg-[#F5EFE6] text-[#2C1A0E] overflow-x-hidden" style={{ fontFamily: "'Jost', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500&display=swap');
        .font-serif-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .gold-line::before { content: ''; display: block; width: 48px; height: 1px; background: #B8962E; margin-bottom: 1rem; }
        .gold-line-center::before { content: ''; display: block; width: 48px; height: 1px; background: #B8962E; margin: 0 auto 1rem; }
        .hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .hover-lift:hover { transform: translateY(-4px); }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
        .faq-answer.open { max-height: 200px; }
        .testi-slide { display: flex; transition: transform 0.5s ease; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #F5EFE6; }
        ::-webkit-scrollbar-thumb { background: #B8962E; border-radius: 3px; }
        .bg-hero { background: linear-gradient(135deg, #1A0F07 0%, #2C1A0E 30%, #1A2E1C 60%, #0D1A10 100%); }
        .text-gold { color: #B8962E; }
        .bg-gold { background: #B8962E; }
        .border-gold { border-color: #B8962E;    }
        .bg-forest { background: #3A5A3C; }
        .text-forest { color: #3A5A3C; }
      // `}</style>

      {/* ── NAVBAR ───────────────────────────────────────────────────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#2C1A0E]/95 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={LOGO_SRC} alt="Oemah Kayu Penanggungan" className="h-40 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <button key={link} onClick={() => scrollTo(link.toLowerCase().replace(/ /g, "-"))}
                className="text-[#F5EFE6]/80 hover:text-[#B8962E] text-xs tracking-[0.18em] uppercase font-light transition-colors duration-300">
                {link}
              </button>
            ))}
          </nav>
          {/* CTA */}
          <a href={WA_URL} target="_blank" rel="noopener"
            className="hidden lg:inl
            
            
            FD
             ine-flex items-center gap-2 border border-[#B8962E] text-[#B8962E] hover:bg-[#B8962E] hover:text-[#2C1A0E] px-5 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 font-medium">
            <IconWhatsApp /> Cek Ketersediaan   . ..TTYSI ERDJ X HX
          </a>

          {/* Mobile Hamburger */}
          <button className="lg:hidden text-[#F5EFE6]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-[#2C1A0E] transition-all duration-400 overflow-hidden ${menuOpen ? "max-h-screen py-6" : "max-h-0"}`}>
          <div className="flex flex-col items-center gap-6 px-8">
            {navLinks.map(link => (
              <button key={link} onClick={() => scrollTo(link.toLowerCase().replace(/ /g, "-"))}
                className="text-[#F5EFE6]/80 text-sm tracking-widest uppercase font-light border-b border-[#F5EFE6]/10 pb-4 w-full text-center">
                {link}
              </button>
            ))}
            <a href={WA_URL} target="_blank" rel="noopener"
              className="flex items-center gap-2 bg-[#B8962E] text-[#2C1A0E] px-8 py-3.5 text-xs tracking-widest uppercase font-medium w-full justify-center">
              <IconWhatsApp /> Cek Ketersediaan
            </a>
          </div>           
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
  className="relative min-h-screen flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-32">
          <p className="text-[#B8962E] text-xs tracking-[0.4em] uppercase font-light mb-8 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            Rumah Kayu Jawa di Kaki Gunung
          </p>
          <h1 className="font-serif-display text-[#F5EFE6] leading-[1.15] mb-8" style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)", fontWeight: 400, animationDelay: "0.4s" }}>
            Berkumpul Kembali<br />
            di Tengah Hangatnya<br />
            <em className="text-[#B8962E]">Rumah Kayu</em> dan Sejuknya<br />
            Gunung Penanggungan
          </h1>
          <p className="text-[#F5EFE6]/70 font-light text-base sm:text-lg max-w-xl mx-auto mb-12" style={{ lineHeight: 1.75 }}>
            Tempat privat untuk keluarga besar, reuni, gathering,<br className="hidden sm:block" />
            dan retreat yang tak terlupakan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA_URL} target="_blank" rel="noopener"
              className="hover-lift inline-flex items-center justify-center gap-2.5 bg-[#B8962E] text-[#2C1A0E] px-8 py-4 text-sm tracking-[0.12em] uppercase font-medium transition-all duration-300 hover:bg-[#D4AE3A]">
              <IconWhatsApp /> Cek Ketersediaan Tanggal
            </a>
            <button onClick={() => scrollTo("galeri")}
              className="inline-flex items-center justify-center gap-2 border border-[#F5EFE6]/30 text-[#F5EFE6] hover:border-[#B8962E] hover:text-[#B8962E] px-8 py-4 text-sm tracking-[0.12em] uppercase font-light transition-all duration-300">
              Lihat Galeri ↓
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-[#B8962E] to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── QUICK FACTS ──────────────────────────────────────────────────── */}
      <section className="bg-[#2C1A0E] py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-[#F5EFE6]/5">
            {quickFacts.map((f, i) => (
              <div key={i} className="bg-[#2C1A0E] flex flex-col items-center py-8 px-4 text-center gap-3">
                <div className="text-[#B8962E]">{f.icon}</div>
                <div>
                  <p className="text-[#F5EFE6]/50 text-xs tracking-widest uppercase font-light mb-0.5">{f.label}</p>
                  <p className="text-[#F5EFE6] font-serif-display text-lg font-light">{f.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY TEASER ───────────────────────────────────────────────── */}
      <section id="galeri" className="py-20 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4"
            data-reveal="gallery-hd" ref={el => sectionRefs.current["gallery-hd"] = el}>
            <div className={revealClass("gallery-hd")}>
              <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-light mb-2">Galeri</p>
              <h2 className="font-serif-display text-[#2C1A0E]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}>
                Setiap Sudut<br />Punya Cerita
              </h2>
            </div>
            <button onClick={() => scrollTo("galeri")}
              className="text-[#B8962E] text-sm tracking-wider flex items-center gap-1 hover:gap-3 transition-all duration-300 uppercase font-medium">
              Lihat Semua Galeri <IconChevron />
            </button>
          </div>

          {/* Gallery mosaic — placeholder boxes with rich gradients */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2"
            data-reveal="gallery-grid" ref={el => sectionRefs.current["gallery-grid"] = el}>
            {[
              { label: "Rumah Kayu Jawa", style: { background: "linear-gradient(135deg, #4A2A12 0%, #7B4F2E 50%, #3A5A3C 100%)", gridColumn: "span 2", gridRow: "span 2", minHeight: "340px" } },
              { label: "Kolam Renang Pribadi", style: { background: "linear-gradient(135deg, #1A3020 0%, #3A6040 100%)", minHeight: "165px" } },
              { label: "Area BBQ & Gathering", style: { background: "linear-gradient(135deg, #5C3A1E 0%, #3D2010 100%)", minHeight: "165px" } },
              { label: "Kamar Tidur", style: { background: "linear-gradient(135deg, #2A1A08 0%, #6B5846 100%)", minHeight: "165px" } },
              { label: "Pemandangan Gunung", style: { background: "linear-gradient(160deg, #1A3020 0%, #3A5A3C 100%)", minHeight: "165px" } },
            ].map((g, i) => (
              <div key={i} className={`relative overflow-hidden cursor-pointer group ${revealClass("gallery-grid", i * 80)}`} style={g.style}>
                <div className="absolute inset-0 bg-[#2C1A0E]/0 group-hover:bg-[#2C1A0E]/20 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <p className="font-serif-display text-[#F5EFE6]/80 text-sm italic">{g.label}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <p className="font-serif-display text-[#F5EFE6] text-2xl text-center px-4">{g.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO / STORY ────────────────────────────────────────────────── */}
      <section className="bg-[#2C1A0E] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-0">
          {/* Left: video placeholder */}
          <div className="relative min-h-[400px] lg:min-h-[560px] flex items-center justify-center cursor-pointer group"
            style={{ background: "linear-gradient(160deg, #1A3020 0%, #2C4030 50%, #1A2820 100%)" }}>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse at center, #3A5A3C 0%, transparent 70%)" }} />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full border border-[#B8962E]/40 bg-[#B8962E]/10 flex items-center justify-center text-[#B8962E] group-hover:bg-[#B8962E] group-hover:text-[#2C1A0E] transition-all duration-400">
                <IconPlay />
              </div>
              <p className="text-[#F5EFE6]/40 text-xs tracking-[0.3em] uppercase">Tonton Video</p>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[#B8962E] text-xs tracking-[0.3em] uppercase mb-1">Lihat dari Atas</p>
              <p className="font-serif-display text-[#F5EFE6] text-xl font-light">Keindahan yang Menyambut Anda</p>
            </div>
          </div>

          {/* Right: story text */}
          <div className="bg-[#3A5A3C] flex flex-col justify-center px-10 sm:px-16 py-16 sm:py-20"
            data-reveal="story" ref={el => sectionRefs.current["story"] = el}>
            <div className={revealClass("story")}>
              <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-light mb-4">Tentang Oemah Kayu</p>
              <h2 className="font-serif-display text-[#F5EFE6] mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, lineHeight: 1.25 }}>
                Lebih dari Sekadar<br />Tempat Menginap
              </h2>
              <div className="w-12 h-px bg-[#B8962E] mb-6" />
              <p className="text-[#F5EFE6]/75 font-light leading-relaxed mb-5" style={{ lineHeight: 1.85 }}>
                Oemah Kayu Penanggungan adalah rumah kayu Jawa yang kami bangun dengan hati, untuk menghadirkan momen berkualitas bersama orang-orang tercinta.
              </p>
              <p className="text-[#F5EFE6]/75 font-light leading-relaxed mb-8" style={{ lineHeight: 1.85 }}>
                Di sini, waktu berjalan lebih pelan. Udara gunung yang segar, suara alam yang menenangkan, dan kehangatan rumah kayu yang sesungguhnya — semuanya hadir untuk Anda.
              </p>
              <a href={WA_URL} target="_blank" rel="noopener"
                className="inline-flex items-center gap-1.5 text-[#B8962E] text-sm tracking-wider uppercase hover:gap-3 transition-all duration-300 font-medium">
                Selengkapnya <IconChevron />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACTIVITIES ───────────────────────────────────────────────────── */}
      <section id="untuk-momen" className="py-24 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14"
            data-reveal="act-hd" ref={el => sectionRefs.current["act-hd"] = el}>
            <div className={revealClass("act-hd")}>
              <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-light mb-3">Untuk Momen Berbeda</p>
              <h2 className="font-serif-display text-[#2C1A0E]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}>
                Setiap Momen Berharga Anda
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            data-reveal="act-grid" ref={el => sectionRefs.current["act-grid"] = el}>
            {activities.map((a, i) => (
              <div key={i} className={`group bg-[#F5EFE6] hover:bg-[#2C1A0E] p-6 sm:p-8 transition-all duration-400 cursor-default ${revealClass("act-grid", i * 60)}`}>
                <div className="text-3xl mb-4">{a.emoji}</div>
                <h3 className="font-serif-display text-[#2C1A0E] group-hover:text-[#F5EFE6] text-lg mb-1.5 transition-colors duration-300" style={{ fontWeight: 400 }}>
                  {a.title}
                </h3>
                <p className="text-[#6B5846] group-hover:text-[#F5EFE6]/60 text-xs font-light transition-colors duration-300">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACILITIES ───────────────────────────────────────────────────── */}
      <section id="fasilitas" className="py-24 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14"
            data-reveal="fac-hd" ref={el => sectionRefs.current["fac-hd"] = el}>
            <div className={revealClass("fac-hd")}>
              <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-light mb-3">Fasilitas Lengkap</p>
              <h2 className="font-serif-display text-[#2C1A0E]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}>
                Semua yang Anda Butuhkan
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#2C1A0E]/8"
            data-reveal="fac-grid" ref={el => sectionRefs.current["fac-grid"] = el}>
            {facilities.map((f, i) => (
              <div key={i} className={`group bg-[#F5EFE6] hover:bg-[#2C1A0E] flex flex-col items-center text-center p-8 gap-4 transition-all duration-400 relative ${revealClass("fac-grid", i * 50)}`}>
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#B8962E] transition-all duration-500" />
                <div className="text-[#3A5A3C] group-hover:text-[#B8962E] transition-colors duration-300">{f.icon}</div>
                <div>
                  <p className="font-serif-display text-[#2C1A0E] group-hover:text-[#F5EFE6] text-base mb-1 transition-colors duration-300">{f.title}</p>
                  <p className="text-[#6B5846] group-hover:text-[#F5EFE6]/50 text-xs font-light transition-colors duration-300">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section id="ulasan" className="py-24 bg-[#2C1A0E]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14"
            data-reveal="testi-hd" ref={el => sectionRefs.current["testi-hd"] = el}>
            <div className={revealClass("testi-hd")}>
              <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-light mb-3">Kata Tamu Kami</p>
              <h2 className="font-serif-display text-[#F5EFE6]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}>
                Mereka Sudah Merasakannya
              </h2>
            </div>
          </div>

          {/* Desktop: 3 cards */}
          <div className="hidden sm:grid grid-cols-3 gap-6"
            data-reveal="testi-grid" ref={el => sectionRefs.current["testi-grid"] = el}>
            {testimonials.map((t, i) => (
              <div key={i} className={`bg-[#F5EFE6] p-8 border-t-2 border-[#B8962E] ${revealClass("testi-grid", i * 100)}`}>
                <div className="flex gap-0.5 mb-5">{[...Array(5)].map((_, j) => <IconStar key={j} />)}</div>
                <p className="font-serif-display text-[#2C1A0E] text-base italic leading-relaxed mb-6" style={{ lineHeight: 1.75 }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-[#F5EFE6] text-sm font-medium flex-shrink-0" style={{ background: t.color }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[#2C1A0E] text-sm font-medium">{t.name}</p>
                    <p className="text-[#6B5846] text-xs font-light">{t.type} · {t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: slider */}
          <div className="sm:hidden overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${testimIdx * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 bg-[#F5EFE6] p-7 border-t-2 border-[#B8962E]">
                  <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, j) => <IconStar key={j} />)}</div>
                  <p className="font-serif-display text-[#2C1A0E] text-sm italic leading-relaxed mb-5">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#F5EFE6] text-sm font-medium flex-shrink-0" style={{ background: t.color }}>{t.initials}</div>
                    <div>
                      <p className="text-[#2C1A0E] text-sm font-medium">{t.name}</p>
                      <p className="text-[#6B5846] text-xs font-light">{t.type} · {t.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-5">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimIdx(i)}
                  className={`w-6 h-0.5 transition-all duration-300 ${i === testimIdx ? "bg-[#B8962E]" : "bg-[#F5EFE6]/20"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION ─────────────────────────────────────────────────────── */}
      <section id="lokasi" className="py-24 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div data-reveal="loc-txt" ref={el => sectionRefs.current["loc-txt"] = el}>
              <div className={revealClass("loc-txt")}>
                <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-light mb-3">Lokasi</p>
                <h2 className="font-serif-display text-[#2C1A0E] mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}>
                  Dekat dari Kota,<br />Jauh dari Kebisingan
                </h2>
                <div className="w-12 h-px bg-[#B8962E] mb-6" />
                <p className="text-[#6B5846] font-light leading-relaxed mb-10" style={{ lineHeight: 1.85 }}>
                  Berlokasi di Pandaan, Pasuruan, di kaki Gunung Penanggungan. Mudah dijangkau dari berbagai kota di Jawa Timur, namun terasa seperti dunia yang berbeda.
                </p>
                <div className="flex flex-col gap-6">
                  {[
                    { city: "Dari Surabaya", time: "± 45 menit", via: "Tol Surabaya–Pandaan" },
                    { city: "Dari Sidoarjo", time: "± 35 menit", via: "Tol Sidoarjo–Pandaan" },
                    { city: "Dari Malang", time: "± 40 menit", via: "Tol Pandaan–Malang" },
                  ].map((r, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#EDE0CC] flex items-center justify-center flex-shrink-0 text-[#3A5A3C]">
                        <IconLocation />
                      </div>
                      <div>
                        <p className="font-serif-display text-[#2C1A0E] text-base">{r.city}</p>
                        <p className="text-[#B8962E] text-sm font-medium">{r.time}</p>
                        <p className="text-[#6B5846] text-xs font-light">{r.via}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div data-reveal="loc-map" ref={el => sectionRefs.current["loc-map"] = el}>
              <div className={`${revealClass("loc-map", 200)} bg-[#EDE0CC] min-h-[380px] flex items-center justify-center relative border border-[#2C1A0E]/10`}>
                <div className="absolute top-4 left-4 bg-[#2C1A0E] text-[#F5EFE6] px-3 py-1.5 text-xs tracking-widest uppercase">
                  Pandaan · Pasuruan
                </div>
                <div className="text-center p-8">
                  <div className="text-4xl mb-3 opacity-30">🗺</div>
                  <p className="font-serif-display text-[#6B5846] italic text-sm">
                    Tambahkan Google Maps Embed di sini
                  </p>
                  <p className="text-[#6B5846]/60 text-xs mt-1 font-light">Koordinat lengkap diberikan setelah konfirmasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-24 bg-[#EDE0CC]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14"
            data-reveal="faq-hd" ref={el => sectionRefs.current["faq-hd"] = el}>
            <div className={revealClass("faq-hd")}>
              <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-light mb-3">FAQ</p>
              <h2 className="font-serif-display text-[#2C1A0E]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}>
                Pertanyaan yang Sering Ditanyakan
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-0"
            data-reveal="faq-list" ref={el => sectionRefs.current["faq-list"] = el}>
            {faqs.map((f, i) => (
              <div key={i} className={`border-b border-[#2C1A0E]/10 ${revealClass("faq-list", i * 60)}`}>
                <button className="w-full flex items-center justify-between py-5 text-left gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <h3 className="font-serif-display text-[#2C1A0E] text-base sm:text-lg" style={{ fontWeight: 400 }}>{f.q}</h3>
                  <span className={`w-8 h-8 flex items-center justify-center border border-[#2C1A0E]/20 flex-shrink-0 text-[#B8962E] transition-all duration-300 ${openFaq === i ? "rotate-45 bg-[#B8962E] text-[#F5EFE6] border-[#B8962E]" : ""}`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-400 ease-in-out ${openFaq === i ? "max-h-48 pb-5" : "max-h-0"}`}>
                  <p className="text-[#6B5846] font-light text-sm leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="bg-[#2C1A0E] relative overflow-hidden py-24 text-center"
        data-reveal="cta" ref={el => sectionRefs.current["cta"] = el}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(ellipse at 50% 100%, #3A5A3C 0%, transparent 60%), radial-gradient(ellipse at 50% 0%, #6B5846 0%, transparent 50%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className={`w-px h-16 bg-gradient-to-b from-transparent to-[#B8962E] mx-auto mb-10 ${revealClass("cta")}`} />
          <p className={`text-[#B8962E] text-xs tracking-[0.4em] uppercase font-light mb-6 ${revealClass("cta")}`}>
            Siap Menciptakan Momen Berharga?
          </p>
          <h2 className={`font-serif-display text-[#F5EFE6] mb-6 ${revealClass("cta")}`} style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 300, lineHeight: 1.25 }}>
            Beberapa Momen Terbaik<br />
            dalam Hidup Terjadi Saat<br />
            Kita Berkumpul Bersama<br />
            <em className="text-[#B8962E]">Orang-Orang Tersayang</em>
          </h2>
          <p className={`text-[#F5EFE6]/60 font-light text-base mb-10 ${revealClass("cta")}`} style={{ lineHeight: 1.8 }}>
            Cek ketersediaan tanggal dan dapatkan penawaran terbaik untuk Anda.
          </p>
          <div className={revealClass("cta")}>
            <a href={WA_URL} target="_blank" rel="noopener"
              className="hover-lift inline-flex items-center gap-3 bg-[#B8962E] text-[#2C1A0E] px-10 py-5 text-sm tracking-[0.1em] uppercase font-medium transition-all duration-300 hover:bg-[#D4AE3A]">
              <IconWhatsApp />
              Hubungi Kami via WhatsApp
            </a>
          </div>
          <p className="text-[#F5EFE6]/25 text-xs tracking-[0.2em] uppercase mt-6 font-light">
            Ketersediaan terbatas · Pesan sebelum tanggal Anda terambil
          </p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="bg-[#1A0F07] py-10 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <img src={LOGO_SRC} alt="Oemah Kayu Penanggungan" className="h-16 w-auto object-contain mx-auto mb-4" />
          <p className="text-[#B8962E] text-xs tracking-[0.3em] uppercase font-light mb-6">Pandaan · Pasuruan · Jawa Timur</p>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {navLinks.map(l => (
              <button key={l} onClick={() => scrollTo(l.toLowerCase().replace(/ /g, "-"))}
                className="text-[#F5EFE6]/30 hover:text-[#B8962E] text-xs tracking-widest uppercase font-light transition-colors duration-300">
                {l}
              </button>
            ))}
          </div>
          <div className="w-full h-px bg-[#F5EFE6]/6 mb-6" />
          <p className="text-[#F5EFE6]/20 text-xs font-light">© 2025 Oemah Kayu Penanggungan. Semua hak dilindungi.</p>
        </div>
      </footer>

      {/* ── STICKY WHATSAPP ──────────────────────────────────────────────── */}
      <a href={WA_URL} target="_blank" rel="noopener" aria-label="Chat WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group"
        style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}>
        <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        {/* Tooltip */}
        <span className="absolute right-16 bg-[#2C1A0E] text-[#F5EFE6] text-xs px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Hubungi via WhatsApp
        </span>
      </a>
    </div>
  );
}
