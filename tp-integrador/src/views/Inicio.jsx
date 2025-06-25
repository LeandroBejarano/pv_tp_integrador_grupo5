function Inicio() {
    return (
        // card: Un componente de Bootstrap para agrupar contenido.
        // p-4: Padding de 4 unidades.
        // shadow-sm: Sombra pequeña para dar profundidad.
        // text-center: Centra el texto dentro del div.
        <div className="card p-4 shadow-sm text-center">
            {/* display-4: Un tamaño de encabezado más grande de Bootstrap. */}
            <h1 className="display-4">Bienvenido a la Tienda Online</h1>
            <p className="lead mt-3">
                Explora nuestra amplia selección de productos y marca tus favoritos.
            </p>
        </div>
    )
}

export default Inicio