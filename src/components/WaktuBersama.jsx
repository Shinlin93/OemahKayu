import photoMalam from "../assets/tampak-depan-malam.png";
import { IconBed, IconPool, IconBBQ, IconChevron } from "./Icons";
import { scrollToSection } from "../hooks";

const highlights = [
  { icon: <IconBed />,  title: "Kamar Tidur" },
  { icon: <IconPool />, title: "Kolam Renang" },
  { icon: <IconBBQ />,  title: "Area Outdoor" },
];

export default function WaktuBersama() {
  return (
    <section className="bg-[#FAF6F0] py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Kiri: Teks ── */}
          <div data-reveal>
            <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-light mb-3">
              Ruang Untuk
            </p>
            <h2
              className="font-serif-display text-[#2C1A0E] mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.2 }}
            >
              Menikmati Waktu<br />Bersama
            </h2>
            <div className="w-10 h-px bg-[#B8962E] mb-6" />

            <p
              className="text-[#6B5846] font-light mb-9"
              style={{ lineHeight: 1.85, fontSize: 14 }}
            >
              Satu rumah, banyak cerita. Dirancang untuk kenyamanan Anda
              bersama keluarga dan teman.
            </p>

            <button
              onClick={() => scrollToSection("galeri")}
              className="inline-flex items-center gap-2 bg-[#B8962E] text-[#2C1A0E] px-6 py-3.5 text-sm tracking-[0.1em] uppercase font-medium hover:bg-[#D4AE3A] hover:gap-3 transition-all duration-300 cursor-pointer border-none"
            >
              Lihat Galeri
              <IconChevron />
            </button>
          </div>

          {/* ── Kanan: Foto + Glass Card ── */}
          <div className="relative" data-reveal>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={photoMalam}
                alt="Tampak depan Oemah Kayu Penanggungan di malam hari"
                className="w-full object-cover"
                style={{ height: "clamp(420px, 55vw, 620px)" }}
              />
            </div>

            {/* Glass card — melayang di dalam foto */}
            <div
              className="absolute bottom-6 right-6 left-6 sm:left-auto sm:w-64 rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "0 20px 45px rgba(0,0,0,0.25)",
              }}
            >
              <div className="flex flex-col gap-4">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="text-[#F5EFE6] flex-shrink-0">
                      {h.icon}
                    </div>
                    <p className="text-[#F5EFE6] text-sm font-medium">
                      {h.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
