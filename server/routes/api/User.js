const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();
const User = require("../../Models/user");
router.post('/', async (req, res) => {
    const user = new User(req.body);
    var promise = user.save();
    promise.then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})
router.post('/userdata', async (req, res) => {
    const userData = req.body;
    const promise = User.find(userData)
    promise.then(data => {
        console.log(data);
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router;