const multer = require('multer');

const multerMiddleware = (req, res, next) => {
    const storage = multer.memoryStorage()
    const upload = multer({ storage: storage });
    upload.single("recfile")
    next();
}


module.exports = {
    multerMiddleware
}