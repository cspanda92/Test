require('./models/db');

const bodyParser = require('body-parser');
const express = require('express');
const employeeController = require('./controllers/empolyeeController')
var app = express();

app.listen(3000 , () => {
    console.log('Server started at 3000');
})
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/employee',employeeController);