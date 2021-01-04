const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDB?readPreference=primary&appname=MongoDB%20Compass&ssl=false',{useNewUrlParser:true},(err) => {
    if(!err){
        console.log('Connection is active');
    }else {
        console.log('Error in connection: '+ err);
    }
});

require('./emplyee.model');
require('./count.model');