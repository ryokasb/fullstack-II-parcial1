const libros = [
    { nombre: "El principito", precio: 15000 },
    { nombre: "El libro de la selva", precio: 12000 },
    { nombre: "Alicia en el país de las maravillas", precio: 9500 },
    { nombre: "Don Quijote de la Mancha", precio: 18000 },
    { nombre: "Cien años de soledad", precio: 22000 },
    { nombre: "Orgullo y prejuicio", precio: 13500 },
    { nombre: "Matar a un ruiseñor", precio: 16000 },
    { nombre: "La Odisea", precio: 14000 },
    { nombre: "Harry Potter y la piedra filosofal", precio: 20000 },
    { nombre: "El Hobbit", precio: 17500 }
];

function libropornombre(nombre) {
    return libros.find(lib => lib.nombre.toLowerCase() === nombre.toLowerCase());
}

