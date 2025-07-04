import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { loginUser, resetError } from "../services/UsersSlice";
import { toast, ToastContainer } from "react-toastify";

function IniciarSesion() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);
  const error = useSelector((state) => state.users.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state?.ucreado) {
      toast.success("Usuario registrado")
    }
  }, [location.state])

  useEffect(() => {
    if (user) {
      setEmail("");
      setPassword("");
      navigate("/inicio", { state: { logeado: true } });
    } else if (error) {
      toast.error("Credenciales inválidas");
      dispatch(resetError())
    }
  }, [user, error, navigate]);

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="text-center mb-4">
          <i className="bi bi-box-arrow-in-right me-2"></i>
          Iniciar Sesión
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Correo electrónico:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Ingrese su correo"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Ingrese su contraseña"
            />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-box-arrow-in-right me-2"></i>
              Iniciar Sesión
            </button>
            <Link to="/registro" className="btn btn-outline-secondary">
              ¿No tienes una cuenta? ¡Registrate ahora!
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default IniciarSesion;
