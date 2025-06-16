import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer'; // Asegura de que el Footer esté importado
// Importar los componentes de las vistas existentes
import Inicio from './views/Inicio';
import ListaProductos from './views/ListaProductos';
import Favoritos from './views/Favoritos';
import Detalles from './views/Detalles';

// ¡importar de los componentes de Contacto, Terminos y Privacidad!
import Contacto from './views/Contacto';
import Terminos from './views/Terminos';
import Privacidad from './views/Privacidad';

/**
 * Componente principal de la aplicación.
 * Define la estructura global, la configuración de enrutamiento con React Router,
 * y la disposición de los componentes principales (NavBar, Rutas, Footer).
 * Utiliza clases de Bootstrap para un diseño responsivo y fijo/pegado.
 */
function App() {
    return (
        // d-flex: Hace que este div sea un contenedor flexbox.
        // flex-column: Organiza sus hijos verticalmente (NavBar, Contenido, Footer).
        // min-vh-100: Asegura que el contenedor ocupe al menos el 100% de la altura del viewport,
        //            es clave para que el footer se "pegue" al fondo si el contenido es corto.
        <div className="d-flex flex-column min-vh-100">
            <BrowserRouter>
                {/* El NavBar es un componente fijo en la parte superior. */}
                <NavBar/>

                {/*
          Este div contiene todas las rutas de la aplicación.
          container: Proporciona un ancho responsivo fijo y centra el contenido.
          mt-4: Margen superior de 4 unidades, para asegurar que el contenido no quede
                debajo del navbar fijo.
          flex-grow-1: Permite que este div "crezca" y ocupe todo el espacio vertical
                       disponible, empujando el Footer hacia abajo.
        */}
                <div className="container mt-4 flex-grow-1">
                    <Routes>
                        {/* Ruta por defecto que redirige a /inicio. */}
                        <Route path='/' element={<Navigate to='/inicio'/>}/>
                        {/* Rutas principales de la aplicación. */}
                        <Route path='/inicio' element={<Inicio/>}/>
                        <Route path='/lista' element={<ListaProductos/>}/>
                        <Route path='/lista/:id' element={<Detalles/>}/>
                        <Route path='/favoritos' element={<Favoritos/>}/>
                        {/* ¡Nuevas rutas para las páginas de Contacto, Términos y Privacidad! */}
                        <Route path='/contacto' element={<Contacto/>}/>
                        <Route path='/terminos' element={<Terminos/>}/>
                        <Route path='/privacidad' element={<Privacidad/>}/>
                    </Routes>
                </div>

                {/* El Footer se renderiza después del contenido principal, y gracias a 'mt-auto'
            en Footer.jsx y la configuración flexbox, se "pegará" al fondo. */}
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App;