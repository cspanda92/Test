const mongoose = require('mongoose');

var countHitsSchema = new mongoose.Schema({
    url: {
        type: String
    },
    count:{
        type:Number
    }
});

mongoose.model('countHits',countHitsSchema);