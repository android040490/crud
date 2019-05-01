const express = require('express');
const bodyParser = require('body-parser');
let carsRouter = require('./routes/cars');

const app = express();

// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// default route
app.use('/cars', carsRouter);



// knex.from('cars').select("*").then((rows) => {
  //     console.log("Cars");
  //     for (row of rows){
    //         console.log( `${row['id']} ${row['model']} ${row['number']} ${row['driver']}`)
    //     }
    //   })
    //   .catch((err) => { console.log(err); throw err })
    //   .finally(() => {
      //       knex.destroy();
      //   });
      
      // knex('cars')
      //   .where({ id : 3 })
      //   .update({ model : "VW Passat", driver : "Adolf Hitler"}, 'id')
      //   .then(() => {
        //       knex('cars')
        //         .where({id : 3})
        //         .select('*')
        //         .then( rows => {
          //             console.log(rows[0].model)
          //         })
          //     // updatedRows === [{id: 42, title: 'The Hitchhiker's Guide to the Galaxy'}]
          //   })
          
          // let cars = [
          //   {model : "Chery", type_id : 1, number : "BH4444EM", driver : "Vasya", color : "#fff" },
          //   {model : "Chery", type_id : 1, number : "BH4444EM", driver : "Vasya", color : "#fff" , id: 44},
          // ]
          
          // knex('cars').insert(cars)
          // .then((resp) => console.log(resp))
          // .catch((err) => { console.log(err); throw err })
          // .finally(() => {
          //   knex.destroy();
          // });
// listen on port 3000
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
