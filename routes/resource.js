const { Router } = require('express');
const { saveResource, getResources, deleteResource } = require('../controllers/resource');
const router = Router();


router.get('/', getResources)

router.post('/', saveResource)

router.delete('/:nombre', deleteResource)


module.exports = router