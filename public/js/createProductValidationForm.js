window.onload = function(){
    
    //Validaciones del formulario registrar producto.

    let form = document.getElementById("productForm");
  
    let productNameValue = document.getElementById("Nombre del producto");
    let descriptionValue = document.getElementById("Agregar descripcion");
    let priceValue = document.getElementById("Agregar precio");
    let imageValue = document.getElementById("image")

    let acceptedExtensions = [".jpg", ".png", ".gif", ".JPG"];
    
    form.addEventListener('submit', (evt) => {

        let divErrorProductName = document.getElementById("errorProductName");
        let divErrorDescription = document.getElementById("errorDescription");
        let divErrorPrice = document.getElementById("errorPrice");
        let divErrorImageProduct = document.getElementById("errorImageProduct");

        //Se inicializan los divs de errores en vacios.
        divErrorProductName.innerHTML = "";
        divErrorDescription.innerHTML = "";
        divErrorPrice.innerHTML = "";
        divErrorImageProduct.innerHTML = "";

        let countErrors = 0;
        if(productNameValue.value == "" || productNameValue.value == null || productNameValue.value.length < 1){
            
            countErrors = countErrors + 1;

            divErrorProductName.innerHTML = "El nombre del producto es obligatorio.";
            if(!divErrorProductName.classList.contains("errorMsg")){
                divErrorProductName.classList.add("errorMsg");
            }
        }else if(productNameValue.value.length < 5){
            
            countErrors = countErrors + 1;

            divErrorProductName.innerHTML = "El nombre debe tener al menos 5 caracteres.";
            if(!divErrorProductName.classList.contains("errorMsg")){
                divErrorProductName.classList.add("errorMsg");
            }
        }

        if(descriptionValue.value== "" || descriptionValue.value == null || descriptionValue.value.length < 1){
             
            countErrors = countErrors + 1;

            divErrorDescription.innerHTML = "La descripción del producto es obligatorio.";
            if(!divErrorDescription.classList.contains("errorMsg")){
                divErrorDescription.classList.add("errorMsg");
            }
        }

        if(descriptionValue.value.length < 20){
            
            countErrors = countErrors + 1;

            divErrorDescription.innerHTML = "La descripción debe tener al menos 20 caracteres.";
            if(!divErrorDescription.classList.contains("errorMsg")){
                divErrorDescription.classList.add("errorMsg");
            }
        }  

        if(priceValue.value == "" || priceValue.value == null || priceValue.value.length < 1){
            
            countErrors = countErrors + 1;

            divErrorPrice.innerHTML = "El precio es obligatorio.";
            if(!divErrorPrice.classList.contains("errorMsg")){
                divErrorPrice.classList.add("errorMsg");
            }
        }
        if(imageValue.value == "" || imageValue.value == null || imageValue.value == undefined){
            
            countErrors = countErrors + 1;

            divErrorImageProduct.innerHTML = "Subir una imagen del producto.";
            if(!divErrorImageProduct.classList.contains("errorMsg")){
                divErrorImageProduct.classList.add("errorMsg");
            }
        }

        let fileExtension = getExtension(imageValue.value);
        if (!acceptedExtensions.includes("." + fileExtension)){
            
            countErrors = countErrors + 1;

            divErrorImageProduct.innerHTML = "Las extensiones permitidas son jpg, png y gif.";
            if(!divErrorImageProduct.classList.contains("errorMsg")){
                divErrorImageProduct.classList.add("errorMsg");
            }
        }

        if(countErrors > 0){
            evt.preventDefault();
        }
        
    });
    
  function getExtension(value) {
  let ext = value.split(".");
  return ext[1];
  }
}  