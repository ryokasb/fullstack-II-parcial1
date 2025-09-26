const usuarioActivo = sessionStorage.getItem("usuarioActivo");

// Si no hay usuario activo, redirige al login
if(!usuarioActivo){
    window.location.replace("login.html");
} else {
    // mostrar contenido de usuario
    document.getElementById("user").innerText = `${usuarioActivo}`;
}


const form = document.getElementById("form-contacto");

//coloca el nombre del usuario asignado
document.getElementById("nombre").value= `${usuarioActivo}`;

// Manejar el envío
form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    const nombre = form.nombre.value.trim();
    const correo = form.correo.value.trim();
    const mensaje = form.mensaje.value.trim();
   
    

    // Validar campos
    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    // Validar correo simple
    if (!correo.includes("@") || !correo.includes(".")) {
        alert("Ingresa un correo válido.");
        return;
    }

    // Mensaje de éxito
    alert("¡Mensaje enviado! Te responderemos pronto.");

    // Limpiar formulario
    form.reset();
});
