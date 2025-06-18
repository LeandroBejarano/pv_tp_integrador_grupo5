import ImagesDefault from '../services/ImagesDefault';
import { useDispatch, useSelector } from 'react-redux';
import { agregarProducto } from "../services/ProductsSlice"
import { useState } from 'react';
import highestId from '../components/highestId';

function CrearProducto() {
    const dispatch = useDispatch();
    const productos = useSelector(state => state.products.lista);

    const [nuevoProducto, setNuevoProducto] = useState({
        id: '',
        title: '',
        description: '',
        price: '',
        category: '',
        rating: '',
        image: '',
    });

    const images = ImagesDefault();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoProducto(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = highestId(productos);
        const productoFinal = {...nuevoProducto, id}; // Creo un nuevo producto que contiene el id
        dispatch(agregarProducto(productoFinal));
        setNuevoProducto({
            title: '',
            description: '',
            price: '',
            category: '',
            rating: '',
            image: '',
        });
        alert(`Producto agregado, id: ${id}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Agregar nuevo producto</h1>
                <label>Título:</label>
                <input type="text" name="title" value={nuevoProducto.title} onChange={handleChange} />

                <label>Descripción:</label>
                <textarea name="description" value={nuevoProducto.description} onChange={handleChange} />

                <label>Precio:</label>
                <input type="number" name="price" value={nuevoProducto.price} onChange={handleChange} />

                <label>Categoría:</label>
                <select name="category" value={nuevoProducto.category} onChange={handleChange}>
                    <option value="">Seleccionar</option>
                    <option value="men's clothing">Men's clothing</option>
                    <option value="women's clothing">Women's clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelry">Jewelry</option>
                </select>

                <label>Rating:</label>
                <input
                    type="number"
                    name="rating"
                    value={nuevoProducto.rating}
                    onChange={handleChange}
                    min="0"
                    max="5"
                    step="0.1"
                />
                <label>Seleccionar imagen:</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "10px" }}>
                    {images.map((img, index) => (
                        <img key={index} src={img}
                            alt={`img_${index}`}
                            width="70"
                            onClick={() => setNuevoProducto(prev => ({ ...prev, image: img }))}
                        />
                    ))}
                </div>
                {nuevoProducto.image && (
                    <div>
                        <img src={nuevoProducto.image} alt="Previsualización" width="60" />
                    </div>
                )}
            </div>

            <button type="submit">Agregar Producto</button>
        </form>
    );
};

export default CrearProducto