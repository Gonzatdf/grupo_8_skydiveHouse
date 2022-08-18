const path = require("path")
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/img/uploads"));
    },
    filename: (req, file, cb) => {
        let nameFile = Date.now() + path.extname(file.originalname)
        cb(null, nameFile);
    }

});

console.log("ruta de almacenamiento imagen: " + path.join(__dirname, "../public/img") );


const upload = multer({ storage });

module.exports = upload;