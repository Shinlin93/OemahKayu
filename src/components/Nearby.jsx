import { nearbyPlaces } from "../data";

export default function Nearby() {
  return (
    <section id="sekitar" className="bg-[#2C1A0E] py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Header */}
        <div className="text-center mb-14" data-reveal>
          <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-light mb-3">
            Sekitar Villa
          </p>
          <h2
            className="font-serif-display text-[#F5EFE6]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}
          >
            Kuliner & Wisata Terdekat
          </h2>
          <p
            className="text-[#F5EFE6]/50 text-sm font-light mt-4 max-w-xl mx-auto"
            style={{ lineHeight: 1.85 }}
          >
            Tak perlu jauh-jauh mencari makan atau spot healing — semuanya
            sudah ada di sekitar Oemah Kayu Penanggungan.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          data-reveal
        >
          {nearbyPlaces.map((p, i) => (
            <a
              key={i}
              href={p.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#3A2A18] hover:bg-[#4A3520] border border-[#B8962E]/15 hover:border-[#B8962E]/40 p-6 transition-all duration-300"
            >
              <span className="inline-block text-[#B8962E] text-[10px] tracking-widest uppercase font-light border border-[#B8962E]/30 px-2.5 py-1 mb-4">
                {p.category}
              </span>

              <h3
                className="font-serif-display text-[#F5EFE6] mb-2"
                style={{ fontSize: 18, fontWeight: 400, lineHeight: 1.3 }}
              >
                {p.name}
              </h3>

              <p
                className="text-[#F5EFE6]/50 text-xs font-light mb-6"
                style={{ lineHeight: 1.75 }}
              >
                {p.desc}
              </p>

              <span className="inline-flex items-center gap-1.5 text-[#B8962E] text-xs tracking-widest uppercase font-light group-hover:gap-2.5 transition-all duration-300">
                📍 Lihat di Maps
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
