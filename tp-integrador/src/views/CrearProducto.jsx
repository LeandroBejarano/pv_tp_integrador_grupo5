import ImagesDefault from '../services/ImagesDefault';
import { useDispatch, useSelector } from 'react-redux';
import { agregarProducto, fetchProducts } from '../services/ProductsSlice';
import { useState, useEffect } from 'react';
import highestId from '../components/highestId';
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function CrearProducto() {
    const dispatch = useDispatch();
    const productos = useSelector(state => state.products.lista);
    const navigate = useNavigate();

    const [nuevoProducto, setNuevoProducto] = useState({
        id: '',
        title: '',
        description: '',
        price: '',
        category: '',
        rating: 0,
        image: '',
    });

    useEffect(() => {
        if (productos.length === 0) {
            dispatch(fetchProducts());
        }
    }, [productos, dispatch]);

    const images = ImagesDefault();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoProducto(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nuevoProducto.image) {
            toast.error("Seleccione una imagen y vuelva a intentarlo")
            return;
        }
        const id = highestId(productos);
        const productoFinal = {
            ...nuevoProducto,
            id: id,
            price: parseFloat(nuevoProducto.price),
            rating: { rate: parseFloat(nuevoProducto.rating), count: 100 }
        };

        dispatch(agregarProducto(productoFinal));

        setNuevoProducto({
            id: '',
            title: '',
            description: '',
            price: '',
            category: '',
            rating: 0,
            image: '',
        });
        toast.success("Producto creado exitosamente")
        setTimeout(()=>{
            navigate('/lista');
        },5000);
    };

    return (
        // Card de Bootstrap con padding y sombra para destacar el formulario, centrado y con ancho máximo limitado
        <div className="card p-4 shadow-sm mx-auto my-4" style={{ maxWidth: '600px' }}>
            {/* Título centrado con margen inferior */}
            <h2 className="mb-4 text-center">Crear Nuevo Producto</h2>

            {/* Formulario estilizado con Bootstrap */}
            <form onSubmit={handleSubmit}>
                {/* Grupo de formulario con margen inferior */}
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Título:</label>
                    {/* Campo de texto con clase form-control para estilo Bootstrap */}
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={nuevoProducto.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descripción:</label>
                    {/* Textarea con clase form-control para formato uniforme */}
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={nuevoProducto.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Precio:</label>
                    {/* Input numérico con form-control y validación de mínimo y paso decimal */}
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        value={nuevoProducto.price}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Categoría:</label>
                    {/* Select estilizado con form-select de Bootstrap */}
                    <select
                        className="form-select"
                        id="category"
                        name="category"
                        value={nuevoProducto.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecciona una categoría</option>
                        <option value="men's clothing">Men's clothing</option>
                        <option value="women's clothing">Women's clothing</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelry">Jewelry</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="rating" className="form-label">Rating (0-5):</label>
                    {/* Input numérico con controles para establecer valores decimales entre 0 y 5 */}
                    <input
                        type="number"
                        className="form-control"
                        id="rating"
                        name="rating"
                        value={nuevoProducto.rating}
                        onChange={handleChange}
                        min="0"
                        max="5"
                        step="0.1"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Seleccionar imagen:</label>
                    {/* Flexbox para mostrar miniaturas en fila con separación (Bootstrap: d-flex, flex-wrap, gap-2) */}
                    <div className="d-flex flex-wrap gap-2 mb-3">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`img_${index}`}
                                // img-thumbnail: bordes redondeados y padding, border-primary y border-3 si está seleccionada
                                className={`img-thumbnail ${nuevoProducto.image === img ? 'border border-primary border-3' : ''}`}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    objectFit: 'cover',
                                    cursor: 'pointer'
                                }}
                                onClick={() => setNuevoProducto(prev => ({ ...prev, image: img }))}
                            />
                        ))}
                    </div>

                    {/* Imagen seleccionada con previsualización centrada y estilo responsive */}
                    {nuevoProducto.image && (
                        <div className="text-center">
                            <p className="mb-2">Previsualización de la imagen:</p>
                            <img
                                src={nuevoProducto.image}
                                alt="Previsualización"
                                className="img-fluid rounded shadow-sm"
                                style={{ maxWidth: '150px' }}
                            />
                        </div>
                    )}
                </div>

                {/* Botón de envío con estilo de éxito y ancho completo */}
                <button type="submit" className="btn btn-success w-100">Agregar Producto</button>
            </form>
            <ToastContainer/>
        </div>
    );
}

export default CrearProducto;