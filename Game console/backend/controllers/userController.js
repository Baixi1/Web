const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {username, email, password} = req.body

  try {
    const user = await User.signup(username, email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const profileUser = async (req, res) => {
  const {picture, username, email, password} = req.body
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = username || user.name;
    user.email = email || user.email;
    user.pic = picture || user.pic;
    if (password) {
      user.password = password;
    }

    const updatedUser = await user.save();

    // create a token
    const token = createToken(updatedUser._id);

    res.status(200).json({ email: updatedUser.email, token });
  } else {
    res.status(404).json({ error: "User Not Found" });
  }
};

module.exports = { signupUser, loginUser, profileUser }

// const User = require('../models/userModel')
// const jwt = require('jsonwebtoken')

// const createToken = (_id) => {
//   return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
// }

// // login a user
// const loginUser = async (req, res) => {
//   const {email, password} = req.body

//   try {
//     const user = await User.login(email, password)

//     // create a token
//     const token = createToken(user._id)

//     res.status(200).json({email, token})
//   } catch (error) {
//     res.status(400).json({error: error.message})
//   }
// }

// // signup a user
// const signupUser = async (req, res) => {
//   const {username, email, password} = req.body

//   try {
//     const user = await User.signup(username, email, password)

//     // create a token
//     const token = createToken(user._id)

//     res.status(200).json({email, token})
//   } catch (error) {
//     res.status(400).json({error: error.message})
//   }
// }
