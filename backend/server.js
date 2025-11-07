require('dotenv').config()

const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const mongoose = require('mongoose')
const express = require('express')


//express app
const app = express()

// middleware
app.use(express.json())
app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

app.use('/api/user', userRoutes)
//connect to db 
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for request
        app.listen(process.env.PORT, () =>{
        console.log("connected on db and listening on port ", process.env.PORT)
})
    })
    .catch((error)=>{
        console.log(error)
    })


