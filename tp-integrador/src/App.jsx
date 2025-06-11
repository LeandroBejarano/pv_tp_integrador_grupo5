import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Inicio from './views/Inicio';
import ListaProductos from './views/ListaProductos';
import Favoritos from './views/Favoritos';
import Detalles from './views/Detalles';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar>
          <Link to='/inicio'>Pagina Principal</Link>
          <Link to='/lista'>Lista de Productos</Link>
          <Link to='/favoritos'>Productos Favoritos</Link>
        </NavBar>
        <Routes>
          <Route path='/' element={<Navigate to='/inicio'/>}/>
          <Route path='/inicio' element={<Inicio/>}/>
          <Route path='/lista' element={<ListaProductos/>}/>
          <Route path='/lista/:id' element={<Detalles/>}/>
          <Route path='/favoritos' element={<Favoritos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
