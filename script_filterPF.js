const productos = [
    {nombre: "Laptop", categoria: "Electronica"},
    {nombre: "Telefono", categoria: "Electronica"},
    {nombre: "Silla", categoria: "Muebles"},
    {nombre: "Camiseta", categoria: "Ropa"},
    {nombre: "Pantalon", categoria: "Ropa"},
    {nombre: "Gorras", categoria: "Ropa"},
];

const filtrarPorCategoria = (categoria) => {
    return productos.filter(producto =>
        producto.categoria.toLowerCase() === categoria.toLowerCase()
    );
};

const mostrarProductos = (productosFiltrados) => {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = ''; // Limpiamos la lista anterior

    if (productosFiltrados.length === 0) {
        listaProductos.innerHTML = '<li>No se encontraron productos en esta categoría</li>';
        return;
    }

    // Mostrar productos filtrados
    productosFiltrados.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = producto.nombre;
        listaProductos.appendChild(li);
    });
};

// Manejador de evento para el formulario
document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault(); // Prevenimos el envío del formulario (no recargar la página)
    
    const categoria = document.getElementById('categoria').value.trim(); // Trim elimina espacios en blanco

    // Validamos que la categoría no esté vacía
    if (categoria === '') {
        alert('Por favor ingresa una categoría válida');
        return;
    }

    // Llamamos a la función de filtrado
    const productosFiltrados = filtrarPorCategoria(categoria);
    
    // Mostramos los productos filtrados
    mostrarProductos(productosFiltrados);
});
