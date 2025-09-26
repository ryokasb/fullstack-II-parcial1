const libros = [
    { nombre: "El principito", precio: 15000, imagen: "el_principito.jpg" },
    { nombre: "El libro de la selva", precio: 12000, imagen: "libro_selva.jpg" },
    { nombre: "Alicia en el país de las maravillas", precio: 9500, imagen: "alicia.jpg" },
    { nombre: "Don Quijote de la Mancha", precio: 18000, imagen: "don_quijote.jpg" },
    { nombre: "Cien años de soledad", precio: 22000, imagen: "cien_anos.jpg" },
    { nombre: "Orgullo y prejuicio", precio: 13500, imagen: "orgullo_prejuicio.jpg" },
    { nombre: "Matar a un ruiseñor", precio: 16000, imagen: "ruisenor.jpg" },
    { nombre: "La Odisea", precio: 14000, imagen: "odisea.jpg" },
    { nombre: "Harry Potter y la piedra filosofal", precio: 20000, imagen: "harry_potter.jpg" },
    { nombre: "El Hobbit", precio: 17500, imagen: "hobbit.jpg" }
];

function libropornombre(nombre) {
    return libros.find(lib => lib.nombre.toLowerCase() === nombre.toLowerCase());
}

// Renderiza los libros
const contenedor = document.getElementById("productos");

libros.forEach((libro, index) => {
    const article = document.createElement("article");
    article.id = `articulo_${index + 1}`;
    article.classList.add("producto");

    article.innerHTML = `
        <img src="src/img/libros/${libro.imagen}" alt="${libro.nombre}">
        <h2>${libro.nombre}</h2>
        <p class="precio">$${libro.precio.toLocaleString("es-CL")}</p>
    `;

    contenedor.appendChild(article);
});

const btnascendente = document.getElementById('ascendente');

btnascendente.addEventListener('click', () => {
    // Ordenar libros por precio ascendente
    const librosOrdenados = [...libros].sort((a, b) => a.precio - b.precio);

    // Vaciar contenedor
    contenedor.innerHTML = '';

    // Renderiza los libros reordenados
    librosOrdenados.forEach((libro, index) => {
        const article = document.createElement("article");
        article.id = `articulo_${index + 1}`;
        article.classList.add("producto");

        article.innerHTML = `
            <img src="src/img/libros/${libro.imagen}" alt="${libro.nombre}">
            <h2>${libro.nombre}</h2>
            <p class="precio">$${libro.precio.toLocaleString("es-CL")}</p>
        `;

        contenedor.appendChild(article);
    });
});

const btndecendente = document.getElementById('decendente');

btndecendente.addEventListener('click', () => {
    // Ordenar libros por precio decendente
    const librosOrdenados = [...libros].sort((b, a) => a.precio - b.precio);

    // Vaciar contenedor
    contenedor.innerHTML = '';

    // Renderiza los libro reordenados
    librosOrdenados.forEach((libro, index) => {
        const article = document.createElement("article");
        article.id = `articulo_${index + 1}`;
        article.classList.add("producto");

        article.innerHTML = `
            <img src="src/img/libros/${libro.imagen}" alt="${libro.nombre}">
            <h2>${libro.nombre}</h2>
            <p class="precio">$${libro.precio.toLocaleString("es-CL")}</p>
        `;

        contenedor.appendChild(article);
    });
});
