import React from 'react';
import {Link} from 'react-router-dom';

/**
 * Componente de la página de Política de Privacidad.
 * Muestra una política de privacidad inventada con secciones sobre recopilación, uso y seguridad de datos.
 * Utiliza clases de Bootstrap para el diseño y Link de React Router para la navegación.
 */
function Privacidad() {
    return (
        // card: Contenedor principal con estilo de tarjeta.
        // p-4: Padding de 4 unidades.
        // shadow-sm: Sombra pequeña.
        // my-5: Margen vertical (top y bottom) de 5 unidades.
        <div className="card p-4 shadow-sm my-5">
            {/* card-title: Estilo para el título. */}
            {/* display-5: Tamaño de encabezado grande. */}
            {/* text-center: Centra el texto. */}
            {/* mb-4: Margen inferior. */}
            <h2 className="card-title display-5 text-center mb-4">Política de Privacidad</h2>

            {/* lead: Párrafo destacado. */}
            {/* text-muted: Texto de color gris claro. */}
            <p className="lead text-muted text-center">Última actualización: 15 de junio de 2025</p>

            {/* mt-4: Margen superior para cada sección. */}
            <h3 className="mt-4">1. Recopilación de Información</h3>
            <p>Recopilamos varios tipos de información para proporcionar y mejorar nuestro servicio, incluyendo:</p>
            <ul>
                <li><strong>Datos Personales:</strong> Nombre, dirección de correo electrónico, dirección postal, número
                    de teléfono, etc., cuando realiza una compra o se registra.
                </li>
                <li><strong>Datos de Uso:</strong> Información sobre cómo se accede y utiliza el servicio (ej. páginas
                    visitadas, tiempo en el sitio, etc.).
                </li>
                <li><strong>Datos de Transacción:</strong> Detalles de productos o servicios que ha adquirido.</li>
            </ul>

            <h3 className="mt-4">2. Uso de la Información</h3>
            <p>Utilizamos la información recopilada para diversos fines:</p>
            <ul>
                <li>Para proporcionar y mantener el servicio.</li>
                <li>Para notificarle sobre cambios en nuestro servicio.</li>
                <li>Para permitirle participar en funciones interactivas de nuestro servicio cuando elija hacerlo.</li>
                <li>Para proporcionar atención al cliente.</li>
                <li>Para analizar o recopilar información valiosa para que podamos mejorar nuestro servicio.</li>
                <li>Para monitorear el uso del servicio.</li>
                <li>Para detectar, prevenir y abordar problemas técnicos.</li>
            </ul>

            <h3 className="mt-4">3. Retención de Datos</h3>
            <p>
                Retendremos sus Datos Personales solo durante el tiempo que sea necesario para los fines establecidos en
                esta
                Política de Privacidad. Retendremos y utilizaremos sus Datos Personales en la medida necesaria para
                cumplir con
                nuestras obligaciones legales (por ejemplo, si estamos obligados a retener sus datos para cumplir con
                las leyes aplicables),
                resolver disputas y hacer cumplir nuestros acuerdos legales y políticas.
            </p>

            <h3 className="mt-4">4. Transferencia de Datos</h3>
            <p>
                Su información, incluidos los Datos Personales, puede ser transferida a, y mantenida en, computadoras
                ubicadas
                fuera de su estado, provincia, país u otra jurisdicción gubernamental donde las leyes de protección de
                datos
                pueden diferir de las de su jurisdicción.
            </p>
            <p>
                Su consentimiento a esta Política de Privacidad, seguido de su envío de dicha información, representa su
                acuerdo
                con esa transferencia.
            </p>

            <h3 className="mt-4">5. Divulgación de Datos</h3>
            <p>Podemos divulgar sus Datos Personales de buena fe cuando dicha acción sea necesaria para:</p>
            <ul>
                <li>Cumplir con una obligación legal.</li>
                <li>Proteger y defender los derechos o propiedad de "Tienda Online".</li>
                <li>Prevenir o investigar posibles irregularidades en relación con el servicio.</li>
                <li>Proteger la seguridad personal de los usuarios del servicio o del público.</li>
                <li>Protegerse contra la responsabilidad legal.</li>
            </ul>

            <h3 className="mt-4">6. Seguridad de los Datos</h3>
            <p>
                La seguridad de sus datos es importante para nosotros, pero recuerde que ningún método de transmisión a
                través de Internet
                o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios
                comercialmente aceptables
                para proteger sus Datos Personales, no podemos garantizar su seguridad absoluta.
            </p>

            <h3 className="mt-4">7. Sus Derechos de Protección de Datos</h3>
            <p>
                En ciertas circunstancias, usted tiene derechos de protección de datos. Estos incluyen el derecho a
                acceder,
                actualizar o eliminar la información que tenemos sobre usted.
            </p>

            <h3 className="mt-4">8. Cambios en esta Política de Privacidad</h3>
            <p>
                Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio
                publicando la nueva Política de Privacidad en esta página.
            </p>
            <p>
                Se le aconseja revisar esta Política de Privacidad periódicamente para cualquier cambio. Los cambios a
                esta
                Política de Privacidad son efectivos cuando se publican en esta página.
            </p>

            {/* mt-4: Margen superior para el botón. */}
            {/* text-center: Centra el botón. */}
            <div className="mt-4 text-center">
                {/* Link: Navega a la ruta principal. */}
                {/* btn btn-primary btn-lg: Botón de Bootstrap. */}
                <Link to="/" className="btn btn-primary btn-lg">Volver a la Página Principal</Link>
            </div>
        </div>
    );
}

export default Privacidad;