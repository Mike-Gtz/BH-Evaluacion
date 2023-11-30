import './index.css'
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home.jsx"
import NewDisc from "./pages/AltaDiscos.jsx"
import NotFound from './pages/NotFound.jsx'

import NavBar from "./componentes/NavBar.jsx"

function App() {

  return (
    <>
    <div className="bg-zinc-900 h-screen">
    <NavBar />
    <div className="container mx-auto py-4 px-20">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/AltaDiscos" element={<NewDisc/>} />
      <Route path="/EditarDisco/:id" element={<NewDisc/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </div>
    </div>
    </>
  )
}

export default App