import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
            toast.error("La contraseña debe ser de almenos 6 carácteres");
            return;
        }
        if (password !== confirmPassword) {
            toast.error("Las contraseñas no coinciden");
            return;
        }
        const newUser = { email, password };
        saveUsers([...users, newUser])
        navigate("/")
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Correo electrónico: </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Contraseña (mínimo 6 carácteres):</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <label>Confirme su contraseña:</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

                <button type="submit" >Registrarme</button>
            </form>
            <ToastContainer />
        </div>
    )
}
export default RegistrarUsuario