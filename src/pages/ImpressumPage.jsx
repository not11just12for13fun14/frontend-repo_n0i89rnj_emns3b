import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Impressum } from '../components/Legal'

const ImpressumPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar />
      <Impressum />
      <Footer />
    </div>
  )
}

export default ImpressumPage
