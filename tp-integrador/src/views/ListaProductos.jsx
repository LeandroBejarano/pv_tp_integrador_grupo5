import { useEffect } from "react"; //
import { useDispatch, useSelector } from "react-redux"; //
import { fetchProducts, toggleFavorito } from "../services/ProductsSlice"; //
import { Link } from "react-router-dom"; //

function ListaProductos() {
    const dispatch = useDispatch(); //
    const productos = useSelector(state => state.products.lista); //
    const favoritos = useSelector(state => state.products.favoritos); //
    const status = useSelector(state => state.products.status); //

    useEffect(() => { //
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch])

    if (status === 'loading') return <p className="text-center my-5">Cargando lista...</p>; //

    return (
        <div>
            <h2 className="mb-4 text-center">Lista de Productos</h2>
            {/* row: Contenedor para columnas en el sistema de grid de Bootstrap. */}
            {/* g-4: Espacio (gutter) de 4 unidades entre columnas. */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"> {/* row-cols-X para responsive grid */}
                {productos.map(producto => (
                    // col: Columna en el sistema de grid.
                    // mb-4: Margen inferior para cada tarjeta.
                    <div key={producto.id} className="col mb-4">
                        {/* card: Tarjeta de Bootstrap. */}
                        {/* h-100: Asegura que todas las tarjetas tengan la misma altura en una fila. */}
                        <div className="card h-100 shadow-sm">
                            {/* card-img-top: Estilo para imagen en la parte superior de la tarjeta. */}
                            {/* img-fluid: Asegura que la imagen sea responsiva. */}
                            {/* mx-auto d-block: Centra la imagen horizontalmente. */}
                            <img
                                src={producto.image}
                                alt={producto.title}
                                className="card-img-top img-fluid p-3" // p-3: padding para la imagen
                                style={{ height: '200px', objectFit: 'contain' }} // Estilo inline para control de tamaño
                            />
                            <div className="card-body text-center">
                                {/* card-title: Título de la tarjeta. */}
                                <h5 className="card-title">{producto.title}</h5>
                                <p className="card-text text-muted">Precio: ${producto.price}</p>
                                <p className="card-text text-muted">Categoría: {producto.category}</p>
                                {/* d-grid gap-2: Botones apilados con espaciado, d-md-block para que se apilen en md. */}
                                {/* mt-auto: Empuja el contenido hacia la parte inferior de la tarjeta. */}
                                <div className="mt-auto d-grid gap-2">
                                    {/* btn btn-primary: Botón primario de Bootstrap. */}
                                    <Link to={`/lista/${producto.id}`} className="btn btn-primary">Ver Detalles</Link> {/* */}
                                    {/* form-check form-switch: Estilo de interruptor para el checkbox. */}
                                    {/* mt-2: Margen superior. */}
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
        </div>
    );
}

export default ListaProductos