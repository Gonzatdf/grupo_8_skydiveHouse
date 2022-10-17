window.onload = function(){
    
    //Validaciones del formulario registrar producto.

    let form = document.getElementById("login");
  
    let pass = document.getElementById("confirm_password");
    let email = document.getElementById("email");
    
    form.addEventListener('submit', (evt) => {

        let divErrorEmail = document.getElementById("errorEmail");
        let divErrorPass = document.getElementById("errorPass");

        //Se inicializan los divs de errores en vacios.
        divErrorEmail.innerHTML = "";
        divErrorPass.innerHTML = "";
        
        let countErrors = 0;
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

        if(countErrors > 0){
            evt.preventDefault();
        }
     });
}
