import { useEffect, useState } from "react"
import "./App.css"

const photos = [
  { src: "/src/assets/hero-depan.webp", alt: "Oemah Kayu surrounded by green trees" },
  { src: "/src/assets/Depan-2.webp", alt: "The wooden house viewed from the garden" },
  { src: "/src/assets/belakang-1.webp", alt: "The back of Oemah Kayu in nature" },
  { src: "/src/assets/halaman-belakang.jpeg", alt: "A quiet outdoor space behind the house" },
  { src: "/src/assets/bilyard.webp", alt: "Billiard room inside Oemah Kayu" },
  { src: "/src/assets/pingpong.webp", alt: "Table tennis area" },
]

const whatsapp = "https://wa.me/6285155266669?text=Halo%20Oemah%20Kayu,%20saya%20ingin%20menanyakan%20ketersediaan%20villa."

function Arrow() { return <span aria-hidden="true">↗</span> }
function SectionLabel({ children }) { return <p className="section-label"><span />{children}</p> }

export default function OemahKayuLanding() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const onKey = (event) => event.key === "Escape" && setLightbox(null)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Oemah Kayu home"><span>Oemah</span> Kayu</a>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#story" onClick={() => setMenuOpen(false)}>The story</a>
            <a href="#house" onClick={() => setMenuOpen(false)}>The house</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="#visit" onClick={() => setMenuOpen(false)}>Location</a>
            <a className="nav-mobile-cta" href={whatsapp}>WhatsApp <Arrow /></a>
          </div>
          <a className="nav-cta" href={whatsapp}>Chat with us <Arrow /></a>
          <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i /><i /></button>
        </nav>
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src="/src/assets/hero-depan.webp" alt="Oemah Kayu, a wooden retreat in the green highlands" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Private wooden retreat · Cisarua, Bogor</p>
          <h1>A place to<br /><em>slow down.</em></h1>
          <p className="hero-copy">A warm wooden home tucked into the green hills. Come for the quiet, stay for the moments together.</p>
          <a className="button button-light" href="#story">Explore Oemah Kayu <Arrow /></a>
        </div>
        <div className="hero-meta"><span>06°41&apos;S / 106°57&apos;E</span><span>Scroll to wander ↓</span></div>
      </section>

      <section className="intro section-pad" id="story">
        <div className="intro-title"><SectionLabel>01 — The feeling</SectionLabel><h2>More than a stay.<br /><em>A change of pace.</em></h2></div>
        <div className="intro-copy"><p className="lead">Oemah Kayu is made for unhurried days: morning light through the trees, long conversations after dinner, and the kind of silence you can feel.</p><p>Built with the warmth of wood and an open view toward nature, this is a place to gather, breathe, and make room for what matters.</p><a className="text-link" href="#house">Discover the house <Arrow /></a></div>
      </section>

      <section className="story-band" aria-label="Oemah Kayu atmosphere"><div className="story-image"><img src="/src/assets/Depan-1.webp" alt="Wooden architecture and tropical greenery at Oemah Kayu" /></div><div className="story-note"><span className="quote-mark">“</span><p>There is something about wood, fresh air, and being together that makes time feel different.</p><span className="note-line">— The spirit of Oemah Kayu</span></div></section>

      <section className="house section-pad" id="house">
        <div className="house-heading"><SectionLabel>02 — The house</SectionLabel><h2>Come in,<br /><em>make yourself at home.</em></h2><p>Every corner is designed to feel open, easy, and connected to the landscape outside.</p></div>
        <div className="house-feature"><img src="/src/assets/Depan-3.webp" alt="Front terrace of Oemah Kayu" /><div className="image-caption"><span>01</span><p>The house<br /><small>Wood, light, and open air</small></p></div></div>
        <div className="house-detail"><img src="/src/assets/belakang-2.webp" alt="Natural surroundings at Oemah Kayu" /><div><span>02</span><p>Room to wander<br /><small>Inside and outside flow together</small></p></div></div>
      </section>

      <section className="experience section-pad"><div className="experience-intro"><SectionLabel>03 — The experience</SectionLabel><h2>Days that stay<br /><em>with you.</em></h2></div><div className="experience-list"><article><span>01</span><div><h3>Gather around</h3><p>Bring everyone together for slow meals, shared stories, and evenings that do not need an agenda.</p></div></article><article><span>02</span><div><h3>Find your quiet</h3><p>Step outside, look up at the trees, and let the rhythm of the hills set the pace.</p></div></article><article><span>03</span><div><h3>Play a little</h3><p>When the mood changes, there is space for a friendly game and a little healthy competition.</p></div></article></div></section>

      <section className="gallery section-pad" id="gallery"><div className="gallery-heading"><SectionLabel>04 — Photo story</SectionLabel><h2>See yourself<br /><em>here.</em></h2><p>A glimpse into the spaces, textures, and small details that make Oemah Kayu feel like home.</p></div><div className="gallery-grid">{photos.map((photo, index) => <button className={`gallery-item item-${index + 1}`} key={photo.src} onClick={() => setLightbox(photo)} aria-label={`View ${photo.alt}`}><img src={photo.src} alt={photo.alt} /></button>)}</div></section>

      <section className="facts"><div className="facts-inner"><SectionLabel>05 — Good to know</SectionLabel><div className="facts-grid"><div><strong>Wooden</strong><span>retreat</span></div><div><strong>Green</strong><span>surroundings</span></div><div><strong>Made for</strong><span>togetherness</span></div><a href={whatsapp} className="facts-action">Ask about your stay <Arrow /></a></div></div></section>

      <section className="visit section-pad" id="visit"><div className="visit-copy"><SectionLabel>06 — Find your way</SectionLabel><h2>Close enough<br /><em>to get away.</em></h2><p>Oemah Kayu is in Cisarua, Bogor — a refreshing escape from the city, surrounded by the landscapes of West Java.</p><a className="button button-dark" href={whatsapp}>Plan your visit <Arrow /></a></div><div className="map-card"><img src="/src/assets/Ke-Villa.webp" alt="The road leading to Oemah Kayu" /><div className="map-overlay"><span>OEMAH KAYU</span><strong>Cisarua, Bogor</strong><small>West Java, Indonesia</small></div></div></section>

      <section className="final-cta"><img src="/src/assets/Depan-Malam.webp" alt="Oemah Kayu glowing warmly at night" /><div className="final-shade" /><div className="final-content"><SectionLabel>Come as you are</SectionLabel><h2>Ready to find<br /><em>your quiet?</em></h2><a className="button button-light" href={whatsapp}>Chat via WhatsApp <Arrow /></a></div></section>

      <footer><a className="brand" href="#top"><span>Oemah</span> Kayu</a><p>Private wooden retreat<br />Cisarua, Bogor · Indonesia</p><div><a href="#house">The house</a><a href="#gallery">Gallery</a><a href={whatsapp}>WhatsApp</a></div><small>© {new Date().getFullYear()} Oemah Kayu</small></footer>

      {lightbox && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview" onClick={() => setLightbox(null)}><button aria-label="Close image preview" onClick={() => setLightbox(null)}>×</button><img src={lightbox.src} alt={lightbox.alt} onClick={(event) => event.stopPropagation()} /></div>}
      <a className="sticky-wa" href={whatsapp} aria-label="Chat with Oemah Kayu on WhatsApp">WhatsApp <Arrow /></a>
    </main>
  )
}
