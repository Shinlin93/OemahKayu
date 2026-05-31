// ─── GANTI URL foto di bawah dengan foto properti Anda ──────────────────────
const VIDEO_BG =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80";

export default function Story() {
  return (
    <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>

      {/* ── Kiri: Video thumbnail ── */}
      <div
        className="relative overflow-hidden cursor-pointer group"
        style={{ minHeight: 380 }}
        data-reveal
      >
        <img
          src={VIDEO_BG}
          alt="Pemandangan Gunung Penanggungan"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-[#1A2E1C]/55" />

        {/* Play button */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center gap-3">
          <div className="w-18 h-18 w-[72px] h-[72px] rounded-full border border-[#B8962E]/50 bg-[#B8962E]/10 flex items-center justify-center text-[#B8962E] text-2xl group-hover:bg-[#B8962E] group-hover:text-[#2C1A0E] transition-all duration-400">
            ▶
          </div>
          <p className="text-[#F5EFE6]/45 text-xs tracking-[0.3em] uppercase">
            Tonton Video
          </p>
        </div>

        {/* Caption bawah */}
        <div className="absolute bottom-6 left-6 z-10">
          <p className="text-[#B8962E] text-xs tracking-[0.3em] uppercase mb-1.5">
            Lihat dari Atas
          </p>
          <p
            className="font-serif-display text-[#F5EFE6] font-light"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" }}
          >
            Keindahan yang Menyambut Anda
          </p>
        </div>
      </div>

      {/* ── Kanan: Teks cerita ── */}
      <div
        className="bg-[#3A5A3C] flex flex-col justify-center px-10 sm:px-14 py-16 sm:py-20"
        data-reveal
      >
        <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-light mb-4">
          Tentang Oemah Kayu
        </p>
        <h2
          className="font-serif-display text-[#F5EFE6] mb-5"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, lineHeight: 1.25 }}
        >
          Lebih dari Sekadar<br />Tempat Menginap
        </h2>
        <div className="w-10 h-px bg-[#B8962E] mb-6" />

        <p
          className="text-[#F5EFE6]/75 font-light mb-5"
          style={{ lineHeight: 1.85, fontSize: 14 }}
        >
          Oemah Kayu Penanggungan adalah rumah kayu Jawa yang kami bangun
          dengan hati, untuk menghadirkan momen berkualitas bersama
          orang-orang tercinta.
        </p>
        <p
          className="text-[#F5EFE6]/75 font-light mb-8"
          style={{ lineHeight: 1.85, fontSize: 14 }}
        >
          Di sini, waktu berjalan lebih pelan. Udara gunung yang segar,
          suara alam yang menenangkan, dan kehangatan rumah kayu yang
          sesungguhnya menanti Anda dan keluarga.
        </p>

        <div className="flex flex-col gap-2.5">
          {[
            "Bangun pagi dengan udara gunung yang menyegarkan",
            "Menikmati kopi di teras kayu yang hangat",
            "Anak-anak bermain bebas di halaman luas",
            "Berenang bersama hingga senja tiba",
            "Berkumpul di meja makan hingga larut malam",
          ].map((m, i) => (
            <div key={i} className="flex items-center gap-3 text-[#F5EFE6]/65 text-sm font-light">
              <span className="w-6 h-px bg-[#B8962E] flex-shrink-0" />
              {m}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
