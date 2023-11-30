import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home.jsx"
import NewDisc from "./pages/AltaDiscos.jsx"
import NotFound from './pages/NotFound.jsx'

import NavBar from "./componentes/NavBar.jsx"

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/AltaDiscos" element={<NewDisc/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default App