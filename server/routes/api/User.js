const express = require('express');
const jwt = require("jsonwebtoken");
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
    const { username, password } = req.body;
    const promise = User.find({username,password})
    promise.then(user => {
        if(user){
            const payload = {username}
            const token = jwt.sign(payload,req.app.get("api_secret_key"),{
                expiresIn:7200
            })
            res.json({status:true,token})
        }
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router;