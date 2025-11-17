import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Datenschutz } from '../components/Legal'

const DatenschutzPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar />
      <Datenschutz />
      <Footer />
    </div>
  )
}

export default DatenschutzPage
