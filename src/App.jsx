

import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Agence from "./pages/Agence"
import Projects from "./pages/Projects"
import Navbar from "./Componets/Navigation/Navbar"
import FullscreenNav from "./Componets/Navigation/FullscreenNav"

const App = () => {
  return (
    <div className='text-white'>
      <FullscreenNav /> 
      <Navbar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>     
    </div>
  )
}

export default App
