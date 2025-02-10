const mapsServices = require('../services/maps.service')
 const {validationResult} = require('express-validator')


module.exports.getCoordinates = async (req,res,next) =>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json.status({errors:errors.array()})
    }

    // extract cityname from req.query
    const {address} = req.query

    
    try {
        const Coordinates =  await mapsServices.getAddressCoordinate(address)
        return res.status(200).json({coordinates:Coordinates})
    } catch (error) {
        console.log('err in map controller--',error)
        res.status(404).json({msg:"coordinates not found"})
    }
}

module.exports.getDistanceTime = async (req,res,next) =>{

  const errors =  validationResult(req)

  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }

  const {origin,destination} = req.query
try {
    
  const DistanceTime = await mapsServices.getDistanceTime(origin,destination)
  return res.status(200).json({DistanceTime:DistanceTime})

} catch (error) {
    throw new Error('err in distsnce controller--',error)
}
}

module.exports.getSuggetions = async (req,res,next) =>{

    const errors = validationResult(req)

   try {
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {input} = req.query

    const suggestions = await mapsServices.getAutoCompleteSuggestions(input)

   return res.status(200).json({suggestions:suggestions})
   } catch (error) {
    console.log('err in suggetions controller--',error)
    throw new Error('err in suggetions controller--',error)
   }

}