import { accessRoutes } from "../data";
import { IconLocation, IconWhatsApp } from "./Icons";
import { WA_URL } from "../constants";

export default function Location() {
return ( <section id="lokasi" className="py-20 bg-[#F5EFE6]"> <div className="max-w-7xl mx-auto px-6 sm:px-8"> <div className="grid lg:grid-cols-2 gap-16 items-start">

```
      {/* Kiri */}
      <div>
        <p className="text-[#B8962E] text-xs tracking-[0.35em] uppercase font-light mb-3">
          Lokasi
        </p>

        <h2
          className="font-serif-display text-[#2C1A0E] mb-5"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          Dekat dari Kota,
          <br />
          Jauh dari Kebisingan
        </h2>

        <div className="w-10 h-px bg-[#B8962E] mb-6" />

        <p
          className="text-[#6B5846] font-light mb-10"
          style={{ lineHeight: 1.85, fontSize: 14 }}
        >
          Berlokasi di Pandaan, Pasuruan, di kaki Gunung Penanggungan yang
          megah. Mudah dijangkau dari berbagai kota di Jawa Timur, namun
          terasa seperti dunia yang berbeda begitu Anda memasuki gerbangnya.
        </p>

        <div className="flex flex-col gap-6">
          {accessRoutes.map((r, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#EDE0CC] flex items-center justify-center flex-shrink-0 text-[#3A5A3C]">
                <IconLocation />
              </div>

              <div>
                <p className="font-serif-display text-[#2C1A0E] text-base">
                  {r.city}
                </p>

                <p className="text-[#B8962E] text-sm font-medium">
                  {r.time}
                </p>

                <p className="text-[#6B5846] text-xs font-light">
                  {r.via}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kanan */}
      <div className="overflow-hidden border border-[#2C1A0E]/10 bg-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.3101791136205!2d112.696985!3d-7.649757300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d9227af25161%3A0xfc194369f39efe57!2sOmah%20Kayu%20Mbah!5e0!3m2!1sid!2sid!4v1781940382909!5m2!1sid!2sid"
          width="100%"
          height="420"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          title="Lokasi Omah Kayu Mbah"
        />

        <div className="bg-[#2C1A0E] px-5 py-4 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-[#F5EFE6]/60 text-xs font-light">
            Koordinat lengkap diberikan setelah konfirmasi booking
          </p>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B8962E] text-[#2C1A0E] px-4 py-2 text-xs tracking-widest uppercase font-medium whitespace-nowrap hover:bg-[#D4AE3A] transition-colors duration-300"
          >
            <IconWhatsApp />
            Tanya Lokasi
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
```

);
}
