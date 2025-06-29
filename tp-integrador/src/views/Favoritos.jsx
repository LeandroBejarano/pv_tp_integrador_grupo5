import { useDispatch, useSelector } from "react-redux"; //
import { toggleFavorito } from "../services/ProductsSlice"; //
import { Link } from "react-router-dom"; // Necesario para el enlace a detalles.
import TextoGris from "../components/TextoGris";

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
                                    style={{ height: '200px', objectFit: 'contain' }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{producto.title}</h5>
                                    <TextoGris>Precio: ${producto.price.toFixed(2)}</TextoGris>
                                    <TextoGris>Categoría: {producto.category}</TextoGris>
                                    <div className="mt-auto d-grid gap-2">
                                        <Link to={`/lista/${producto.id}`} className="btn btn-info btn-sm">Ver
                                            Detalles</Link> {/* */}
                                        <div
                                            className={`position-absolute top-0 end-0 m-2`}
                                            style={{ zIndex: 1 }}
                                        >
                                            <i
                                                className={`bi ${favoritos.includes(producto.id) ? 'bi-star-fill text-warning' : 'bi-star'} fs-4`}
                                                style={{ cursor: 'pointer' }}
                                                title={favoritos.includes(producto.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                                                onClick={() => dispatch(toggleFavorito(producto.id))}
                                            ></i>
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