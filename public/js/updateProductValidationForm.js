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
    if (
      editProductNameValue.value == "" ||
      editProductNameValue.value == null ||
      editProductNameValue.value.length < 1
    ) {
      alert("El nombre del producto es obligatorio.");
      evt.preventDefault();
    } else if (editProductNameValue.value.length < 5) {
      alert("El nombre debe tener al menos 5 caracteres");
      evt.preventDefault();
    }
    if (
      editDescriptionValue.value == "" ||
      editDescriptionValue.value == null ||
      editDescriptionValue.value.length < 1
    ) {
      alert("La descripción del producto es obligatorio.");
      evt.preventDefault();
    }
    if (editDescriptionValue.value.length < 20) {
      alert("La descripción debe tener al menos 20 caracteres.");
    }
    if (
      editPriceValue.value == "" ||
      editPriceValue.value == null ||
      editPriceValue.value.length < 1
    ) {
      alert("El precio es obligatorio.");
      evt.preventDefault();
    }
   /*  let fileOld = req.body.prodOldImage;

    let file = req.file 
    let acceptedExtensions = [".jpg", ".png", ".gif", ".JPG"]               

    let fileExtension = null;
    if (!file) {
        file = fileOld;
        fileExtension = path.extname(file);
    }else{
        fileExtension = path.extname(file.originalname);
    }
    
    if (!acceptedExtensions.includes(fileExtension)) {
      alert("Las extensiones permitidas son jpg, png y gif");
      evt.preventDefault();
    } */
  });
};
function getExtension(value) {
  let ext = value.split(".");
  return ext[1];
}
