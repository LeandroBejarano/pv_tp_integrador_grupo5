import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { loginUser } from "../services/UsersSlice";
import { toast, ToastContainer } from "react-toastify";

function IniciarSesion() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.user)
    const error = useSelector(state => state.users.error)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }))
    }

    useEffect(() => {
        if (user) {
            setEmail("");
            setPassword("");
            navigate("/lista", { state: { logeado: true } });
        }
        else if (error) {
            toast.error("Credenciales inválidas");
        }
    }, [user, error])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Correo electrónico: </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Contraseña: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit">Iniciar Sesion</button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default IniciarSesion