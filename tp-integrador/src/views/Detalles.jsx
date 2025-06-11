import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { toggleFavorito } from "../services/ProductsSlice"

function Detalles() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const producto = useSelector(state => state.products.lista.find(p => p.id === parseInt(id)));
    const favoritos = useSelector(state => state.products.favoritos);
    const esFavorito = favoritos.includes(parseInt(id));

    if (!producto) return <p>Cargando...</p>

    return (
        <div>
            <h2>{producto.title}</h2>
            <img src={producto.image} alt={producto.title} width="150" />
            <p>Precio: ${producto.price}</p>
            <p>Categoria: {producto.category}</p>
            <p>Descripcion: {producto.description}</p>
            <p>Stock: {producto.stock}</p>
            <label>
                <input type="checkbox" checked={esFavorito} onChange={() => dispatch(toggleFavorito(producto.id))} />
                Favorito
            </label>
        </div>
    )
}

export default Detalles