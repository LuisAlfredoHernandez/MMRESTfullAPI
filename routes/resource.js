const { Router } = require('express');
const { saveResource, getResources } = require('../controllers/resource');
const { multerMiddleware } = require('../middlewares/multer');
const router = Router();


router.get('/', getResources)

router.post('/', [
    multerMiddleware
], saveResource)

// router.delete('/')

// router.put('/');

module.exports = router