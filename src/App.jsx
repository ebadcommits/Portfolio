import { useState } from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
