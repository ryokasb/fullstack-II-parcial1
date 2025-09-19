const usuarioActivo = sessionStorage.getItem("usuarioActivo");

// Si no hay usuario activo, redirige al login
if(!usuarioActivo){
    window.location.replace("login.html");
} else {
    // mostrar contenido de usuario
    document.getElementById("user").innerText = ` ${usuarioActivo}`;
}