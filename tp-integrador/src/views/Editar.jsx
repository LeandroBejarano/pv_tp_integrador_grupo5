import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { editarProducto } from "../services/ProductsSlice";
import ImagesDefault from '../services/ImagesDefault';

function Editar() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const producto = useSelector(state => state.products.lista.find(p => p.id === parseInt(id)));
    const images = ImagesDefault();

    const [editarProd, setEditarProd] = useState({
        title: '',
        description: '',
        price: '',
        category: '',
        rating: 0,
        image: '',
    });

    useEffect(() => {
        if (producto) {
            setEditarProd({ ...producto });
        }
    }, [producto])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditarProd(prev => ({ ...prev, [name]: value }));
    }

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editarProducto(editarProd));
        navigate("/lista", { state: { editado: true } });
    }

    if (!producto) return <p className="text-center my-5">Producto no encontrado</p>;

    return (
        <div>
            <form onSubmit={handleEdit}>
                <h2>Editar Producto</h2>
                <label>
                    Título:
                    <input type="text" name="title" value={editarProd.title} onChange={handleChange} required />
                </label>
                <label>
                    Descripción:
                    <input type="description" name="description" value={editarProd.description} onChange={handleChange} required />
                </label>
                <label>
                    Precio:
                    <input type="number" name="price" value={editarProd.price} onChange={handleChange} min="0" step="0.01" required />
                </label>
                <label>
                    Categoría:
                    <select name="category" value={editarProd.category} onChange={handleChange}>
                        <option value="">Selecciona una categoría</option>
                        <option value="men's clothing">Men's clothing</option>
                        <option value="women's clothing">Women's clothing</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelry">Jewelry</option>
                    </select>
                </label>
                <label>
                    Rating:
                    <input type="number" name="rating" value={editarProd.rating} onChange={handleChange} min="0" max="5" step="0.1" required/>
                </label>
                <label>
                    Selecciona una imagen:
                    <div>
                        {images.map((img, index) => (
                            <img key={index} src={img} alt={`img_${index}`}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    objectFit: 'cover',
                                    cursor: 'pointer',
                                    border: editarProd.image === img ? '2px solid blue' : 'none'
                                }}
                                onClick={() => setEditarProd(prev => ({ ...prev, image: img }))}
                            />
                        ))}
                    </div>
                </label>
                <Link to="/lista" className="btn btn-secondary" >Cancelar</Link>
                <button type="submit">Guardar Cambios</button>
            </form>
        </div>
    )
}

export default Editar