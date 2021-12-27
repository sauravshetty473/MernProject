const router = require('express').Router();
let User = require('../models/user.model');


router.route('/').post((req, res)=>{
    console.log(req.body)
    User.find(req.body)
    .then(users => res.json(users))
    .catch((err)=>{
        console.log(err);
        return res.status(400).json('Error: ' + err);
    })
});



router.route('/add').post((req, res) => {
    const username = req.body.username;
    const first = req.body.firstname;
    const last = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const type = req.body.type;
    const imageURL = req.body.imageURL;

    const newUser = new User({username, first, last, email, password, type, imageURL});

    newUser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;