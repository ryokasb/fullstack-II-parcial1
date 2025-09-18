const crear = document.getElementById("btn_crear");

    crear.addEventListener("click", function(e){
        e.preventDefault();

        const user = document.getElementById('txt_nusuario_crear').value.trim();
        const pass = document.getElementById('txt_contraseña_crear').value;
        const confirm_pass = document.getElementById('txt_confirmacion_crear').value;

        if(!user || !pass || !confirm_pass){
            document.getElementById("mensaje_crear").innerText = "Completa todos los campos";
            return;
        }

        if(pass !== confirm_pass){
            document.getElementById("mensaje_crear").innerText = "Las contraseñas no coinciden";
            return;
        }

        if(existeUsuario(user)){
            document.getElementById("mensaje_crear").innerText = "Usuario ya existente";
            return;
        }

        agregarUsuario(user, pass);
        document.getElementById("mensaje_crear").innerText = "Usuario creado correctamente";

        document.getElementById('txt_nusuario_crear').value = "";
        document.getElementById('txt_contraseña_crear').value = "";
        document.getElementById('txt_confirmacion_crear').value = "";
    });
