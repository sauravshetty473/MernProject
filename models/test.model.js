const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
    description : {
        type : String,
        required : true,
        trim : true,
        minlength : 2
    },

    duration : {           // In minutes
        type : Number, required : true
    },

    date : {
        type : Date,
        required : true,
    },


    maxScore : {
        type : Number, required : true
    },    
},
{
    timestamps : true,
});


const Test = mongoose.model('Test', testSchema);

module.exports = Test;