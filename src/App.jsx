// React imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Component imports
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Stories from './components/Stories'
import Features from './components/Features'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stories' element={<Stories />} />
        <Route path='/features' element={<Features />} />
        <Route path='/pricing' element={<h1>pricing</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
