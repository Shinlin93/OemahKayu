import Video1 from "../assets/Video1.mp4";

export default function VideoSection() {
return ( <section className="relative h-[85vh] overflow-hidden"> <video
     autoPlay
     muted
     loop
     playsInline
     className="absolute inset-0 w-full h-full object-cover"
   > <source src={Video1} type="video/mp4" /> </video>

```
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
    <p className="text-[#D4AE3A] uppercase tracking-[0.45em] text-xs mb-6">
      Video Drone
    </p>

    <h2
      className="font-serif-display text-white mb-6"
      style={{
        fontSize: "clamp(2.5rem, 5vw, 5rem)",
        fontWeight: 400,
        lineHeight: 1.1,
      }}
    >
      Rasakan Suasana
      <br />
      Oemah Kayu Penanggungan
    </h2>

    <div className="w-24 h-px bg-[#D4AE3A] mb-6" />

    <p
      className="text-white/80 max-w-2xl"
      style={{
        lineHeight: 1.8,
        fontSize: "1rem",
      }}
    >
      Udara pegunungan yang sejuk, panorama alam yang menenangkan,
      dan kehangatan rumah kayu yang dirancang untuk menciptakan
      momen tak terlupakan bersama keluarga dan sahabat.
    </p>
  </div>
</section>
```

);
}
