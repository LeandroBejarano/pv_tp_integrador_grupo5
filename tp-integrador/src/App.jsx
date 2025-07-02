import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Se elimina 'Link' ya que los enlaces irán dentro de NavBar.
import NavBar from './components/NavBar'; //
import Inicio from './views/Inicio'; //
import ListaProductos from './views/ListaProductos'; //
import Favoritos from './views/Favoritos'; //
import Detalles from './views/Detalles'; //
import Footer from './components/Footer';
import CrearProducto from './views/CrearProducto';
import Editar from './views/Editar';
import RegistrarUsuario from './views/RegistrarUsuario';
import IniciarSesion from './views/IniciarSesion';
import PrivateRoute from './hook/PrivateRoute';
import PublicRoute from './hook/PublicRoute';

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

              {/* Rutas protegidas */}
              <Route path='/inicio' element={<PrivateRoute> <Inicio /> </PrivateRoute>} /> {/* */}
              <Route path='/lista' element={<PrivateRoute> <ListaProductos /> </PrivateRoute>} /> {/* */}
              <Route path='/lista/:id' element={<PrivateRoute> <Detalles /> </PrivateRoute>} /> {/* */}
              <Route path='/lista/:id/editar' element={<PrivateRoute> <Editar /> </PrivateRoute>} /> {/* */}
              <Route path='/favoritos' element={<PrivateRoute> <Favoritos /> </PrivateRoute>} /> {/* */}
              <Route path='/crear' element={<PrivateRoute> <CrearProducto /> </PrivateRoute>} /> {/* */}

              {/* Rutas publicas de sesión */}
              <Route path='/login' element={<PublicRoute> <IniciarSesion /> </PublicRoute>} /> {/* */}
              <Route path="/registro" element={<PublicRoute> <RegistrarUsuario /> </PublicRoute>} /> {/* */}

            </Routes>
          </main>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App