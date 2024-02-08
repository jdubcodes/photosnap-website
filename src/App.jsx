// React imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Component imports
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stories' element={<h1>stories</h1>} />
        <Route path='/features' element={<h1>features</h1>} />
        <Route path='/pricing' element={<h1>pricing</h1>} />
      </Routes>
    </>
  )
}

export default App
