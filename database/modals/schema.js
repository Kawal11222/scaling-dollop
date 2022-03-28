const mongoose   = require("mongoose");

var data = new mongoose.Schema({
     fixedTemperature : {
         type: Number,
         default : 30
     }
});

var sign  =  mongoose.model('minorProject' , data);
module.exports = sign;