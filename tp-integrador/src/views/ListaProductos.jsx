import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts, toggleFavorito} from "../services/ProductsSlice";
import {Link} from "react-router-dom";

/**
 * Componente que muestra una lista de productos.
 * Permite ver detalles de cada producto y gestionarlos como favoritos.
 * Implementa la carga de productos y la interacción con el estado de favoritos de Redux.
 */
function ListaProductos() {
    // useDispatch: Hook para despachar acciones a la store de Redux.
    const dispatch = useDispatch();
    // useSelector: Hooks para acceder a partes del estado de Redux.
    const productos = useSelector(state => state.products.lista);
    const favoritos = useSelector(state => state.products.favoritos);
    const status = useSelector(state => state.products.status); // Estado de la carga de productos.

    // useEffect: Hook para efectos secundarios (como la carga de datos).
    // Se ejecuta una vez al montar el componente si el estado es 'idle'.
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts()); // Despacha la acción para cargar los productos.
        }
    }, [status, dispatch]); // Dependencias: se re-ejecuta si 'status' o 'dispatch' cambian.

    // Muestra un mensaje de carga mientras los productos están siendo cargados.
    if (status === 'loading') return <p className="text-center my-5">Cargando lista...</p>;

    return (
        <div className="my-5"> {/* my-5: Margen vertical para separar del navbar y footer */}
            <h2 className="mb-4 text-center">Lista de Productos</h2>
            {/*
              row: Contenedor para columnas en el sistema de grid de Bootstrap.
              row-cols-1 row-cols-md-2 row-cols-lg-3: Define cuántas columnas por fila
                en diferentes tamaños de pantalla (1 en móvil, 2 en md, 3 en lg).
              g-4: Espacio (gutter) de 4 unidades entre columnas.
            */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {/* Itera sobre la lista de productos para renderizar cada uno */}
                {productos.map(producto => (
                    // col: Columna individual en el grid.
                    // mb-4: Margen inferior para cada tarjeta.
                    <div key={producto.id} className="col mb-4">
                        {/*
                          card: Tarjeta de Bootstrap.
                          h-100: Asegura que todas las tarjetas en una fila tengan la misma altura.
                          shadow-sm: Pequeña sombra para un efecto de elevación.
                          d-flex flex-column: Hace que el contenido de la tarjeta sea un flexbox de columna.
                        */}
                        <div className="card h-100 shadow-sm d-flex flex-column">
                            <img
                                src={producto.image}
                                alt={producto.title}
                                // card-img-top: Estilo para imagen superior de tarjeta.
                                // img-fluid: La imagen se ajusta al tamaño del contenedor.
                                // p-3: Padding de 3 unidades dentro de la imagen.
                                className="card-img-top img-fluid p-3"
                                // Estilos en línea para un tamaño y ajuste consistente de la imagen.
                                style={{height: '200px', objectFit: 'contain'}}
                            />
                            {/* card-body: Sección principal del contenido de la tarjeta. */}
                            {/* d-flex flex-column: Permite que el contenido del body sea un flexbox de columna. */}
                            {/* p-3: Padding de 3 unidades. */}
                            <div className="card-body d-flex flex-column p-3">
                                <h5 className="card-title text-center mb-2">{producto.title}</h5>
                                <p className="card-text"><strong>Precio:</strong> ${producto.price.toFixed(2)}</p>
                                <p className="card-text text-muted">Categoría: {producto.category}</p>
                                {/*
                                  mt-auto: Margen superior automático, empuja este div al fondo
                                           cuando el contenedor es flex-column.
                                  d-grid gap-2: Utilidad de Bootstrap para una cuadrícula que organiza
                                                elementos en una columna con espacio entre ellos.
                                */}
                                <div className="mt-auto d-grid gap-2">
                                    {/* btn btn-primary: Botón primario de Bootstrap. */}
                                    <Link to={`/lista/${producto.id}`} className="btn btn-primary">
                                        Ver Detalles
                                    </Link>
                                    {/*
                                      Botón de favorito con ícono de corazón.
                                      btn: Clase base para botón.
                                      btn-outline-danger: Botón con borde rojo y fondo transparente (no favorito).
                                      btn-danger: Botón con fondo rojo (es favorito).
                                      w-100: Ancho completo.
                                      mt-2: Margen superior.
                                    */}
                                    <button
                                        className={`btn ${favoritos.includes(producto.id) ? 'btn-danger' : 'btn-outline-danger'} w-100 mt-2`}
                                        onClick={() => dispatch(toggleFavorito(producto.id))}
                                        aria-label={favoritos.includes(producto.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                                    >
                                        {/* bi bi-heart-fill: Corazón relleno (favorito). */}
                                        {/* bi bi-heart: Contorno de corazón (no favorito). */}
                                        <i className={`bi ${favoritos.includes(producto.id) ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                                        {/* Opcional: Texto junto al ícono */}
                                        <span className="ms-2">
                                            {favoritos.includes(producto.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListaProductos;