const Workout = require("../models/workoutModel")
const mongoose = require("mongoose")

//get all workouts
const getWorkouts = async(req,res) =>{
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

//get a single workout
const getWorkout = async(req,res) =>{
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"NO such workout"})
    }
    
    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(workout)
}


//create a new workout
const createWorkout = async(req, res)=>{

    const{title, load , reps} = req.body

    let emptyFiels = []

    if (!title) {
        emptyFiels.push ('title')
    }
    if(!load){
        emptyFiels.push ('load')
    }
    if(!reps){
        emptyFiels.push ('reps')
    }
    if (emptyFiels.length > 0) {
        return res.status(400).json({error: "Please fill in all the fields", emptyFiels})
    }
    //add doc to db
    try{
        const workout = await Workout.create({title, load ,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a workout

const deleteWorkout = async(req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res(404).json({error: "Workout does not exist"})

    }
    const workout = await Workout.findOneAndDelete({_id: id})

    if (!workout){
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}

//update a workout
const updateWorkout =  async(req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Workout does not exist"})
    }
    const workout = await Workout.findOneAndUpdate({_id: id} ,req.body,{new: true} )
    if (!workout){
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(workout)

}



module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}
