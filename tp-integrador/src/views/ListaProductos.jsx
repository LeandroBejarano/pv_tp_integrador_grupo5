import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, toggleFavorito } from "../services/ProductsSlice";
import { Link } from "react-router-dom";

function ListaProductos () {
    const dispatch = useDispatch();
    const productos = useSelector(state => state.products.lista);
    const favoritos = useSelector(state => state.products.favoritos);
    const status = useSelector(state => state.products.status);

    useEffect(()=>{
        if (status==='idle'){
            dispatch(fetchProducts());
        }
    }, [status, dispatch])

    if (status === 'loading') return <p>Cargando lista...</p>;

    return(
        <div>
            <h2>Lista de Productos</h2>
            {productos.map(producto =>(
                <div key={producto.id}>
                    <h3>{producto.title}</h3>
                    <img src={producto.image} alt={producto.title} width="100"/>
                    <p>Precio: ${producto.price}</p>
                    <p>Categoría: {producto.category}</p>
                    <Link to={`/lista/${producto.id}`}>Ver Detalles</Link>
                    <label>
                        <input type="checkbox" checked={favoritos.includes(producto.id)} onChange={() => dispatch(toggleFavorito(producto.id))}/>
                        Favorito
                    </label>
                    <hr/>
                </div>
            ))}
        </div>
    );
}

export default ListaProductos