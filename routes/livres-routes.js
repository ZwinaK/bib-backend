var express = require('express');
var router = express.Router();

const livresControllers = require('../controllers/livres-controllers')


router.get('/', livresControllers.getLivres)

router.get('/:livreid', livresControllers.getLivreById)

module.exports = router;