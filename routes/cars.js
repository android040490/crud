let express = require('express');
let router = express.Router();
let carsController = require('../controllers/cars.js');

router.get('/', carsController.getCars);
router.post('/', carsController.createCar);

router.get('/:id', carsController.getCarById);
router.put('/:id', carsController.updateCar);

module.exports = router