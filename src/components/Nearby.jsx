import { nearbyPlaces } from "../data";

// ─── Ikon besar untuk banner ilustratif tiap kategori ────────────────────────
const IconForkKnife = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 2v7a2 2 0 0 0 4 0V2M9 9v13" />
    <path d="M17 2c-1.6 0-3 1.6-3 4.5S15.4 11 17 11v11" />
  </svg>
);

const IconMountainPeak = () => (
  <svg width="38" height="38" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 28L12 10l5 8 3-4 10 14H2z" />
    <path d="M20 10l2-4" />
  </svg>
);

const MiniPin = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.3" />
  </svg>
);

// ─── Visual per kategori: gradient banner + ikon + warna badge ──────────────
// Semua kombinasi teks/badge dicek kontras WCAG AA (≥4.5:1)
const categoryVisuals = {
  "Kuliner": {
    gradient: "from-[#C9A227] to-[#7A611B]",
    icon: <IconForkKnife />,
    badge: "bg-[#B8962E] text-[#2C1A0E]",
  },
  "Wisata Alam": {
    gradient: "from-[#3F6142] to-[#1C2E1E]",
    icon: <IconMountainPeak />,
    badge: "bg-[#3A5A3C] text-[#F5EFE6]",
  },
};

export default function Nearby() {
  return (
    <section id="sekitar" className="bg-[#3A5A3C] py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Header */}
        <div className="text-center mb-14" data-reveal>
          <p className="text-[#F5EFE6] text-xs tracking-[0.35em] uppercase font-medium mb-3">
            Sekitar Villa
          </p>
          <h2
            className="font-serif-display text-[#F5EFE6]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}
          >
            Kuliner & Wisata Terdekat
          </h2>
          <p
            className="text-[#F5EFE6] text-sm font-light mt-4 max-w-xl mx-auto"
            style={{ lineHeight: 1.85, opacity: 0.92 }}
          >
            Tak perlu jauh-jauh mencari makan atau spot healing — semuanya
            sudah ada di sekitar Oemah Kayu Penanggungan.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-reveal
        >
          {nearbyPlaces.map((p, i) => {
            const visual = categoryVisuals[p.category];
            return (
              <a
                key={i}
                href={p.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#FAF6F0] rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Banner ilustratif — gradient + ikon besar + pola titik halus.
                    Bukan foto asli tempat (menghindari isu hak cipta foto Google). */}
                <div
                  className={`relative h-28 flex items-center justify-center bg-gradient-to-br ${visual.gradient} overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 opacity-[0.15]"
                    style={{
                      backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                  <div className="relative text-white/95 group-hover:scale-110 transition-transform duration-300">
                    {visual.icon}
                  </div>
                </div>

                <div className="p-6">
                  <span
                    className={`inline-block text-[10px] tracking-widest uppercase font-semibold px-3 py-1.5 rounded-full mb-4 ${visual.badge}`}
                  >
                    {p.category}
                  </span>

                  <h3
                    className="font-serif-display text-[#2C1A0E] mb-2"
                    style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.3 }}
                  >
                    {p.name}
                  </h3>

                  <p
                    className="text-[#6B5846] text-xs font-normal mb-6"
                    style={{ lineHeight: 1.75 }}
                  >
                    {p.desc}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-[#3A5A3C] text-xs tracking-widest uppercase font-semibold group-hover:gap-2.5 transition-all duration-300">
                    <MiniPin />
                    Lihat di Maps
                  </span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
