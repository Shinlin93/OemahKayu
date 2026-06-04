// ─── GANTI URL INI dengan foto properti Anda ────────────────────────────────
import { IconChevron } from "./Icons";

import parkir from "../assets/parkir.jpeg";
import belakang1 from "../assets/belakang-1.jpeg";
import belakang2 from "../assets/belakang-2.jpeg";
import bilyard from "../assets/bilyard.jpeg";
import pingpong from "../assets/pingpong.jpeg";

const galleryItems = [
  {
    label: "Oemah Kayu Penanggungan",
    img: parkir,
    span: "col-span-2 row-span-2",
    height: "340px",
  },
  {
    label: "Halaman Belakang",
    img: belakang1,
    height: "165px",
  },
  {
    label: "Area BBQ & Gathering",
    img: belakang2,
    height: "165px",
  },
  {
    label: "Meja Biliar",
    img: bilyard,
    height: "165px",
  },
  {
    label: "Meja Ping Pong",
    img: pingpong,
    height: "165px",
  },
];

export default function Gallery() {
  return (
    <section id="galeri" className="py-20 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4"
          data-reveal
        >
          <div>
            <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-light mb-2">
              Galeri
            </p>

            <h2
              className="font-serif-display text-[#2C1A0E]"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
              }}
            >
              Setiap Sudut
              <br />
              Punya Cerita
            </h2>
          </div>

          <span className="text-[#B8962E] text-sm tracking-wider flex items-center gap-1 uppercase font-medium cursor-pointer hover:gap-3 transition-all duration-300">
            Lihat Semua Galeri <IconChevron />
          </span>
        </div>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-2"
          data-reveal
        >
          {galleryItems.map((g, i) => (
            <div
              key={i}
              className={`relative overflow-hidden cursor-pointer group ${g.span ?? ""}`}
              style={{ minHeight: g.height }}
            >
              <img
                src={g.img}
                alt={g.label}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
                style={{ minHeight: g.height }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/70 to-transparent" />

              {/* Label */}
              <p className="absolute bottom-3 left-4 font-serif-display text-[#F5EFE6] text-sm italic z-10">
                {g.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}