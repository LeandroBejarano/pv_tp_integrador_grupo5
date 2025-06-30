import { Link } from 'react-router-dom';
import logo from '../assets/logo00.png';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <div className="container-fluid">
        {/* Logo y nombre de la app */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            width="70"
            height="40"
            className="d-inline-block align-top me-2"
          />
        
        </Link>

        {/* Botón toggler para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Menú de navegación colapsable */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/lista" className="nav-link">Lista de Productos</Link>
            </li>
            <li className="nav-item">
              <Link to="/favoritos" className="nav-link">Productos Favoritos</Link>
            </li>
            <li className="nav-item">
              <Link to="/crear" className="nav-link">Crear Producto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
