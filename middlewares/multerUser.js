const path = require("path")
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/img/uploads/avatars"));
    },
    filename: (req, file, cb) => {
        let nameFile = Date.now() + path.extname(file.originalname)
        cb(null, nameFile);
    }

});

const uploadUser = multer({ storage });

module.exports = uploadUser;