import imgSekitar1    from "../assets/Sekitar-1.jpeg";
import imgSekitar2    from "../assets/Sekitar-2.jpeg";
import imgKeVilla     from "../assets/Ke-Villa.jpeg";
import imgDepan1      from "../assets/Depan-1.jpeg";
import imgDepan2      from "../assets/Depan-2.jpeg";
import imgDepan3      from "../assets/Depan-3.jpeg";
import imgDepanMalam  from "../assets/Depan-Malam.jpeg";
import imgDepanMalam1 from "../assets/Depan-Malam1.jpeg";

export default function Activities() {
  return (
    <section id="aktivitas" className="bg-[#FAF6F0] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* ── Header ── */}
        <div className="mb-16" data-reveal>
          <p className="text-[#B8962E] text-xs tracking-[0.4em] uppercase font-light mb-3">
            Dekat dengan Alam
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="font-serif-display text-[#2C1A0E]"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", fontWeight: 400, lineHeight: 1.15 }}
            >
              Pagi di Pandaan<br />
              <em style={{ fontWeight: 300, color: "#6B5846" }}>terasa berbeda.</em>
            </h2>
            <p className="text-[#6B5846] text-sm font-light max-w-xs sm:text-right" style={{ lineHeight: 1.85 }}>
              Sawah bertingkat, kabut gunung yang pelan menghilang,
              dan udara yang membuat Anda ingin berlama-lama di luar.
            </p>
          </div>
          <div className="w-16 h-px bg-[#B8962E] mt-8" />
        </div>

        {/* ══════════════════════════════════════════
            BLOK 1 — Panorama Alam (editorial mosaic)
        ══════════════════════════════════════════ */}
        <div className="mb-4" data-reveal>
          <p className="text-[#B8962E] text-[10px] tracking-[0.45em] uppercase font-light mb-5">
            01 · Panorama Alam
          </p>

          {/* Mosaic: foto besar kiri + 2 foto kanan vertikal */}
          <div className="flex gap-3" style={{ height: 480 }}>

            {/* Foto besar — Sekitar-2 (sawah luas + gunung) */}
            <div className="relative overflow-hidden flex-[1.6] group">
              <img
                src={imgSekitar2}
                alt="Panorama sawah dan Gunung Penanggungan"
                className="w-full h-full object-cover"
                style={{ transition: "transform 0.8s ease", objectPosition: "center 30%" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F07]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-7">
                <h3 className="font-serif-display text-[#F5EFE6] mb-1" style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)", fontWeight: 400, lineHeight: 1.2 }}>
                  Gunung Penanggungan<br />dari Halaman Depan
                </h3>
                <p className="text-[#F5EFE6]/65 text-xs font-light mt-2" style={{ lineHeight: 1.7 }}>
                  Pemandangan yang menyambut setiap pagi Anda.
                </p>
              </div>
            </div>

            {/* Kolom kanan — 2 foto bertumpuk */}
            <div className="flex flex-col gap-3 flex-1">
              <div className="relative overflow-hidden flex-1 group">
                <img
                  src={imgSekitar1}
                  alt="Sawah pagi hari sekitar villa"
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.8s ease", objectPosition: "center 40%" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F07]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <span className="text-[#B8962E] text-[9px] tracking-widest uppercase font-light block mb-1">Sekitar villa</span>
                  <p className="font-serif-display text-[#F5EFE6] text-sm italic">Sawah & Langit Pagi</p>
                </div>
              </div>
              <div className="relative overflow-hidden flex-1 group">
                <img
                  src={imgDepan1}
                  alt="View gunung dari depan villa"
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.8s ease", objectPosition: "center 50%" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F07]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <span className="text-[#B8962E] text-[9px] tracking-widest uppercase font-light block mb-1">View langsung</span>
                  <p className="font-serif-display text-[#F5EFE6] text-sm italic">Petak Hijau & Gunung</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════
            BLOK 2 — Jogging & Jalan Pagi (horizontal scroll feel)
        ══════════════════════════════════════════ */}
        <div className="mb-4" data-reveal>
          <p className="text-[#B8962E] text-[10px] tracking-[0.45em] uppercase font-light mb-5 mt-10">
            02 · Jogging & Jalan Pagi
          </p>

          {/* 3 foto horizontal — tinggi bervariasi dengan offset */}
          <div className="flex gap-3 items-end" style={{ height: 380 }}>

            {/* Foto 1 — tinggi penuh */}
            <div className="relative overflow-hidden group flex-1" style={{ height: "100%" }}>
              <img
                src={imgKeVilla}
                alt="Jalur jogging menuju villa"
                className="w-full h-full object-cover"
                style={{ transition: "transform 0.8s ease", objectPosition: "center 40%" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F07]/75 via-[#1A0F07]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block bg-[#B8962E] text-[#2C1A0E] text-[9px] tracking-widest uppercase px-2.5 py-1 mb-3 font-medium">± 2 km jalur</span>
                <h3 className="font-serif-display text-[#F5EFE6]" style={{ fontSize: "1.25rem", fontWeight: 400, lineHeight: 1.25 }}>
                  Jalur Jogging<br />Menuju Villa
                </h3>
                <p className="text-[#F5EFE6]/60 text-xs mt-2 font-light" style={{ lineHeight: 1.7 }}>
                  Jalan desa yang sepi, rindang, dan segar di pagi hari.
                </p>
              </div>
            </div>

            {/* Foto 2 — sedikit lebih pendek (naik dari bawah) */}
            <div className="relative overflow-hidden group flex-1" style={{ height: "85%" }}>
              <img
                src={imgDepan2}
                alt="Jalan desa pagi hari dengan gunung"
                className="w-full h-full object-cover"
                style={{ transition: "transform 0.8s ease", objectPosition: "center 30%" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F07]/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-[#B8962E] text-[9px] tracking-widest uppercase font-light block mb-2">Pagi · Desa Pandaan</span>
                <h3 className="font-serif-display text-[#F5EFE6]" style={{ fontSize: "1.15rem", fontWeight: 400, lineHeight: 1.25 }}>
                  Desa yang Tenang
                </h3>
              </div>
            </div>

            {/* Foto 3 — paling pendek, muncul dari bawah */}
            <div className="relative overflow-hidden group flex-1" style={{ height: "70%" }}>
              <img
                src={imgDepan3}
                alt="Golden hour di jalur desa"
                className="w-full h-full object-cover"
                style={{ transition: "transform 0.8s ease", objectPosition: "center 20%" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F07]/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-[#B8962E] text-[9px] tracking-widest uppercase font-light block mb-2">Golden hour</span>
                <h3 className="font-serif-display text-[#F5EFE6]" style={{ fontSize: "1.15rem", fontWeight: 400, lineHeight: 1.25 }}>
                  Cahaya Pagi Keemasan
                </h3>
              </div>
            </div>

          </div>

          {/* Caption naratif di bawah */}
          <p className="text-[#6B5846] text-sm font-light mt-5 max-w-lg" style={{ lineHeight: 1.85 }}>
            Keluar pagi-pagi, sebelum jalanan ramai. Suara ayam, kabut tipis, 
            dan gunung yang perlahan muncul dari balik awan — pengalaman yang 
            sulit didapat di kota.
          </p>
        </div>

        {/* ══════════════════════════════════════════
            BLOK 3 — Malam di Villa
        ══════════════════════════════════════════ */}
        <div data-reveal>
          <p className="text-[#B8962E] text-[10px] tracking-[0.45em] uppercase font-light mb-5 mt-10">
            03 · Malam di Villa
          </p>

          <div className="flex gap-3" style={{ height: 320 }}>

            {/* Teks narasi */}
            <div className="flex flex-col justify-between bg-[#2C1A0E] p-8 flex-[0.8]">
              <div>
                <h3
                  className="font-serif-display text-[#F5EFE6] mb-4"
                  style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)", fontWeight: 400, lineHeight: 1.3 }}
                >
                  Malam yang hangat<br />
                  <em className="text-[#B8962E]" style={{ fontWeight: 300 }}>di rumah kayu Jawa.</em>
                </h3>
                <p className="text-[#F5EFE6]/60 text-xs font-light" style={{ lineHeight: 1.85 }}>
                  Setelah seharian beraktivitas, kembali ke kehangatan 
                  kayu jati, lampu temaram, dan suara malam pegunungan 
                  yang menenangkan.
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                {["Ping Pong", "BBQ Area", "Biliar", "Teras Kayu"].map((f, i) => (
                  <span key={i} className="text-[#B8962E] text-[9px] tracking-widest uppercase font-light border-b border-[#B8962E]/30 pb-0.5">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Foto malam 1 */}
            <div className="relative overflow-hidden flex-1 group">
              <img
                src={imgDepanMalam}
                alt="Suasana malam villa kayu Jawa"
                className="w-full h-full object-cover"
                style={{ transition: "transform 0.8s ease", objectPosition: "center center" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div className="absolute inset-0 bg-[#1A0F07]/30" />
            </div>

            {/* Foto malam 2 */}
            <div className="relative overflow-hidden flex-1 group">
              <img
                src={imgDepanMalam1}
                alt="Ping pong dan halaman villa malam hari"
                className="w-full h-full object-cover"
                style={{ transition: "transform 0.8s ease", objectPosition: "center center" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div className="absolute inset-0 bg-[#1A0F07]/30" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="font-serif-display text-[#F5EFE6] italic text-sm">
                  Halaman & Ping Pong
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ── Fasilitas tambahan (teks kecil, bukan card kotak) ── */}
        <div className="mt-10 pt-8 border-t border-[#2C1A0E]/8 flex flex-wrap gap-x-10 gap-y-3" data-reveal>
          {[
            { emoji: "🏊", label: "Kolam Renang Pribadi" },
            { emoji: "🎱", label: "Meja Biliar" },
            { emoji: "🏓", label: "Ping Pong Outdoor" },
            { emoji: "🔥", label: "Area BBQ" },
            { emoji: "🌿", label: "Taman & Halaman Luas" },
            { emoji: "🥾", label: "Wisata Gunung Penanggungan · ± 15 mnt" },
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span style={{ fontSize: "1.1rem" }}>{f.emoji}</span>
              <span className="text-[#6B5846] text-xs font-light tracking-wide">{f.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
