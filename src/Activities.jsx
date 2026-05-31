import { activities } from "../data";

// ─── GANTI URL foto di bawah dengan foto properti Anda ──────────────────────
const activityImages = [
  "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=500&q=80", // Family Gathering
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80", // Reuni
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&q=80", // Retreat
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&q=80", // Staycation
  null, // Team Building  — tanpa foto (card biasa)
  null, // Arisan
  null, // Acara Keluarga
  null, // Corporate Retreat
];

export default function Activities() {
  const withPhoto = activities.slice(0, 4);
  const noPhoto   = activities.slice(4);

  return (
    <section id="momen" className="bg-[#FAF6F0] py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Header */}
        <div className="text-center mb-12" data-reveal>
          <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-light mb-3">
            Untuk Momen Berbeda
          </p>
          <h2
            className="font-serif-display text-[#2C1A0E]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400 }}
          >
            Setiap Momen Berharga Anda
          </h2>
        </div>

        {/* Row 1 — dengan foto */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4" data-reveal>
          {withPhoto.map((a, i) => (
            <div
              key={i}
              className="relative overflow-hidden cursor-default group"
              style={{ height: 280 }}
            >
              <img
                src={activityImages[i]}
                alt={a.title}
                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/80 to-[#2C1A0E]/10" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-2xl mb-2">{a.emoji}</p>
                <h3
                  className="font-serif-display text-[#F5EFE6] mb-1"
                  style={{ fontSize: 20, fontWeight: 400 }}
                >
                  {a.title}
                </h3>
                <p className="text-[#F5EFE6]/60 text-xs font-light">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 — card teks */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {noPhoto.map((a, i) => (
            <div
              key={i}
              className="bg-[#F5EFE6] hover:bg-[#2C1A0E] p-7 transition-all duration-300 cursor-default group"
              data-reveal
            >
              <p className="text-3xl mb-4">{a.emoji}</p>
              <h3
                className="font-serif-display text-[#2C1A0E] group-hover:text-[#F5EFE6] mb-1.5 transition-colors duration-300"
                style={{ fontSize: 20, fontWeight: 400 }}
              >
                {a.title}
              </h3>
              <p className="text-[#6B5846] group-hover:text-[#F5EFE6]/55 text-xs font-light transition-colors duration-300">
                {a.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
