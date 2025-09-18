const usuarios = JSON.parse(sessionStorage.getItem("usuarios")) || [
    { username: "diego", password: "1234" },
    { username: "dante", password: "1234" }
];

function guardarUsuarios() {
    sessionStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function agregarUsuario(username, password) {
    usuarios.push({ username, password });
    guardarUsuarios();
}

function buscarUsuario(username, password) {
    return usuarios.find(u => u.username === username && u.password === password);
}

function existeUsuario(username) {
    return usuarios.find(u => u.username === username);
}






