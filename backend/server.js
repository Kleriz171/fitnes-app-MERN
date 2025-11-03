require('dotenv').config()

const workoutRoutes = require('./routes/workouts.js')
const express = require('express')


//express app
const app = express()

// middleware
app.use(express.json())
app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutRoutes)

//listen for request
app.listen(process.env.PORT, () =>{
    console.log("listening on port ", process.env.PORT)
})
