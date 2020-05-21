const express = require('express');
const router = express.Router();

//Schhema 
const Projects = require("../../Models/projects")
const userProjects = require("../../Models/userProjects");
router.post('/', async (req, res) => {
    const projectsArray = [];
    const username = req.decode.username
    const promise = userProjects.find({ username });
    promise.then(projects => {
        for (const project in projects) {
            projectsArray.push(projects[project].movieId)
        }
        const projectsList = Projects.find({ _id: projectsArray })
        projectsList.then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    }).catch(err => {
        res.json(err)
    })
})
router.post('/createProject', async (req, res) => {
    const projectsData = {
        projectName: req.body.projectName,
        projectDescription: req.body.projectDescription
    }
    const project = new Projects(projectsData);
    const promise = project.save();
    promise.then(data => {
        if (data) {
            let userProjectData = {
                username: req.decode.username,
                movieId: project._id,
                createdUser: true
            }
            const userProject = new userProjects(userProjectData)
            const promise = userProject.save();
            promise.then(project => {
                res.json({ status: true, message: "Project Successfully Created" })
            }).catch(err => {
                res.json(err)
            })
        }
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router;