console.log('hola')
const usuarios = [
    { username: "diego", password: "1234" },
    { username: "dante", password: "1234" }
];

const ingresar = document.getElementById("btn_ingresar");
const result= document.getElementById("mensaje");

ingresar.addEventListener("click", function(e){

    const username = document.getElementById("txt_nusuario").value;
    const password = document.getElementById("txt_contraseña").value;

    const usuarioEncontrado = usuarios.find(u => u.username === username && u.password === password);

    if(usuarioEncontrado){
        result.innerText = "Login exitoso";
         setTimeout(() => {
            sessionStorage.setItem("usuarioActivo", usuarioEncontrado.username);
            window.location.replace("index.html"); 
       }, 1000);
    } else {
        result.innerText = "Usuario o contraseña incorrectos";
         document.getElementById("txt_nusuario").value = "";
         document.getElementById("txt_contraseña").value = "";
    }
});