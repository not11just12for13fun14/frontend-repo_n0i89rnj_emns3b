import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClasses = scrolled
    ? 'backdrop-blur bg-white/90 shadow-sm'
    : 'bg-transparent'

  const linkBase = 'text-sm md:text-[15px] font-medium transition-colors hover:text-[#0B6EF6]'

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${navClasses}`}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-[#0B6EF6] text-white grid place-items-center shadow-md group-hover:shadow-lg transition-all">
              {/* Simple truck icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="13" height="13" rx="2"/>
                <path d="M14 8h5l4 4v4h-4"/>
                <circle cx="5.5" cy="18.5" r="2"/>
                <circle cx="18.5" cy="18.5" r="2"/>
              </svg>
            </div>
            <span className="text-[15px] md:text-base font-semibold text-gray-900">Albert Transport</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#leistungen" className={linkBase}>Leistungen</a>
            <a href="/#warum" className={linkBase}>Warum wir</a>
            <a href="/#kontakt" className={linkBase}>Kontakt</a>
            <Link to="/datenschutz" className={linkBase + (location.pathname === '/datenschutz' ? ' text-[#0B6EF6]' : '')}>Datenschutz</Link>
            <Link to="/impressum" className={linkBase + (location.pathname === '/impressum' ? ' text-[#0B6EF6]' : '')}>Impressum</Link>
          </nav>
          <a href="#kontakt" className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0B6EF6] text-white text-sm shadow-sm">
            Kontakt
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
