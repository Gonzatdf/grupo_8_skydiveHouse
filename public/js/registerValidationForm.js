window.onload = function(){

    //Validaciones del formulario registrar producto.

    console.log("Se cargo bien el js.");

    let form = document.getElementById("form");
    let fullName = document.getElementById("Username");
    form.addEventListener('submit', (evt) => {
        
        if(fullName.value == "" || fullName.value == null || fullName.value.length < 1){
            alert("El nombre y apellido son obligatorios.");
            evt.preventDefault();
        }else if(fullName.value.length < 2){
            alert("El nombre y apellido al menos debe contener 2 caracteres.");
            evt.preventDefault();
        }
    })
}