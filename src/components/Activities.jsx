// ─── IMPORT foto lokal Anda di sini ─────────────────────────────────────────
// Ganti path di bawah sesuai nama file foto yang Anda miliki
// Letakkan foto di folder: src/assets/activities/

import imgJogging    from "../assets/activities/jogging.jpg";
import imgKolam      from "../assets/activities/kolam-renang.jpg";
import imgGunung     from "../assets/activities/pemandangan-gunung.jpg";
import imgSunrise    from "../assets/activities/sunrise.jpg";
import imgBBQ        from "../assets/activities/bbq.jpg";
import imgCafe       from "../assets/activities/cafe.jpg";

// ─── DATA AKTIVITAS ──────────────────────────────────────────────────────────
const activities = [
  {
    img: imgJogging,
    label: "Jogging Pagi",
    title: "Jogging dengan Pemandangan Gunung",
    desc: "Trek pagi hari dengan panorama Gunung Penanggungan yang memukau",
    tag: "± 2 km jalur",
  },
  {
    img: imgKolam,
    label: "Kolam Renang",
    title: "Kolam Renang Pribadi",
    desc: "Berenang sepuasnya tanpa berbagi dengan tamu lain",
    tag: "Private pool",
  },
  {
    img: imgGunung,
    label: "Pemandangan",
    title: "Panorama Gunung Penanggungan",
    desc: "Nikmati pemandangan gunung dari teras atau halaman belakang",
    tag: "View langsung",
  },
  {
    img: imgSunrise,
    label: "Sunrise",
    title: "Sunrise dari Penanggungan",
    desc: "Bangun pagi dan saksikan matahari terbit di balik puncak gunung",
    tag: "Tiap pagi",
  },
];

// ─── AKTIVITAS SEKITAR (tanpa foto) ─────────────────────────────────────────
const nearbyActivities = [
  {
    img: imgBBQ,
    label: "Di Villa",
    title: "BBQ & Gathering",
    desc: "Area BBQ outdoor dengan fasilitas lengkap untuk kumpul keluarga",
    tag: "Dalam villa",
  },
  {
    img: imgCafe,
    label: "Sekitar Villa",
    title: "Cafe & Kuliner",
    desc: "Kafe dan warung makan lokal dengan suasana pegunungan khas Pandaan",
    tag: "± 5–10 menit",
  },
  {
    emoji: "🧘",
    title: "Area Santai & Relaksasi",
    desc: "Hammock, gazebo, dan ruang terbuka untuk melepas penat",
    tag: "Di halaman",
  },
  {
    emoji: "🎱",
    title: "Biliar & Ping Pong",
    desc: "Fasilitas indoor untuk hiburan saat sore atau malam hari",
    tag: "Dalam villa",
  },
  {
    emoji: "🌿",
    title: "Taman & Alam Terbuka",
    desc: "Halaman luas dengan pohon rindang dan udara pegunungan yang segar",
    tag: "Dalam villa",
  },
  {
    emoji: "🏔️",
    title: "Wisata Gunung Penanggungan",
    desc: "Jalur pendakian dan wisata alam di sekitar kawasan gunung",
    tag: "± 15 menit",
  },
];

export default function Activities() {
  return (
    <section id="aktivitas" className="bg-[#FAF6F0] py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Header */}
        <div className="text-center mb-12" data-reveal>
          <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-light mb-3">
            Dekat dengan Alam
          </p>
          <h2
            className="font-serif-display text-[#2C1A0E]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}
          >
            Aktivitas & Pengalaman
          </h2>
          <p className="text-[#6B5846] font-light mt-4 text-sm max-w-xl mx-auto" style={{ lineHeight: 1.8 }}>
            Dari jogging pagi dengan panorama gunung hingga berenang saat senja —
            setiap sudut villa menawarkan pengalaman yang tak terlupakan.
          </p>
        </div>

        {/* Row 1 — Aktivitas utama dengan foto */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3" data-reveal>
          {activities.map((a, i) => (
            <div
              key={i}
              className="relative overflow-hidden cursor-default group"
              style={{ height: 300 }}
            >
              <img
                src={a.img}
                alt={a.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                style={{ transition: "transform 0.7s ease" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/85 via-[#2C1A0E]/20 to-transparent" />

              {/* Tag atas */}
              <div className="absolute top-4 left-4">
                <span className="bg-[#B8962E]/90 text-[#2C1A0E] text-[10px] tracking-widest uppercase px-2.5 py-1 font-medium">
                  {a.tag}
                </span>
              </div>

              {/* Teks bawah */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[#B8962E] text-[10px] tracking-[0.3em] uppercase font-light mb-1">
                  {a.label}
                </p>
                <h3
                  className="font-serif-display text-[#F5EFE6] mb-1.5"
                  style={{ fontSize: 18, fontWeight: 400, lineHeight: 1.2 }}
                >
                  {a.title}
                </h3>
                <p className="text-[#F5EFE6]/65 text-xs font-light leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 — Aktivitas sekitar (mix foto + teks) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3" data-reveal>
          {nearbyActivities.map((a, i) => (
            a.img ? (
              // Card dengan foto
              <div
                key={i}
                className="relative overflow-hidden cursor-default group col-span-1 sm:col-span-1 lg:col-span-2"
                style={{ height: 200 }}
              >
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.7s ease" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.07)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/80 to-[#2C1A0E]/10" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[#B8962E] text-[9px] tracking-widest uppercase font-light">
                    {a.tag}
                  </span>
                  <h3
                    className="font-serif-display text-[#F5EFE6] mt-0.5"
                    style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.2 }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-[#F5EFE6]/60 text-[11px] font-light mt-1">
                    {a.desc}
                  </p>
                </div>
              </div>
            ) : (
              // Card teks
              <div
                key={i}
                className="bg-[#F5EFE6] hover:bg-[#2C1A0E] p-6 transition-all duration-300 cursor-default group col-span-1 sm:col-span-1 lg:col-span-2"
                style={{ minHeight: 200 }}
              >
                <p className="text-3xl mb-3">{a.emoji}</p>
                <span className="text-[#B8962E] text-[9px] tracking-widest uppercase font-light">
                  {a.tag}
                </span>
                <h3
                  className="font-serif-display text-[#2C1A0E] group-hover:text-[#F5EFE6] mt-1 mb-2 transition-colors duration-300"
                  style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.2 }}
                >
                  {a.title}
                </h3>
                <p className="text-[#6B5846] group-hover:text-[#F5EFE6]/55 text-xs font-light transition-colors duration-300 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            )
          ))}
        </div>

      </div>
    </section>
  );
}
