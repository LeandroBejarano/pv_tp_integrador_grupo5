import React from 'react';
import {Link} from 'react-router-dom';

/**
 * Componente de la página de Términos de Servicio.
 * Muestra un conjunto de términos y condiciones inventados para una tienda online.
 * Utiliza clases de Bootstrap para el diseño y Link de React Router para la navegación.
 */
function Terminos() {
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
            <h2 className="card-title display-5 text-center mb-4">Términos de Servicio</h2>

            {/* lead: Párrafo destacado. */}
            {/* text-muted: Texto de color gris claro. */}
            <p className="lead text-muted text-center">Última actualización: 15 de junio de 2025</p>

            {/* mt-4: Margen superior para cada sección. */}
            <h3 className="mt-4">1. Aceptación de los Términos</h3>
            <p>
                Al acceder y utilizar los servicios de "Tienda Online", usted acepta estar sujeto a estos Términos de
                Servicio.
                Si no está de acuerdo con alguna parte de los términos, no podrá acceder al servicio.
            </p>

            <h3 className="mt-4">2. Uso del Servicio</h3>
            <p>
                El uso de nuestro servicio es estrictamente personal. Usted se compromete a no reproducir, duplicar,
                copiar, vender,
                revender ni explotar ninguna parte del servicio, uso del servicio o acceso al servicio sin el permiso
                expreso
                por escrito de nuestra parte.
            </p>

            <h3 className="mt-4">3. Productos y Servicios</h3>
            <p>
                Nos reservamos el derecho de modificar o descontinuar cualquier producto o servicio sin previo aviso en
                cualquier momento.
                No seremos responsables ante usted ni ante ningún tercero por cualquier modificación, cambio de precio,
                suspensión o descontinuación del servicio.
            </p>

            <h3 className="mt-4">4. Política de Precios</h3>
            <p>
                Los precios de nuestros productos están sujetos a cambios sin previo aviso. Nos esforzamos por asegurar
                la
                exactitud de la información de precios, pero errores tipográficos o de precios pueden ocurrir.
            </p>

            <h3 className="mt-4">5. Enlaces a Sitios de Terceros</h3>
            <p>
                Nuestro servicio puede contener enlaces a sitios web de terceros que no son propiedad ni están
                controlados por
                "Tienda Online". No tenemos control ni asumimos responsabilidad por el contenido, las políticas de
                privacidad
                o las prácticas de los sitios o servicios de terceros.
            </p>

            <h3 className="mt-4">6. Limitación de Responsabilidad</h3>
            <p>
                En ningún caso "Tienda Online", sus directores, empleados, socios, agentes, proveedores o afiliados
                serán
                responsables de daños indirectos, incidentales, especiales, consecuenciales o punitivos, incluidos,
                entre otros,
                la pérdida de beneficios, datos, uso, fondo de comercio u otras pérdidas intangibles, resultantes de (i)
                su acceso
                o uso o incapacidad de acceder o usar el servicio; (ii) cualquier conducta o contenido de cualquier
                tercero en el servicio;
                (iii) cualquier contenido obtenido del servicio; y (iv) el acceso, uso o alteración no autorizados de
                sus transmisiones o contenido,
                ya sea basado en garantía, contrato, agravio (incluida negligencia) o cualquier otra teoría legal,
                hayamos sido o no informados
                de la posibilidad de tales daños, e incluso si se encuentra que un remedio establecido en el presente ha
                fallado en su propósito esencial.
            </p>

            <h3 className="mt-4">7. Ley Aplicable</h3>
            <p>
                Estos Términos se regirán e interpretarán de acuerdo con las leyes de Argentina, sin tener en cuenta sus
                disposiciones sobre conflictos de leyes.
            </p>

            <h3 className="mt-4">8. Cambios en los Términos</h3>
            <p>
                Nos reservamos el derecho, a nuestra entera discreción, de modificar o reemplazar estos Términos en
                cualquier momento.
                Si una revisión es material, intentaremos proporcionar al menos 30 días de aviso antes de que los nuevos
                términos
                entren en vigencia. Lo que constituye un cambio material se determinará a nuestra entera discreción.
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

export default Terminos;