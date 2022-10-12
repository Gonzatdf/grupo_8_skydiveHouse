window.onload = function(){
    
    //Validaciones del formulario registrar producto.

    let form = document.getElementById("productForm");
  
    let productNameValue = document.getElementById("Nombre del producto");
    let descriptionValue = document.getElementById("Agregar descripcion");
    let priceValue = document.getElementById("Agregar precio");
    let imageValue = document.getElementById("image")

    let acceptedExtensions = [".jpg", ".png", ".gif", ".JPG"];
    
    form.addEventListener('submit', (evt) => {
        
        if(productNameValue.value == "" || productNameValue.value == null || productNameValue.value.length < 1){
            alert("El nombre del producto es obligatorio.");
            evt.preventDefault();
        }else if(productNameValue.value.length < 5){
            alert("El nombre debe tener al menos 5 caracteres");
            evt.preventDefault();
        }
        if(descriptionValue.value== "" || descriptionValue.value == null || descriptionValue.value.length < 1){
            alert("La descripción del producto es obligatorio.");
            evt.preventDefault();
        }
        if(descriptionValue.value.length < 20){
            alert("La descripción debe tener al menos 20 caracteres.")
        }    
        if(priceValue.value == "" || priceValue.value == null || priceValue.value.length < 1){
            alert("El precio es obligatorio.");
            evt.preventDefault();
        }
        if(imageValue.value == "" || imageValue.value == null || imageValue.value == undefined){
            alert("Subir una imagen del producto");
            evt.preventDefault();
        }
        let fileExtension = getExtension(imageValue.value);
        if (!acceptedExtensions.includes(fileExtension)){
            alert("Las extensiones permitidas son jpg, png y gif");
            evt.preventDefault();
        }
        
    });
    
  function getExtension(value) {
  let ext = value.split(".");
  return ext[1];
  }
}  