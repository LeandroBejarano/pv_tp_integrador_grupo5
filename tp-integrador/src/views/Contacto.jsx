import React from 'react';
import {Link} from 'react-router-dom';

/**
 * Componente de la página de Contacto.
 * Muestra información de contacto de la tienda con datos inventados.
 * Utiliza clases de Bootstrap para el diseño y Link de React Router para la navegación.
 */
function Contacto() {
    return (
        // card: Contenedor principal con estilo de tarjeta de Bootstrap.
        // p-4: Padding de 4 unidades en todos los lados.
        // shadow-sm: Una pequeña sombra para dar relieve.
        // text-center: Centra todo el texto dentro de este div.
        // my-5: Margen vertical (top y bottom) de 5 unidades para separarlo del navbar y footer.
        <div className="card p-4 shadow-sm text-center my-5">
            {/* card-title: Estilo para el título de la tarjeta. */}
            {/* display-5: Un tamaño de texto de encabezado más grande. */}
            {/* mb-4: Margen inferior de 4 unidades. */}
            <h2 className="card-title display-5 mb-4">Contáctanos</h2>

            {/* lead: Clase de Bootstrap para un párrafo destacado. */}
            <p className="lead">
                ¡Estamos aquí para ayudarte! Ponte en contacto con nosotros para cualquier consulta o comentario.
            </p>

            {/* mt-4: Margen superior de 4 unidades. */}
            {/* text-start: Alinea el texto a la izquierda dentro de este div. */}
            {/* mx-auto: Centra el div horizontalmente. */}
            {/* style={{ maxWidth: '600px' }}: Estilo en línea para limitar el ancho del contenido. */}
            <div className="mt-4 text-start mx-auto" style={{maxWidth: '600px'}}>
                <p>
                    <strong>Correo Electrónico:</strong> {/* Enlace mailto para enviar correos */}
                    <a href="mailto:info@tiendaonline.com" className="text-decoration-none text-primary">
                        info@tiendaonline.com
                    </a>
                </p>
                <p>
                    <strong>Teléfono:</strong> {/* Enlace tel para realizar llamadas */}
                    <a href="tel:+54938812345678" className="text-decoration-none text-primary">
                        +54 9 388 1234-5678
                    </a>
                </p>
                <p><strong>Dirección:</strong> Av. Ficticia 123, Jujuy, Argentina</p>
                <p><strong>Horario de Atención:</strong> Lunes a Viernes, de 9:00 a 18:00 hs (GMT-3)</p>
            </div>

            {/* mt-4: Margen superior para la sección de redes sociales. */}
            <p className="mt-4">
                Síguenos en nuestras redes sociales:
                <br/>
                {/* Enlaces a redes sociales con iconos de Bootstrap Icons (bi) */}
                {/* text-primary, text-info, text-danger: Clases de color de Bootstrap. */}
                {/* mx-2: Margen horizontal entre iconos. */}
                {/* fs-4: Tamaño de fuente de 4 unidades (Bootstrap). */}
                <a href="https://facebook.com/tiendaonline" target="_blank" rel="noopener noreferrer"
                   className="text-primary mx-2">
                    <i className="bi bi-facebook fs-4"></i>
                </a>
                <a href="https://twitter.com/tiendaonline" target="_blank" rel="noopener noreferrer"
                   className="text-info mx-2">
                    <i className="bi bi-twitter fs-4"></i>
                </a>
                <a href="https://instagram.com/tiendaonline" target="_blank" rel="noopener noreferrer"
                   className="text-danger mx-2">
                    <i className="bi bi-instagram fs-4"></i>
                </a>
            </p>

            {/* mt-4: Margen superior para el botón. */}
            <div className="mt-4">
                {/* Link: Componente de React Router para navegar a la ruta principal. */}
                {/* btn btn-primary btn-lg: Botón de Bootstrap con estilo primario y tamaño grande. */}
                <Link to="/" className="btn btn-primary btn-lg">Volver a la Página Principal</Link>
            </div>
        </div>
    );
}

export default Contacto;