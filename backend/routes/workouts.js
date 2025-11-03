const express = require('express')
const Workout = require("../models/workoutModel")

const router = express.Router()

//get all workouts
router.get('/', (req, res) =>{
    res.json({mssg: 'Get all workouts'})
})


//Get a single workout

router.get('/:id',(req, res) =>{
    res.json({mssg: 'Get a single workout'})
})

//Post a workout
router.post('/', async(req,res)=>{
    const{title, load , reps} = req.body

    try{
        const workout = await Workout.create({title, load ,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }

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