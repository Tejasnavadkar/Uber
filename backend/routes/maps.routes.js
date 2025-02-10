const express = require('express')
const router = express.Router()
const mapsController = require('../controllers/maps.controller')
const AuthMiddlewares = require('../middlewares/auth.middleware')
const {query} = require('express-validator')


router.get('/get-coordinates',
    query('address').isString().isLength({min:3}).withMessage('invalid address'),
    AuthMiddlewares.authUser,mapsController.getCoordinates)

router.get('/get-distance-time',[
    query('origin').isString().isLength({min:3}),
    query('destination').isString().isLength({min:3})
],
AuthMiddlewares.authUser,
mapsController.getDistanceTime
)

router.get('/get-suggetions',[
    query('input').isString().isLength({min:3}).withMessage('invalid input')
],
AuthMiddlewares.authUser,
mapsController.getSuggetions
)


module.exports = router