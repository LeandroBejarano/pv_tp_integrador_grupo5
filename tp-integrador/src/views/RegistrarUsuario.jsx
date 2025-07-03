import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, saveUsers } from "../session/sessionStorage";
import { toast, ToastContainer } from "react-toastify";

function RegistrarUsuario() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = getUsers();
    const searchEmail = users.find((u) => u.email === email);
    if (searchEmail) {
      toast.error("El correo ya está registrado, puede iniciar sesión");
      return;
    }
    if (password.length < 6) {
      toast.error("La contraseña debe ser de al menos 6 caracteres");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }
    const newUser = { email, password };
    saveUsers([...users, newUser]);
    navigate("/");
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="text-center mb-4">
          <i className="bi bi-person-plus me-2"></i>
          Registrarse
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
            <label className="form-label">Contraseña (mínimo 6 caracteres):</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Ingrese su contraseña"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirmar contraseña:</label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Repita su contraseña"
            />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-success">
              <i className="bi bi-person-plus me-2"></i>
              Registrarme
            </button>
            <Link to="/login" className="btn btn-outline-primary">
              Volver al inicio de sesión
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegistrarUsuario;
