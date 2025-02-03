const express = require('express')
const router = express.Router()
const {body,validationResult} = require('express-validator')
const captainController = require('../controllers/captain.controller')
const authMiddlewares = require('../middlewares/auth.middleware')


router.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage('firstname must be at least 3 character'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('paassword must be at least 6 character'),
    body('vehicle.color').isLength({min:3}).withMessage('color must be at least 3 character'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate must be at least 3 character'),
    body('vehicle.capacity').isLength({min:1}).withMessage('capacity must be at least 1 character'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('vehicle must be at least 3 character')
],captainController.registerCaptain)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 character')
],captainController.loginCaptain)

router.get('/getCaptain',authMiddlewares.authCaptain, captainController.getCaptain)

router.get('/logout',captainController.logoutCaptain)


module.exports = router