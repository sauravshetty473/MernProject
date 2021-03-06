const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());



const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const notesRouter = require('./routes/notes');


const bodyParser = require("body-parser");
usersRouter.use(bodyParser);


const uri = process.env.ATLAS_URI;
mongoose
    .connect( uri, { useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => {


        app.use('/users', usersRouter);
        app.use('/login', loginRouter);
        app.use('/notes', notesRouter);


        app.listen(port, ()=>{
        console.log('Server is running on port: ${port}');





    })})
    .catch(err => console.log( err ));

