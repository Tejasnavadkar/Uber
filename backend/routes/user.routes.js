const express = require('express')
const router = express.Router()   // all user related routes
const {body,validationResult} = require('express-validator')
const userController = require('../controllers/user.controller')


router.post('/register',[  // for validation
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('FirstName must be have at least 3 characters'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 characters')
], userController.registerUser)




module.exports = router