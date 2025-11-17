import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-gray-200/70 bg-white/60 backdrop-blur">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#0B6EF6] text-white grid place-items-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="13" height="13" rx="2"/>
              <path d="M14 8h5l4 4v4h-4"/>
            </svg>
          </div>
          <span className="text-sm font-semibold text-gray-900">Albert Transport</span>
        </div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Albert Transport – NRW</p>
        <div className="flex items-center gap-6 text-sm">
          <Link className="text-gray-600 hover:text-[#0B6EF6]" to="/datenschutz">Datenschutz</Link>
          <Link className="text-gray-600 hover:text-[#0B6EF6]" to="/impressum">Impressum</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
