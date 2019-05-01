let knex = require('../db');

module.exports.getCars = (req, res) => {
    knex('cars')
        .join('car_types', 'cars.type_id', '=', 'car_types.id')
        .select("cars.id", 'cars.model', 'cars.number', 'cars.driver', 'cars.color', 'car_types.type', 'car_types.image').then((rows) => {
            res.json(rows)
            for (row of rows){
                  console.log( `${row['id']} ${row['model']} ${row['number']} ${row['driver']}`)
              }
            })
            .catch((err) => { console.log(err); throw err })
            .finally(() => {
                  knex.destroy();
              });
}

module.exports.getCarById = ( req, res ) => {
    console.log(req.params.id)
    knex('cars')
        .where( 'cars.id', req.params.id)
        .join('car_types', 'cars.type_id', '=', 'car_types.id')
        .select("cars.id", 'cars.model', 'cars.number', 'cars.driver', 'cars.color', 'car_types.type', 'car_types.image').then((rows) => {
            res.json(rows)
        })
}

