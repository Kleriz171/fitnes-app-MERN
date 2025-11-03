const express = require('express')

const router = express.Router()

//get all workouts
router.get('/', (req, res) =>{
    res.json({mssg: 'Get all workouts'})
})


//Get a single workout

router.get('/:id', (req, res) =>{
    res.json({mssg: 'Get a single workout'})
})

//Post a workout
router.post('/', (req,res)=>{
    res.json({mssg:'POST a new workout'})
})

//Delete a workout
router.delete('/:id', (req,res)=>{
    res.json({msh: 'Delete a workout'})
})
//update a request
router.patch('/:id', (req,res)=>{
    res.json({msh: 'Update a workout'})
})



module.exports = router