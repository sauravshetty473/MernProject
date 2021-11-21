const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question : {
        type : String,
        required : true,
        trim : true,
        minlength : 2
    },

    maxScore : {
        type : Number, required : true
    },   
    
    options : {
        type : [String],
        required : true,
    },

    correct : {
        type : [Number],
        required : true
    }
},
{
    timestamps : true,
});


const Question = mongoose.model('Question', questionSchema);

module.exports = Question;