import {useDispatch, useSelector} from "react-redux"; //
import {toggleFavorito} from "../services/ProductsSlice"; //
import {Link} from "react-router-dom"; // Necesario para el enlace a detalles.

function Favoritos() {
    const dispatch = useDispatch(); //
    const productos = useSelector(state => state.products.lista) //
    const favoritos = useSelector(state => state.products.favoritos); //

    const productosFavoritos = productos.filter(p => favoritos.includes(p.id)); //

    return (
        <div>
            <h2 className="mb-4 text-center">Productos Favoritos</h2>
            {productosFavoritos.length === 0 ? (
                <p className="text-center text-muted">No hay productos favoritos aún.</p> //
            ) : (
                // row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4: Mismas clases de grid que ListaProductos.
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {productosFavoritos.map(producto => (
                        <div key={producto.id} className="col mb-4">
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={producto.image}
                                    alt={producto.title}
                                    className="card-img-top img-fluid p-3"
                                    style={{height: '200px', objectFit: 'contain'}}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{producto.title}</h5>
                                    <p className="card-text text-muted">Precio: ${producto.price.toFixed(2)}</p>
                                    <p className="card-text text-muted">Categoría: {producto.category}</p>
                                    <div className="mt-auto d-grid gap-2">
                                        <Link to={`/lista/${producto.id}`} className="btn btn-info btn-sm">Ver
                                            Detalles</Link> {/* */}
                                        <div className="form-check form-switch mt-2">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={`fav-${producto.id}`}
                                                checked={true} // Siempre será true aquí
                                                onChange={() => dispatch(toggleFavorito(producto.id))}
                                            />
                                            <label className="form-check-label" htmlFor={`fav-${producto.id}`}>
                                                Quitar de favoritos
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Favoritos