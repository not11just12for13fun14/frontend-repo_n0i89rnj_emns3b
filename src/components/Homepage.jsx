import React, { useEffect, useRef } from 'react'
import Section from './AnimatedSections'

const MouseParallax = () => {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 10
      const y = (e.clientY / innerHeight - 0.5) * 10
      el.style.setProperty('--mx', `${x}`)
      el.style.setProperty('--my', `${y}`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])
  return <div ref={ref} className="parallax-layer absolute inset-0 -z-10" />
}

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-24 md:pt-28">
      <MouseParallax />
      <div className="absolute -inset-40 bg-[radial-gradient(circle_at_center,rgba(11,110,246,0.15),transparent_60%)]" />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Albert Transport – <span className="text-[#0B6EF6]">Schnell</span>. Sicher. Zuverlässig.
            </h1>
            <p className="text-lg text-gray-600">Kleintransporte & Expressfahrten in NRW</p>
            <div className="flex items-center gap-3">
              <a href="#kontakt" className="px-5 py-3 rounded-xl bg-[#0B6EF6] text-white shadow-md hover:shadow-lg transition">Kontakt</a>
              <a href="#kontakt" className="px-5 py-3 rounded-xl bg-white text-gray-900 shadow-sm hover:shadow-md border border-gray-200 transition">Angebot anfragen</a>
            </div>
          </div>
          <div className="relative h-64 md:h-80">
            {/* Animated delivery van */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform" style={{ transform: 'translate3d(-50%, -50%, 0)'}}>
              <svg className="van" width="280" height="140" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="40" y="70" width="220" height="70" rx="12" fill="#0B6EF6"/>
                <rect x="260" y="90" width="100" height="50" rx="10" fill="#1F2937"/>
                <rect x="70" y="80" width="70" height="40" rx="6" fill="white"/>
                <circle cx="110" cy="150" r="18" fill="#111827"/>
                <circle cx="300" cy="150" r="18" fill="#111827"/>
                <circle cx="110" cy="150" r="8" fill="#374151"/>
                <circle cx="300" cy="150" r="8" fill="#374151"/>
                <path d="M260 110h40" stroke="white" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const About = () => (
  <Section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-24">
    <div className="bg-white rounded-2xl p-8 shadow-card">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Über uns</h2>
      <p className="text-gray-600 mb-8">Albert Transport ist ein kleines, zuverlässiges Transportunternehmen aus Nordrhein-Westfalen. Wir bieten Expressfahrten, Kleintransporte und flexible Transportlösungen für Firmen & Privatkunden.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {["Anfrage", "Abholung", "Zustellung"].map((t, i) => (
          <div key={i} className="step">
            <div className="w-10 h-10 rounded-xl bg-[#0B6EF6]/10 text-[#0B6EF6] grid place-items-center mb-3">
              <span className="font-bold">{i+1}</span>
            </div>
            <h3 className="font-semibold mb-1">{t}</h3>
            <p className="text-sm text-gray-600">Reibungsloser Ablauf in drei Schritten – transparent und zuverlässig.</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
)

const Services = () => {
  const items = [
    {
      title: 'Expresslieferungen',
      desc: 'Wenn es schnell gehen muss – direkt und ohne Umwege.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h11"/><path d="M3 6h11"/><path d="M3 18h11"/>
          <path d="M17 17l4-5-4-5"/>
        </svg>
      )
    },
    {
      title: 'Same-Day Transport',
      desc: 'Abholung und Zustellung am selben Tag innerhalb NRW.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
        </svg>
      )
    },
    {
      title: 'Kleintransporte bis 3.5t',
      desc: 'Ideal für Paletten, Geräte oder Möbel – sicher transportiert.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v3h-3"/><circle cx="5.5" cy="17.5" r="2"/><circle cx="17.5" cy="17.5" r="2"/>
        </svg>
      )
    },
    {
      title: 'NRW-Regionalfahrten',
      desc: 'Regelmäßige Touren und spontane Fahrten in ganz NRW.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h6l3 3 3-3h6"/>
        </svg>
      )
    },
  ]
  return (
    <Section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-24" id="leistungen">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Unsere Leistungen</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((s, i) => (
          <div key={i} className="service-card">
            <div className="text-[#0B6EF6] mb-3">{s.icon}</div>
            <h3 className="font-semibold mb-1">{s.title}</h3>
            <p className="text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

const NRWMap = () => (
  <Section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-24">
    <div className="bg-white rounded-2xl p-8 shadow-card">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">NRW – Unser Einsatzgebiet</h2>
      <div className="relative h-72">
        <svg className="nrw" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <path className="nrw-path" d="M60,120 L90,80 L140,70 L180,90 L220,70 L260,100 L270,140 L250,180 L210,200 L170,190 L130,210 L90,190 L70,160 Z" fill="none" stroke="#0B6EF6" strokeWidth="3"/>
        </svg>
        <p className="text-gray-600 mt-4">Wir sind schnell im gesamten Bundesland unterwegs.</p>
      </div>
    </div>
  </Section>
)

const WhyUs = () => {
  const items = [
    { t: 'Schnell', d: 'Kurze Reaktionszeiten & direkte Zustellung.' },
    { t: 'Sicher', d: 'Sorgfältige Handhabung und feste Abläufe.' },
    { t: 'Faire Preise', d: 'Transparente Konditionen ohne Überraschungen.' },
    { t: 'Gute Kommunikation', d: 'Steter Status & direkte Erreichbarkeit.' },
  ]
  return (
    <Section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-24" id="warum">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Warum wir?</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-xl transition transform will-change-transform">
            <div className="w-10 h-10 rounded-xl bg-[#0B6EF6]/10 text-[#0B6EF6] grid place-items-center mb-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 20l2-7L2 9h7z"/>
              </svg>
            </div>
            <h3 className="font-semibold mb-1">{s.t}</h3>
            <p className="text-sm text-gray-600">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

const Contact = () => (
  <Section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-24" id="kontakt">
    <div className="bg-white rounded-2xl p-8 shadow-card">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Kontakt</h2>
      <form onSubmit={(e)=>e.preventDefault()} className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input className="input" placeholder="Ihr Name"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail</label>
          <input type="email" className="input" placeholder="Ihre E-Mail"/>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Nachricht</label>
          <textarea className="input min-h-[120px]" placeholder="Wie können wir helfen?"/>
        </div>
        <div className="md:col-span-2 flex items-center justify-between">
          <p className="text-sm text-gray-500">Wir melden uns schnellstmöglich.</p>
          <button className="px-5 py-3 rounded-xl bg-[#0B6EF6] text-white shadow-md hover:shadow-lg transition">Senden</button>
        </div>
      </form>
    </div>
  </Section>
)

const Homepage = () => {
  useEffect(() => {
    // reveal on scroll
    const items = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('in-view', entry.isIntersecting)
      })
    }, { threshold: 0.15 })
    items.forEach((i)=>io.observe(i))

    // subtle cursor highlight
    const hl = document.createElement('div')
    hl.className = 'cursor-hl'
    document.body.appendChild(hl)
    const move = (e)=>{
      hl.style.transform = `translate(${e.clientX - 100}px, ${e.clientY - 100}px)`
    }
    window.addEventListener('mousemove', move)

    return () => {
      io.disconnect()
      window.removeEventListener('mousemove', move)
      hl.remove()
    }
  }, [])

  return (
    <main className="pt-16">
      <Hero />
      <About />
      <Services />
      <NRWMap />
      <WhyUs />
      <Contact />
    </main>
  )
}

export default Homepage
