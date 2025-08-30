

import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Agence from "./pages/Agence.jsx"
import Projects from "./pages/Projects.jsx"
import Navbar from "./Components/Navigation/Navbar.jsx"
import FullscreenNav from "./Components/Navigation/FullscreenNav.jsx"

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
