// React imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Component imports
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <h1 className='text-9xl text-center pt-20 bg-slate-400 h-[100dvh]'>
              Hello World
            </h1>
          }
        />
        <Route path='/stories' element={<h1>stories</h1>} />
        <Route path='/features' element={<h1>features</h1>} />
        <Route path='/pricing' element={<h1>pricing</h1>} />
      </Routes>
    </>
  )
}

export default App
