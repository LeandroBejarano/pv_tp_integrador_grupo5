import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo00.png';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logoutUser } from '../services/UsersSlice';

function NavBar() {

  const user = useSelector(state => state.users.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  }

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

          {/* Bienvenida+Cierre de sesión, para usuario activo */}
          {user && (
            <div className="d-flex align-items-center gap-3 text-white">
              <span className="me-2">
                Bienvenido, <strong>{user.email}</strong>
              </span>
              <button onClick={handleLogout} className="btn btn-outline-light">
                Cerrar sesión
              </button>
              <img
                src="https://cdn-icons-png.flaticon.com/512/12225/12225935.png"
                alt="Logout Icon"
                width="30"
                height="30"
                className="img-fluid"
              />
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}

export default NavBar;

