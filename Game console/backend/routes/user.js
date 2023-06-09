const express = require('express')

// controller functions
const { loginUser, signupUser, profileUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// profile route
router.post('/profile', profileUser)

module.exports = router