import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Datenschutz, Impressum } from './components/Legal'

const Test = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar />
      <main className="pt-20 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-6 shadow-card">
            <h2 className="text-xl font-bold mb-4">Datenschutz (Ausschnitt)</h2>
            <Datenschutz />
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-card">
            <h2 className="text-xl font-bold mb-4">Impressum (Ausschnitt)</h2>
            <Impressum />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Test
