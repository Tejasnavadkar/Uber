const express = require('express')
const router = express.Router()
const rideControllers = require('../controllers/rides.controller')
const AuthMiddleware = require('../middlewares/auth.middleware')
const {body} = require('express-validator')

router.post('/create',[
    body('pickup').isString().isLength({min:3}).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({min:3}).withMessage('invalid destination address'),
    body('vehicleType').isIn(['car','auto','moto']).withMessage('Invalid vehicleType')
],
AuthMiddleware.authUser,
rideControllers.createRide
)



module.exports = router