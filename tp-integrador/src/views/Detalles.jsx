import {useParams, Link} from "react-router-dom"; // Se agrega Link para el botón de volver.
import {useSelector, useDispatch} from "react-redux";
import {toggleFavorito} from "../services/ProductsSlice";

/**
 * Componente que muestra los detalles de un producto específico.
 * Obtiene el ID del producto de la URL, lo busca en el estado de Redux y muestra su información.
 * Permite marcar/desmarcar el producto como favorito.
 */
function Detalles() {
    // useParams: Hook de React Router para obtener parámetros de la URL (en este caso, 'id').
    const {id} = useParams();
    // useDispatch: Hook para despachar acciones a la store de Redux.
    const dispatch = useDispatch();

    // useSelector: Hooks para acceder a partes del estado de Redux.
    // Busca el producto por su ID en la lista de productos.
    const producto = useSelector(state => state.products.lista.find(p => p.id === parseInt(id)));
    // Obtiene la lista de IDs de productos favoritos.
    const favoritos = useSelector(state => state.products.favoritos);
    // Comprueba si el producto actual está en la lista de favoritos.
    const esFavorito = favoritos.includes(parseInt(id));

    // Si el producto no se encuentra (ej. aún cargando o ID inválido), muestra un mensaje.
    if (!producto) return <p className="text-center my-5">Cargando detalles del producto...</p>;

    return (
        // card p-4 shadow-sm: Tarjeta con padding y sombra, para contener los detalles.
        <div className="card p-4 shadow-sm my-5">
            {/* card-title: Estilo de título de tarjeta. text-center: Centra el texto. mb-4: Margen inferior. */}
            <h2 className="card-title text-center mb-4">{producto.title}</h2>
            {/*
              row g-4: Fila para la cuadrícula con espaciado (gutter) de 4 unidades.
              justify-content-center: Centra el contenido horizontalmente dentro de la fila.
            */}
            <div className="row g-4 justify-content-center">
                {/*
                  col-md-4: Columna que ocupa 4 de 12 unidades en pantallas medianas y superiores.
                  text-center: Centra el contenido dentro de esta columna.
                */}
                <div className="col-md-4 text-center">
                    <img
                        src={producto.image}
                        alt={producto.title}
                        // img-fluid: Hace la imagen responsiva.
                        // rounded: Aplica esquinas redondeadas.
                        // shadow-sm: Pequeña sombra a la imagen.
                        className="img-fluid rounded shadow-sm"
                        // Estilos en línea para un tamaño consistente.
                        style={{maxHeight: '300px', objectFit: 'contain'}}
                    />
                </div>
                {/*
                  col-md-8: Columna que ocupa 8 de 12 unidades en pantallas medianas y superiores.
                  d-flex flex-column: Contenedor flexbox en columna para organizar la información.
                */}
                <div className="col-md-8 d-flex flex-column">
                    <p className="card-text"><strong>Precio:</strong> ${producto.price.toFixed(2)}</p>
                    <p className="card-text"><strong>Categoría:</strong> {producto.category}</p>
                    <p className="card-text"><strong>Descripción:</strong> {producto.description}</p>
                    <p className="card-text"><strong>Stock:</strong> {producto.stock}</p>

                    {/*
                      Botón de favorito con ícono de corazón.
                      btn: Clase base para botón.
                      btn-outline-danger: Botón con borde rojo y fondo transparente (no favorito).
                      btn-danger: Botón con fondo rojo (es favorito).
                      mb-3: Margen inferior.
                    */}
                    <button
                        className={`btn ${esFavorito ? 'btn-danger' : 'btn-outline-danger'} mb-3`}
                        onClick={() => dispatch(toggleFavorito(producto.id))}
                        aria-label={esFavorito ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                    >
                        {/* bi bi-heart-fill: Corazón relleno (favorito). */}
                        {/* bi bi-heart: Contorno de corazón (no favorito). */}
                        <i className={`bi ${esFavorito ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                        {/* Opcional: Texto junto al ícono */}
                        <span className="ms-2">
                            {esFavorito ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                        </span>
                    </button>

                    {/* d-flex gap-2: Utilidad de Bootstrap para flexbox con espacio entre elementos. */}
                    <div className="d-flex gap-2 mt-auto"> {/* mt-auto: Empuja el botón hacia abajo */}
                        {/* btn btn-secondary: Botón secundario para volver a la lista. */}
                        <Link to='/lista' className="btn btn-secondary">Volver a la lista</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detalles;