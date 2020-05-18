const express = require('express');
const router = express.Router();

//Schhema 
const Projects = require("../../Models/projects")
router.post('/', async (req, res) => {
    const createdUser = req.decode.username
    const promise = Projects.find({createdUser});
    promise.then(user=>{
        res.json(user)
    }).catch(err=>{
        res.json(err)
    })
})
router.post('/createProject', async (req, res) => {
    const projectsData = {
        projectName : req.body.projectName,
        projectDescription : req.body.projectDescription,
        createdUser : req.decode.username 
    } 
    const project = new Projects(projectsData);
    const promise = project.save();
    promise.then(data => {
        if(data){
            res.json({status:true,message:"Project Successfully Created"})
        }
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router;