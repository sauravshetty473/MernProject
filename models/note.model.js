const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    subject : {
        type : String,
        required : true,
        trim : true,
        minlength : 3
    },

    topic : {
        type : String,
        required : true,
        trim : true,
        minlength : 3
    },


    link : {
        type : String,
        required : true,
        trim : true,
        minlength : 3
    },
},
{
    timestamps : true,
});


const Note = mongoose.model('Note', noteSchema);

module.exports = Note;