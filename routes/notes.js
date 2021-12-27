const router = require('express').Router();
let Note = require('../models/note.model');


router.route('/').get((req, res)=>{
    Note.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
});



router.route('/add').post((req, res) => {
    const subject = req.body.subject;
    const topic = req.body.topic;
    const link = req.body.link;

    const newNote = new Note({subject, topic, link});

    newNote.save()
      .then(() => res.json('Notes added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;