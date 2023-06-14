const { Router } = require('express');
const { getResource } = require('../controllers/resource');
const router = Router();


router.get('/', getResource)

// router.post('/')

// router.delete('/')

// router.put('/');

module.exports = router