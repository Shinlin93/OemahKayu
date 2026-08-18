import { nearbyPlaces } from "../data";

// ─── Kategori badge: warna solid + teks kontras tinggi (lolos WCAG AA) ───────
// Kuliner      → bg gold (#B8962E) + teks gelap (#2C1A0E)  → kontras ±5.7:1
// Wisata Alam  → bg hijau (#3A5A3C) + teks krem (#F5EFE6)  → kontras ±6.6:1
const categoryStyles = {
  "Kuliner":     "bg-[#B8962E] text-[#2C1A0E]",
  "Wisata Alam": "bg-[#3A5A3C] text-[#F5EFE6]",
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
          {nearbyPlaces.map((p, i) => (
            <a
              key={i}
              href={p.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#FAF6F0] rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <span
                className={`inline-block text-[10px] tracking-widest uppercase font-semibold px-3 py-1.5 rounded-full mb-4 ${categoryStyles[p.category]}`}
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
                📍 Lihat di Maps
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
