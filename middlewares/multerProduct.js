const path = require("path")
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/img/uploads/products"));
    },
    filename: (req, file, cb) => {
        let nameFile = Date.now() + path.extname(file.originalname)
        cb(null, nameFile);
    }

});

const uploadProducts = multer({ storage });

module.exports = uploadProducts;