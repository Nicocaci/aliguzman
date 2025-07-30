
import './App.css';
import NavBar from './components/NavBar.jsx'
import Inicio from './pages/Inicio.jsx';
import Contacto from './pages/Contacto.jsx';
import Productos from './pages/Productos.jsx';
import Footer from './components/Footer.jsx';
import BeautyCollagen from './pages/ItemPage/BeautyCollagen.jsx'
import Boost from './pages/ItemPage/Boost.jsx';
import Galvanic from './pages/ItemPage/Galvanic.jsx';
import LumiSpa from './pages/ItemPage/LumiSpa.jsx';
import Omega from './pages/ItemPage/Omgea.jsx';
import WellSpa from './pages/ItemPage/WellSpa.jsx';
import KitFacial from './pages/ItemPage/KitFacial.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<Inicio/>}/>
      <Route exact path='/contacto' element={<Contacto/>}/>
      <Route exact path='/productos' element={<Productos/>}/>
      <Route exact path='/beautycollagen' element={<BeautyCollagen/>}/>
      <Route exact path='/boost' element={<Boost/>}/>
      <Route exact path='/galvanic' element={<Galvanic/>}/>
      <Route exact path='/lumiSpa' element={<LumiSpa/>}/>
      <Route exact path='/omega' element={<Omega/>}/>
      <Route exact path='/wellSpa' element={<WellSpa/>} />
      <Route exact path='/kitFacial' element={<KitFacial/>} />
    </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
