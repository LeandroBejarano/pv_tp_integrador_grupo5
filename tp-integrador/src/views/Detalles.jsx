import { useParams, Link } from "react-router-dom" // Se agrega Link para el botón de volver.
import { useSelector, useDispatch } from "react-redux" //
import { toggleFavorito } from "../services/ProductsSlice" //

function Detalles() {
    const { id } = useParams(); //
    const dispatch = useDispatch(); //

    const producto = useSelector(state => state.products.lista.find(p => p.id === parseInt(id))); //
    const favoritos = useSelector(state => state.products.favoritos); //
    const esFavorito = favoritos.includes(parseInt(id)); //

    if (!producto) return <p className="text-center my-5">Cargando detalles del producto...</p> //

    return (
        // card p-4 shadow-sm: Tarjeta con padding y sombra.
        <div className="card p-4 shadow-sm">
            <h2 className="card-title text-center mb-4">{producto.title}</h2>
            {/* row g-4: Fila para la cuadrícula con espaciado. */}
            {/* justify-content-center: Centra el contenido horizontalmente. */}
            <div className="row g-4 justify-content-center">
                {/* col-md-4: Columna que ocupa 4 de 12 en pantallas medianas. */}
                {/* text-center: Centra el texto. */}
                <div className="col-md-4 text-center">
                    <img
                        src={producto.image}
                        alt={producto.title}
                        className="img-fluid rounded shadow-sm" // img-fluid: Responsiva, rounded: Esquinas redondeadas, shadow-sm: Sombra.
                        style={{ maxHeight: '300px', objectFit: 'contain' }} // Control de tamaño de la imagen.
                    />
                </div>
                {/* col-md-8: Columna que ocupa 8 de 12 en pantallas medianas. */}
                <div className="col-md-8">
                    {/* card-text: Para el texto dentro de la tarjeta. */}
                    <p className="card-text"><strong>Precio:</strong> ${producto.price}</p>
                    <p className="card-text"><strong>Categoría:</strong> {producto.category}</p>
                    <p className="card-text"><strong>Descripción:</strong> {producto.description}</p>
                    {/* form-check form-switch: Estilo de interruptor para el checkbox. */}
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
                    {/* d-flex gap-2: Utilidad de Bootstrap para flexbox con espacio entre elementos. */}
                    <div className="d-flex gap-2">
                        {/* btn btn-secondary: Botón secundario para volver. */}
                        <Link to='/lista' className="btn btn-secondary">Volver a la lista</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalles