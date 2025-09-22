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

// Renderizar libros en el HTML
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