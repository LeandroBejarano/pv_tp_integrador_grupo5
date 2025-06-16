import {useDispatch, useSelector} from "react-redux";
import {toggleFavorito} from "../services/ProductsSlice";
import {Link} from "react-router-dom"; // Necesario para el enlace a detalles.

/**
 * Componente que muestra la lista de productos marcados como favoritos.
 * Permite ver los detalles de los productos favoritos y quitarlos de la lista de favoritos.
 */
function Favoritos() {
    // useDispatch: Hook para despachar acciones a la store de Redux.
    const dispatch = useDispatch();
    // useSelector: Hooks para acceder a partes del estado de Redux.
    const productos = useSelector(state => state.products.lista); // Lista completa de productos.
    const favoritos = useSelector(state => state.products.favoritos); // ID's productos favoritos.

    // Filtra la lista completa de productos para obtener solo los que son favoritos.
    const productosFavoritos = productos.filter(p => favoritos.includes(p.id));

    return (
        <div className="my-5"> {/* my-5: Margen vertical para separar del navbar y footer */}
            <h2 className="mb-4 text-center">Productos Favoritos</h2>
            {/* Renderizado condicional: si no hay favoritos, muestra un mensaje. */}
            {productosFavoritos.length === 0 ? (
                <p className="text-center text-muted">No hay productos favoritos aún.</p>
            ) : (
                // row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4: Mismas clases de grid que ListaProductos
                // para una apariencia consistente.
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {/* Itera sobre los productos favoritos para renderizar cada tarjeta. */}
                    {productosFavoritos.map(producto => (
                        <div key={producto.id} className="col mb-4">
                            <div className="card h-100 shadow-sm d-flex flex-column">
                                <img
                                    src={producto.image}
                                    alt={producto.title}
                                    className="card-img-top img-fluid p-3"
                                    style={{height: '200px', objectFit: 'contain'}}
                                />
                                <div className="card-body d-flex flex-column p-3">
                                    <h5 className="card-title text-center mb-2">{producto.title}</h5>
                                    <p className="card-text"><strong>Precio:</strong> ${producto.price.toFixed(2)}</p>
                                    <p className="card-text text-muted">Categoría: {producto.category}</p>
                                    {/* mt-auto: Empuja este div al fondo. */}
                                    {/* d-grid gap-2: Utilidad de Bootstrap para una cuadrícula con espacio. */}
                                    <div className="mt-auto d-grid gap-2">
                                        {/* Link a la página de detalles del producto. */}
                                        <Link to={`/lista/${producto.id}`} className="btn btn-info btn-sm">
                                            Ver Detalles
                                        </Link>
                                        {/*
                                          Botón para quitar de favoritos con ícono de corazón relleno.
                                          btn-danger: Botón rojo para indicar "quitar".
                                          w-100: Ancho completo.
                                          mt-2: Margen superior.
                                        */}
                                        <button
                                            className="btn btn-danger w-100 mt-2"
                                            onClick={() => dispatch(toggleFavorito(producto.id))}
                                            aria-label="Quitar de favoritos"
                                        >
                                            {/* bi bi-heart-fill: Ícono de corazón relleno. */}
                                            <i className="bi bi-heart-fill"></i>
                                            <span className="ms-2">Quitar de favoritos</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favoritos;