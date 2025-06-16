import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Se elimina 'Link' ya que los enlaces irán dentro de NavBar.
import NavBar from './components/NavBar'; //
import Inicio from './views/Inicio'; //
import ListaProductos from './views/ListaProductos'; //
import Favoritos from './views/Favoritos'; //
import Detalles from './views/Detalles'; //
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* NavBar ahora se encarga de sus propios enlaces internos. */}
        <div className="d-flex flex-column min-vh-100">
        <NavBar />
        {/*
          container mt-4: Una clase de Bootstrap que proporciona un ancho fijo
          (responsivo) y centra el contenido, con un margen superior de 4 unidades.
          Esto envuelve las rutas para una mejor presentación visual.
        */}
        <main className="flex-fill container mt-4">
          <Routes>
            <Route path='/' element={<Navigate to='/inicio' />} /> {/* */}
            <Route path='/inicio' element={<Inicio />} /> {/* */}
            <Route path='/lista' element={<ListaProductos />} /> {/* */}
            <Route path='/lista/:id' element={<Detalles />} /> {/* */}
            <Route path='/favoritos' element={<Favoritos />} /> {/* */}
          </Routes>
        </main>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App