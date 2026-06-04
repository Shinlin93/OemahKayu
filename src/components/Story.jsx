import video1 from "../assets/video1.mp4";

export default function Story() {
  return (
    <section
      className="grid lg:grid-cols-2"
      id="tentang"
    >
      {/* VIDEO SIDE */}
      <div
        className="relative overflow-hidden"
        style={{ minHeight: 500 }}
        data-reveal
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video1} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1A2E1C]/45" />

        {/* Caption */}
        <div className="absolute bottom-8 left-8 z-10">
          <p className="text-[#D4AE3A] text-xs tracking-[0.35em] uppercase mb-2">
            Video Drone
          </p>

          <h3
            className="font-serif-display text-[#F5EFE6]"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 300,
            }}
          >
            Keindahan Oemah Kayu
            <br />
            dari Udara
          </h3>
        </div>
      </div>

      {/* CONTENT SIDE */}
      <div
        className="bg-[#3A5A3C] flex flex-col justify-center px-10 lg:px-16 py-16 lg:py-24"
        data-reveal
      >
        <p className="text-[#D4AE3A] text-xs tracking-[0.35em] uppercase font-light mb-4">
          Tentang Oemah Kayu
        </p>

        <h2
          className="font-serif-display text-[#F5EFE6] mb-6"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          Lebih dari Sekadar
          <br />
          Tempat Menginap
        </h2>

        <div className="w-12 h-px bg-[#D4AE3A] mb-8" />

        <p
          className="text-[#F5EFE6]/80 font-light mb-5"
          style={{
            lineHeight: 1.9,
            fontSize: "15px",
          }}
        >
          Oemah Kayu Penanggungan adalah rumah kayu Jawa yang
          kami bangun dengan hati untuk menghadirkan pengalaman
          menginap yang hangat, tenang, dan penuh kebersamaan.
        </p>

        <p
          className="text-[#F5EFE6]/80 font-light mb-10"
          style={{
            lineHeight: 1.9,
            fontSize: "15px",
          }}
        >
          Berada di kaki Gunung Penanggungan, Oemah Kayu menawarkan
          udara pegunungan yang segar, pemandangan yang menenangkan,
          serta ruang yang sempurna untuk berkumpul bersama keluarga,
          sahabat, maupun rekan kerja.
        </p>

        <div className="flex flex-col gap-4">
          {[
            "Udara pegunungan yang sejuk dan menyegarkan",
            "Kolam renang pribadi dengan panorama alam",
            "Area gathering dan barbeque yang nyaman",
            "Suasana tenang jauh dari hiruk pikuk kota",
            "Cocok untuk keluarga, reuni, dan retreat",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-[#F5EFE6]/75"
            >
              <span className="w-6 h-px bg-[#D4AE3A] flex-shrink-0" />
              <span className="text-sm font-light">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}