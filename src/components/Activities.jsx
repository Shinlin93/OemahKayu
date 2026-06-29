import imgSekitar1   from "../assets/Sekitar-1.jpeg";   // sawah + gunung (pagi cerah)
import imgSekitar2   from "../assets/Sekitar-2.jpeg";   // sawah luas + gunung penanggungan
import imgKeVilla    from "../assets/Ke-Villa.jpeg";    // jalan menuju villa (jogging route)
import imgDepan1     from "../assets/Depan-1.jpeg";     // panorama gunung dari depan villa
import imgDepan2     from "../assets/Depan-2.jpeg";     // jalan desa + gunung pagi
import imgDepan3     from "../assets/Depan-3.jpeg";     // jalan desa + gunung sudut lain
import imgDepanMalam  from "../assets/Depan-Malam.jpeg";  // villa malam hari (suasana hangat)
import imgDepanMalam1 from "../assets/Depan-Malam1.jpeg"; // villa malam + meja ping pong

// ─── DATA AKTIVITAS UTAMA (Row 1 — 4 card dengan foto) ──────────────────────
const activities = [
  {
    img: imgKeVilla,
    label: "Jogging Pagi",
    title: "Jogging dengan Pemandangan Gunung",
    desc: "Jalur desa yang sepi dengan panorama Gunung Penanggungan di ujung jalan",
    tag: "± 2 km jalur",
  },
  {
    img: imgSekitar1,
    label: "Alam Terbuka",
    title: "Sawah & Pemandangan Pagi",
    desc: "Hamparan sawah hijau dengan latar gunung yang memukau saat pagi hari",
    tag: "Sekitar villa",
  },
  {
    img: imgSekitar2,
    label: "Panorama",
    title: "Panorama Gunung Penanggungan",
    desc: "Pemandangan khas pedesaan Jawa — sawah luas, gunung megah, langit biru",
    tag: "View langsung",
  },
  {
    img: imgDepan1,
    label: "Eksplorasi Pagi",
    title: "Jalan Pagi di Desa Pandaan",
    desc: "Udara segar, suasana desa yang tenang, dan panorama gunung yang menyapa",
    tag: "Gratis · Tiap pagi",
  },
];

// ─── AKTIVITAS SEKITAR (Row 2 — mix foto + teks) ─────────────────────────────
const nearbyActivities = [
  {
    img: imgDepan2,
    label: "Sekitar Villa",
    title: "Menyusuri Desa",
    desc: "Jalan kaki santai menyusuri desa dengan sawah hijau dan gunung sebagai latar",
    tag: "± 1–2 km",
  },
  {
    img: imgDepanMalam,
    label: "Malam di Villa",
    title: "Kehangatan Malam Kayu Jawa",
    desc: "Suasana malam yang hangat dan intim di rumah kayu Jawa yang autentik",
    tag: "Dalam villa",
  },
  {
    img: imgDepanMalam1,
    label: "Dalam Villa",
    title: "Ping Pong & Area Outdoor",
    desc: "Meja ping pong outdoor di halaman villa untuk seru-seruan malam hari",
    tag: "Fasilitas gratis",
  },
  {
    img: imgDepan3,
    label: "Pagi Hari",
    title: "Golden Hour Pegunungan",
    desc: "Cahaya pagi keemasan menyinari gunung — momen terbaik untuk foto",
    tag: "Tiap pagi",
  },
  {
    emoji: "🏊",
    title: "Kolam Renang Pribadi",
    desc: "Berenang sepuasnya tanpa berbagi — kolam eksklusif hanya untuk rombongan Anda",
    tag: "Private pool",
  },
  {
    emoji: "🎱",
    title: "Biliar Indoor",
    desc: "Fasilitas meja biliar di dalam villa untuk hiburan sore hingga malam",
    tag: "Dalam villa",
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
          <p
            className="text-[#6B5846] font-light mt-4 text-sm max-w-xl mx-auto"
            style={{ lineHeight: 1.8 }}
          >
            Dari jogging pagi di jalur desa dengan panorama Gunung Penanggungan,
            hingga malam hangat di teras kayu — setiap momen terasa istimewa di sini.
          </p>
        </div>

        {/* Row 1 — 4 aktivitas utama dengan foto */}
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
                className="w-full h-full object-cover"
                style={{ transition: "transform 0.7s ease" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/85 via-[#2C1A0E]/20 to-transparent" />

              {/* Tag */}
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

        {/* Row 2 — 6 card (4 foto + 2 teks) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3" data-reveal>
          {nearbyActivities.map((a, i) => (
            a.img ? (
              <div
                key={i}
                className="relative overflow-hidden cursor-default group col-span-1 lg:col-span-2"
                style={{ height: 200 }}
              >
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.7s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.07)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
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
              <div
                key={i}
                className="bg-[#F5EFE6] hover:bg-[#2C1A0E] p-6 transition-all duration-300 cursor-default group col-span-1 lg:col-span-2"
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
