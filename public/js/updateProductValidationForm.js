window.onload = function () {
  //Validaciones del formulario registrar producto.
  console.log("holaaa");
  let form = document.getElementById("editProductForm");

  let editProductNameValue = document.getElementById("Nombre del producto");
  let editDescriptionValue = document.getElementById("Editar descripcion");
  let editPriceValue = document.getElementById("Editar precio");
  let editImageValue = document.getElementById("image");

  let acceptedExtensions = [".jpg", ".png", ".gif", ".JPG"];

  form.addEventListener("submit", (evt) => {

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
    if (editProductNameValue.value == "" || editProductNameValue.value == null || editProductNameValue.value.length < 1) {
      
      countErrors = countErrors + 1;

      divErrorProductName.innerHTML = "El nombre del producto es obligatorio.";
      if(!divErrorProductName.classList.contains("errorMsg")){
          divErrorProductName.classList.add("errorMsg");
      }
    } else if(editProductNameValue.value.length < 5) {
      
      countErrors = countErrors + 1;

      divErrorProductName.innerHTML = "El nombre debe tener al menos 5 caracteres.";
      if(!divErrorProductName.classList.contains("errorMsg")){
          divErrorProductName.classList.add("errorMsg");
      }
    }

    if(editDescriptionValue.value == "" || editDescriptionValue.value == null || editDescriptionValue.value.length < 1) {
      
      countErrors = countErrors + 1;

      divErrorDescription.innerHTML = "La descripción del producto es obligatoria.";
      if(!divErrorDescription.classList.contains("errorMsg")){
          divErrorDescription.classList.add("errorMsg");
      }
    }

    if(editDescriptionValue.value.length < 20) {
      
      countErrors = countErrors + 1;

      divErrorDescription.innerHTML = "La descripción debe tener al menos 20 caracteres.";
      if(!divErrorDescription.classList.contains("errorMsg")){
          divErrorDescription.classList.add("errorMsg");
      }
    }

    if (editPriceValue.value == "" || editPriceValue.value == null || editPriceValue.value.length < 1) {
      
      countErrors = countErrors + 1;

      divErrorPrice.innerHTML = "El precio es obligatorio.";
      if(!divErrorPrice.classList.contains("errorMsg")){
          divErrorPrice.classList.add("errorMsg");
      }
    }
    
    if (editImageValue.value != "" && editImageValue.value != null && editImageValue.value.length > 0) {

      let fileExtension = getExtension(editImageValue.value);
      if (!acceptedExtensions.includes("." + fileExtension)) {
        
        countErrors = countErrors + 1;

        divErrorImageProduct.innerHTML = "Las extensiones permitidas son jpg, png y gif.";
        if(!divErrorImageProduct.classList.contains("errorMsg")){
            divErrorImageProduct.classList.add("errorMsg");
        }
      }
    }

    if(countErrors > 0){
      evt.preventDefault();
    }
  });
};
function getExtension(value) {
  let ext = value.split(".");
  return ext[1];
}
