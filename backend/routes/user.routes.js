const express = require('express')
const router = express.Router()   // all user related routes
const {body,validationResult} = require('express-validator')
const userController = require('../controllers/user.controller')
const authMiddlewares = require('../middlewares/auth.middleware')


router.post('/register',[  // for validation
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('FirstName must be have at least 3 characters'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 characters')
], userController.registerUser)

router.post('/login',[
    body('email').isEmail().withMessage('Invaild Email'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 character')
], userController.loginUser)

router.get('/profile',authMiddlewares.authUser, userController.getUserProfile)


module.exports = router