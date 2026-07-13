import { useState } from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8"> 
        <Header />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
