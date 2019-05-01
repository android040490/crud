let knex = require('../db');

module.exports.getCars = (req, res) => {
    knex('cars')
        .join('car_types', 'cars.type_id', '=', 'car_types.id')
        .select("cars.id", 'cars.model', 'cars.number', 'cars.driver', 'cars.color', 'car_types.type', 'car_types.image').then((rows) => {
            res.json(rows)
        })
        .catch((err) => { console.log(err); throw err })
}

module.exports.getCarById = ( req, res ) => {
    knex('cars')
        .where( 'cars.id', req.params.id)
        .join('car_types', 'cars.type_id', '=', 'car_types.id')
        .select("cars.id", 'cars.model', 'cars.number', 'cars.driver', 'cars.color', 'car_types.type', 'car_types.image').then((rows) => {
            if ( rows.length > 0){
                res.json(rows)
            } else {
                res.status(404)
                res.send({message : `Car with id ${req.params.id} not found!`})
            }
        })
}

module.exports.updateCar = ( req, res ) => {
    res.sendStatus(200)
    knex('cars')
        .where('id', req.params.id)
        .update(req.body)
        .then((rows) => {
            console.log( rows)
        })
}

module.exports.createCar = ( req, res ) => {
    knex('cars')
        .insert(req.body).then( response => {
            res.json(response[0])
            })
}

