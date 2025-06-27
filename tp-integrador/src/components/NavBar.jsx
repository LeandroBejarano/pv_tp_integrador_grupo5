import { Link } from 'react-router-dom'; // para enlaces de navegación.

function NavBar() {
    return (
        // navbar: La clase base para todos los navbars de Bootstrap.
        // navbar-expand-lg: El navbar se expande en pantallas grandes (lg) y superiores.
        // navbar-dark: Estilo de texto oscuro para el navbar (texto blanco sobre fondo oscuro).
        // bg-dark: Fondo oscuro para el navbar.
        // p-3: Añade un padding de 3 unidades alrededor del navbar.
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <div
                className="container-fluid"> {/* container-fluid: Un contenedor que ocupa el 100% del ancho de la vista. */}
                {/* navbar-brand: Para el logotipo o nombre del sitio. */}
                <Link to='/' className="navbar-brand">Tienda de Productos</Link> {/* */}

                {/* Botón de alternancia (toggler) para el navbar responsivo en pantallas pequeñas. */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Contenido colapsable del navbar. */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* navbar-nav: Lista de enlaces de navegación. */}
                    {/* me-auto: Empuja los elementos siguientes a la derecha (útil para items a la derecha). */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* nav-item: Para cada elemento de la lista de navegación. */}
                        <li className="nav-item">
                            {/* nav-link: Para cada enlace de navegación. */}
                            <Link to='/lista' className="nav-link">Lista de Productos</Link> {/* */}
                        </li>
                        <li className="nav-item">
                            <Link to='/favoritos' className="nav-link">Productos Favoritos</Link> {/* */}
                        </li>
                        <li>
                            <Link to='/crear' className='nav-link'>Crear Producto</Link> {/* */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar