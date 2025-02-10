const { validationResult } = require("express-validator")
const rideServices = require('../services/rides.service')
const ridesModel = require('../models/rides.model')

module.exports.createRide = async (req,res,next) =>{
    const error = validationResult(req)

    if(!error.isEmpty()){
       return res.status(400).json({error:error.array()})
    }

    const {pickup,destination,vehicleType} = req.body
  try {
      
   const ride = await rideServices.createRide({user:req.user._id,pickup,destination,vehicleType})
   return res.status(201).json({ride:ride})

  } catch (error) {
    console.log('ride controller--',error)
    throw new Error('err in ride controller--',error)    
  }
}