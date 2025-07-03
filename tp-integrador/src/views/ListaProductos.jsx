import { useEffect, useState } from "react"; //
import { useDispatch, useSelector } from "react-redux"; //
import { fetchProducts, toggleFavorito, eliminarProducto } from "../services/ProductsSlice"; //
import { Link, useLocation } from "react-router-dom"; //
import { toast, ToastContainer } from "react-toastify"
import Carga from "../components/Carga";
import TextoGris from "../components/TextoGris";

function ListaProductos() {
    const dispatch = useDispatch(); //
    const location = useLocation();
    const productos = useSelector(state => state.products.lista); //
    const favoritos = useSelector(state => state.products.favoritos); //
    const status = useSelector(state => state.products.status); //
    const [modal, setModal] = useState(null);

    useEffect(() => { //
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch])

    useEffect(() => {
        if (location.state?.eliminado) {
            toast.success("Producto eliminado exitosamente");
        }
        if (location.state?.editado) {
            toast.success("Cambios guardados exitosamente");
        }
        if (location.state?.creado) {
            toast.success("Producto creado exitosamente");
        }
    }, [location.state]);

    const handleEliminar = (id) => {
        dispatch(eliminarProducto(id));
        toast.success("Producto eliminado exitosamente");
        setModalAbiertoPara(null);
    };

    if (status === 'loading') return <Carga />

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
                                <TextoGris>Precio: ${producto.price}</TextoGris>
                                <TextoGris>Categoría: {producto.category}</TextoGris>
                                {/* d-grid gap-2: Botones apilados con espaciado, d-md-block para que se apilen en md. */}
                                {/* mt-auto: Empuja el contenido hacia la parte inferior de la tarjeta. */}
                                <div className="mt-auto d-grid gap-2">
                                    {/* btn btn-primary: Botón primario de Bootstrap. */}
                                    <div className="mt-auto d-flex justify-content-center gap-2">
                                        <Link to={`/lista/${producto.id}`} className="btn btn-primary">Ver Detalles</Link> {/* */}
                                        <button className="btn btn-danger" onClick={() => setModal(producto.id)} >Eliminar</button>
                                        <Link to={`/lista/${producto.id}/editar`} className='btn btn-danger'>Editar</Link>
                                    </div>
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

                        {/* Modal para eliminar */}
                        {modal === producto.id && (
                            <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Confirmar eliminación</h5>
                                            <button type="button" className="btn-close" onClick={() => setModal(null)} />
                                        </div>
                                        <div className="modal-body">
                                            <p>¿Estás seguro de que deseas eliminar este producto?</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-secondary" onClick={() => setModal(null)}>
                                                Cancelar
                                            </button>
                                            <button className="btn btn-danger" onClick={() => handleEliminar(producto.id)}>
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
    );
}

export default ListaProductos