import { useSelector, useDispatch } from "react-redux";
import { toggleFavorito } from "../services/ProductsSlice";

function Favoritos() {
    const dispatch = useDispatch();
    const productos = useSelector(state => state.products.lista)
    const favoritos = useSelector(state => state.products.favoritos);

    const productosFavoritos = productos.filter(p => favoritos.includes(p.id));
    if (productosFavoritos.length === 0) return <p>No hay productos favoritos</p>
    return (
        <div>
            <h2>Productos Favoritos</h2>
            {productosFavoritos.map(producto => (
                <div key={producto.id}>
                    <h3>{producto.title}</h3>
                    <img src={producto.image} alt={producto.title} width="100"/>
                    <p>Precio: ${producto.price}</p>
                    <p>Categoria: {producto.category}</p>
                    <p>Descripcion: {producto.description}</p>
                    <label>
                        <input type="checkbox" checked={true} onChange={() => dispatch(toggleFavorito(producto.id))} />
                        Quitar de favoritos
                    </label>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default Favoritos