const express = require('express')
const { 
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

//get all workouts
router.get('/', getWorkouts)


//Get a single workout

router.get('/:id',getWorkout)

//Post a workout
router.post('/', createWorkout)

//Delete a workout
router.delete('/:id', deleteWorkout)
//update a Workout
router.patch('/:id', updateWorkout)



module.exports = router