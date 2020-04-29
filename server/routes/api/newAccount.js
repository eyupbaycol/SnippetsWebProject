const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();
const User = require("../../Models/User");
router.post('/', async (req,res)=>{
    const user = new User(req.body);
    var promise = user.save();
    promise.then(data=>{
        res.json(data)
    }).catch(err=>{
        res.json(err)
    })
})

module.exports = router;