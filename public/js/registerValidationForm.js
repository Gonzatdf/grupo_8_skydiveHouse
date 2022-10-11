window.onload = function(){
    
    //Validaciones del formulario registrar producto.

    let form = document.getElementById("form");
    let fullName = document.getElementById("Username");
    let pass = document.getElementById("password");
    let email = document.getElementById("email");
    let image = document.getElementById("image");

    let acceptedExtensions = [".jpg", ".png", ".gif", ".JPG"];

    form.addEventListener('submit', (evt) => {
        
         if(fullName.value == "" || fullName.value == null || fullName.value.length < 1){
            alert("El nombre y apellido son obligatorios.");
            evt.preventDefault();
        }else if(fullName.value.length < 2){
            alert("El nombre y apellido al menos debe contener 2 caracteres.");
            evt.preventDefault();
        }
        if(email.value == "" || email.value == null || email.value.length < 1){
        alert("El email es obligatorio.");
        evt.preventDefault();
        }
        if(!email.value.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)){
            alert("Ingresar un correo valido.");
            evt.preventDefault();
        }
        if (pass.value == "" || pass.value == null || pass.value.length < 1){
            alert("La contraseña es obligatoria.");
            evt.preventDefault();
        }    
        if(!pass.value.match(/^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?¡"'\-_#!%&()=¿]){1})\S{8,}$/)){
            alert("Ingresar al menos 8 caracteres, 1 letra mayuscula, 1 letra minuscula, 1 número y 1 carácter especial");
            evt.preventDefault();
        }
        console.log("archivo" + image.value);
        if(image.value == "" || image.value == null || image.value == undefined){
            alert("Subir una imagen de perfil");
            evt.preventDefault();
        }else {
            let fileExtension = getExtension(image.value);
            if (!acceptedExtensions.includes(fileExtension)){
                alert("Las extensiones permitidas son jpg, png y gif");
                evt.preventDefault();
            }
        }
     });
}

function getExtension(value) {
    let ext = value.split(".");
    return ext[1];
}