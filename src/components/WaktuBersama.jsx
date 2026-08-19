import photoMalam from "../assets/tampak-depan-malam.png";
import { IconBed, IconPool, IconBBQ, IconChevron } from "./Icons";
import { scrollToSection } from "../hooks";

const highlights = [
  { icon: <IconBed />,  title: "3 Kamar Tidur",         desc: "Nyaman & Privat" },
  { icon: <IconPool />, title: "Kolam Renang",           desc: "Pribadi" },
  { icon: <IconBBQ />,  title: "Area BBQ",               desc: "Outdoor" },
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

          {/* ── Kanan: Foto + Floating Card ── */}
          <div className="relative" data-reveal>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={photoMalam}
                alt="Tampak depan Oemah Kayu Penanggungan di malam hari"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "16 / 9" }}
              />
            </div>

            {/* Floating card */}
            <div
              className="absolute -bottom-8 right-4 sm:right-8 bg-white rounded-2xl p-6 w-60 sm:w-64"
              style={{ boxShadow: "0 20px 45px rgba(44,26,14,0.18)" }}
            >
              <div className="flex flex-col gap-5">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="text-[#3A5A3C] flex-shrink-0">
                      {h.icon}
                    </div>
                    <div>
                      <p className="text-[#2C1A0E] text-sm font-medium leading-tight">
                        {h.title}
                      </p>
                      <p className="text-[#6B5846] text-xs font-light">
                        {h.desc}
                      </p>
                    </div>
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
