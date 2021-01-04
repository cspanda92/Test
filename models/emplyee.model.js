const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: Number
    },
    city: {
        type: String
    }
});

mongoose.model('Employee',employeeSchema);