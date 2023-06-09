require('dotenv').config()
const cors = require('cors');
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const pinRoutes = require('./routes/pin');
// const adminRoutes = require("./routes/admin");

// express app
const app = express()

// middleware
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors({ origin: true, credentials: true }));
// เพิ่มตัวเลือก limit เพื่อรองรับข้อมูลที่มีขนาดใหญ่
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)
app.use('/api/pins', pinRoutes); 
// app.use('/api/admin', adminRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })