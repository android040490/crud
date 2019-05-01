const express = require('express');
const bodyParser = require('body-parser');
let carsRouter = require('./routes/cars');

const app = express();

// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// default route
app.use('/cars', carsRouter);

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  err.message = 'not found!!!';
  next(err)
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({message : err.message})
})

// listen on port 3000
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
