import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { editarProducto } from "../services/ProductsSlice";
import ImagesDefault from '../services/ImagesDefault';
import Carga from "../components/Carga";

function Editar() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const producto = useSelector(state => state.products.lista.find(p => p.id === parseInt(id)));
    const images = ImagesDefault();

    // Estado local para manejar los datos del formulario de edición.
    const [editarProd, setEditarProd] = useState({
        title: '',
        description: '',
        price: '',
        category: '',
        image: '',
    });

    // useEffect para cargar los datos del producto en el formulario cuando se monta el componente.
    useEffect(() => {
        if (producto) {
            // Se utiliza un objeto temporal para el rating, ya que viene anidado en la API.
            const ratingValue = producto.rating && typeof producto.rating === 'object' ? producto.rating.rate : producto.rating;
            setEditarProd({
                ...producto,
                rating: ratingValue // Asigna el valor de rating desempaquetado.
            });
        }
    }, [producto])

    // Maneja los cambios en los campos del formulario.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditarProd(prev => ({ ...prev, [name]: value }));
    }

    // Maneja el envío del formulario.
    const handleEdit = (e) => {
        e.preventDefault();
        // Re-estructura el objeto rating para que coincida con el formato original antes de enviarlo.
        const productoFinal = {
            ...editarProd,
            price: parseFloat(editarProd.price),
            rating: { rate: parseFloat(editarProd.rating), count: producto.rating.count || 100 } // Mantiene el count original.
        };
        dispatch(editarProducto(productoFinal));
        navigate("/lista", { state: { editado: true } });
    }

    // Mensaje de carga o si el producto no se encuentra.
    if (!producto) return <Carga/>

    return (
        // card: Contenedor principal con estilo de tarjeta de Bootstrap.
        // p-4: Padding de 4 unidades.
        // shadow-sm: Sombra suave para dar profundidad.
        // mx-auto my-4: Margen horizontal automático (centrado) y margen vertical.
        <div className="card p-4 shadow-sm mx-auto my-4" style={{ maxWidth: '600px' }}>
            {/* Título centrado con margen inferior. */}
            <h2 className="mb-4 text-center">Editar Producto</h2>

            <form onSubmit={handleEdit}>
                {/* mb-3: Margen inferior para separar los grupos de formulario. */}
                <div className="mb-3">
                    {/* form-label: Estilo para las etiquetas de formulario. */}
                    <label htmlFor="title" className="form-label">Título:</label>
                    {/* form-control: Estilo principal de Bootstrap para campos de input. */}
                    <input type="text" id="title" className="form-control" name="title" value={editarProd.title} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descripción:</label>
                    {/* El estilo form-control también se aplica a los textarea. */}
                    <textarea id="description" className="form-control" name="description" value={editarProd.description} onChange={handleChange} required rows="3" />
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Precio:</label>
                    <input type="number" id="price" className="form-control" name="price" value={editarProd.price} onChange={handleChange} min="0" step="0.01" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Categoría:</label>
                    {/* form-select: Estilo específico para los menús desplegables. */}
                    <select id="category" name="category" className="form-select" value={editarProd.category} onChange={handleChange} required>
                        <option value="">Selecciona una categoría</option>
                        <option value="men's clothing">Men's clothing</option>
                        <option value="women's clothing">Women's clothing</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelry">Jewelry</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="rating" className="form-label">Rating (0-5):</label>
                    <input type="number" id="rating" className="form-control" name="rating" value={editarProd.rating} onChange={handleChange} min="0" max="5" step="0.1" required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Seleccionar imagen:</label>
                    {/* d-flex, flex-wrap, gap-2: Clases de Flexbox para alinear las imágenes en una fila con espaciado. */}
                    <div className="d-flex flex-wrap gap-2 mb-3">
                        {images.map((img, index) => (
                            <img key={index} src={img} alt={`img_${index}`}
                                // img-thumbnail: Añade un borde redondeado y padding.
                                // Se aplica un borde azul y más grueso si la imagen está seleccionada.
                                className={`img-thumbnail ${editarProd.image === img ? 'border border-primary border-3' : ''}`}
                                style={{ width: '50px', height: '50px', objectFit: 'cover', cursor: 'pointer' }}
                                onClick={() => setEditarProd(prev => ({ ...prev, image: img }))}
                            />
                        ))}
                    </div>
                    {/* Previsualización de la imagen seleccionada. */}
                    {editarProd.image && (
                        <div className="text-center">
                            <p className="mb-2">Previsualización:</p>
                            <img src={editarProd.image} alt="Previsualización" className="img-fluid rounded shadow-sm" style={{ maxWidth: '150px' }} />
                        </div>
                    )}
                </div>

                {/* d-flex gap-2: Contenedor Flexbox para alinear los botones con un espacio entre ellos. */}
                <div className="d-flex gap-2 mt-4">
                    {/* btn btn-secondary: Botón con estilo secundario para acciones de cancelación. */}
                    <Link to="/lista" className="btn btn-secondary w-100">Cancelar</Link>
                    {/* btn btn-primary: Botón con estilo primario para la acción principal del formulario. */}
                    <button type="submit" className="btn btn-primary w-100">Guardar Cambios</button>
                </div>
            </form>
        </div>
    )
}

export default Editar;