let express = require('express');
let router = express.Router();
let carsController = require('../controllers/cars.js');

router.get('/', carsController.getCars);

router.get('/:id', carsController.getCarById);

module.exports = router