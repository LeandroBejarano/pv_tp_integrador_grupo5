import React from 'react';

// Importo las imágenes
import logo20 from '../assets/logo20.png';
import logo21 from '../assets/logo21.png';
import logo22 from '../assets/logo22.png';
import logo23 from '../assets/logo23.png';
import logo24 from '../assets/logo24.png';
import logo25 from '../assets/logo25.png';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

function Inicio() {
    // Arreglo de importaciones de imágenes para un mapeo sencillo en el carrusel
    const images = [logo20, logo21, logo22, logo23, logo24, logo25];
    const location = useLocation();

    useEffect(()=>{
        if (location.state?.logeado){
            toast.success("Sesion iniciada exitosamente");
        }
    },[location.state])

    return (
        <div className="card p-4 shadow-sm text-center bg-light">
            <h1 className="display-3 fw-bold mb-4 tienda-de-todo-title">De Todo</h1>
            <p className="lead mt-3 text-muted">
                Explora nuestra amplia selección de productos y marca tus favoritos.
            </p>

            {/* Carrusel de Bootstrap para las imágenes */}
            <div id="carouselExampleIndicators" className="carousel slide mt-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                            aria-current={index === 0 ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img
                                src={image}
                                className="d-block w-100 img-carousel"
                                alt={`Tienda de Todo - Slide ${index + 1}`}
                                style={{ height: "300px", objectFit: "contain" }}
                            />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: "invert(1)" }}></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: "invert(1)" }}></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>

            {/* Botón adicional para ir a la lista de productos */}
            <div className="mt-5">
                <p className="lead">¡Encuentra todo lo que necesitas en un solo lugar!</p>
                <a href="/lista" className="btn btn-primary btn-lg">Ver Productos</a>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default Inicio;
