const ingresar = document.getElementById("btn_ingresar");

    ingresar.addEventListener("click", function(e){
        e.preventDefault();

        const username = document.getElementById("txt_nusuario").value;
        const password = document.getElementById("txt_contraseña").value;

        const usuarioEncontrado = buscarUsuario(username, password);

        if(usuarioEncontrado){
            document.getElementById("mensaje").innerText = "Login exitoso";
            setTimeout(() => {
                sessionStorage.setItem("usuarioActivo", usuarioEncontrado.username);
                window.location.replace("index.html"); 
            }, 1000);
        } else {
            document.getElementById("mensaje").innerText = "Usuario o contraseña incorrectos";
            document.getElementById("txt_nusuario").value = "";
            document.getElementById("txt_contraseña").value = "";
        }
    });
