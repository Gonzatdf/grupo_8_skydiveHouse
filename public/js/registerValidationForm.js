window.onload = function(){
    
    //Validaciones del formulario registrar producto.

    let form = document.getElementById("form");
    let fullName = document.getElementById("Username");
    let pass = document.getElementById("password");
    let email = document.getElementById("email");
    let image = document.getElementById("image");

    let acceptedExtensions = [".jpg", ".png", ".gif", ".JPG"];

    form.addEventListener('submit', (evt) => {

        let divErrorFullName = document.getElementById("errorFullName");
        let divErrorEmail = document.getElementById("errorEmail");
        let divErrorPass = document.getElementById("errorPass");
        let divErrorAvatar = document.getElementById("errorAvatar");

        //Se inicializan los divs de errores en vacios.
        divErrorFullName.innerHTML = "";
        divErrorEmail.innerHTML = "";
        divErrorPass.innerHTML = "";
        divErrorAvatar.innerHTML = "";
        
        let countErrors = 0;
        if(fullName.value == "" || fullName.value == null || fullName.value.length < 1){

            countErrors = countErrors + 1;

            divErrorFullName.innerHTML = "El nombre y apellido son obligatorios.";
            if(!divErrorFullName.classList.contains("errorMsg")){
                divErrorFullName.classList.add("errorMsg");
            }

        }else if(fullName.value.length < 2){

            countErrors = countErrors + 1;

            divErrorFullName.innerHTML = "El nombre y apellido al menos debe contener 2 caracteres.";
            if(!divErrorFullName.classList.contains("errorMsg")){
                divErrorFullName.classList.add("errorMsg");
            }
        }

        if(email.value == "" || email.value == null || email.value.length < 1){

            countErrors = countErrors + 1;

            divErrorEmail.innerHTML = "El email es obligatorio.";
            if(!divErrorEmail.classList.contains("errorMsg")){
                divErrorEmail.classList.add("errorMsg");
            }
        }

        if(!email.value.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)){

            countErrors = countErrors + 1;

            divErrorEmail.innerHTML = "Ingresar un correo valido.";
            if(!divErrorEmail.classList.contains("errorMsg")){
                divErrorEmail.classList.add("errorMsg");
            }
        }

        if (pass.value == "" || pass.value == null || pass.value.length < 1){

            countErrors = countErrors + 1;

            divErrorPass.innerHTML = "La contraseña es obligatoria.";
            if(!divErrorPass.classList.contains("errorMsg")){
                divErrorPass.classList.add("errorMsg");
            }
        }

        if(!pass.value.match(/^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?¡"'\-_#!%&()=¿]){1})\S{8,}$/)){
            
            countErrors = countErrors + 1;

            divErrorPass.innerHTML = "Ingresar al menos 8 caracteres, 1 letra mayuscula, 1 letra minuscula, 1 número y 1 carácter especial.";
            if(!divErrorEmail.classList.contains("errorMsg")){
                divErrorEmail.classList.add("errorMsg");
            }
        }

        if(image.value == "" || image.value == null || image.value == undefined){
            
            countErrors = countErrors + 1;

            divErrorAvatar.innerHTML = "Subir una imagen de perfil.";
            if(!divErrorAvatar.classList.contains("errorMsg")){
                divErrorAvatar.classList.add("errorMsg");
            }
        }else{
            let fileExtension = getExtension(image.value);
            if (!acceptedExtensions.includes("." + fileExtension)){
                
                countErrors = countErrors + 1;

                divErrorAvatar.innerHTML = "Las extensiones permitidas son jpg, png y gif.";
                if(!divErrorAvatar.classList.contains("errorMsg")){
                    divErrorAvatar.classList.add("errorMsg");
                }
            }
        }

        if(countErrors > 0){
            evt.preventDefault();
        }
     });
}

function getExtension(value) {
    let ext = value.split(".");
    return ext[1];
}