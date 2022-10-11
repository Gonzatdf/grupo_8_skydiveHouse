window.onload = function(){
    
    //Validaciones del formulario registrar producto.

    let form = document.getElementById("login");
  
    let pass = document.getElementById("confirm_password");
    let email = document.getElementById("email");
    
    form.addEventListener('submit', (evt) => {
        
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
     });
}
