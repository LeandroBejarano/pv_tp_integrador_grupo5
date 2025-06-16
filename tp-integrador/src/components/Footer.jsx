import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    const currentYear = new Date().getFullYear(); // Obtiene el año actual dinámicamente

    return (
        // bg-dark: Fondo oscuro para el footer (coincide con el navbar).
        // text-white: Texto blanco.
        // py-3: Padding vertical de 3 unidades.
        // text-center: Centra el contenido horizontalmente.
        // mt-auto: Esto es CLAVE para que el footer se "pegue" al fondo
        //          cuando el contenido principal no llena toda la altura de la pantalla.
        <footer className="bg-dark text-white py-3 text-center mt-auto">
            <div className="container"> {/* Usa el contenedor de Bootstrap para alinear el contenido */}
                <p className="mb-1"> {/* mb-1: Margen inferior pequeño */}
                    &copy; {currentYear} Tienda Online. Todos los derechos reservados.
                </p>
                <p className="mb-0"> {/* mb-0: Sin margen inferior */}
                    {/* Link: Para navegación interna con React Router */}
                    {/* text-white: Para que los enlaces sean blancos */}
                    {/* mx-2: Margen horizontal de 2 unidades */}
                    {/* text-decoration-none: Elimina el subrayado por defecto de los enlaces */}
                    <Link to="/privacidad" className="text-white mx-2 text-decoration-none">Política de
                        Privacidad</Link>
                    |
                    <Link to="/terminos" className="text-white mx-2 text-decoration-none">Términos de Servicio</Link>
                    |
                    <Link to="/contacto" className="text-white mx-2 text-decoration-none">Contacto</Link>
                </p>
                <div className="mt-2"> {/* mt-2: Margen superior para los iconos de redes sociales */}
                    {/* Iconos de redes sociales (puedes añadir SVG o FontAwesome/Bootstrap Icons aquí) */}
                    {/* Asumiendo que has importado 'bootstrap-icons/font/bootstrap-icons.css' en main.jsx si los usas. */}
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                       className="text-white mx-2">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                       className="text-white mx-2">
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;