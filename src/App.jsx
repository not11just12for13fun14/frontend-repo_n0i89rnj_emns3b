import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './components/Homepage'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
