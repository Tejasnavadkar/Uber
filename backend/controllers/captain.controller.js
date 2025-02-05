const { validationResult } = require("express-validator");
const captainModel = require("../models/captain.model");
const captainServices = require('../services/captain.service');
const blacklistTokensModel = require("../models/blacklistTokens.model");



module.exports.registerCaptain = async (req,res,next) =>{
    const error = validationResult(req)

    if(!error.isEmpty()){
        return res.status(401).json({error:error.array()})
    }

   const {fullname,email,password,vehicle} = req.body

  const isCaptainAlreadyExist = await captainModel.findOne({email})

  if(isCaptainAlreadyExist){
    return res.status(400).json({msg:'captain already exist'})
  }

  const hashedPassword = await captainModel.hashPassword(password)
// console.log('hashedPassword==',hashedPassword)
 const captain = await captainServices.createCaptain({
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email:email,
    password:hashedPassword,
    color: vehicle.color,
    plate:vehicle.plate ,
    capacity:vehicle.capacity ,
    vehicleType:vehicle.vehicleType 
})

if(!captain){
    return res.status(401).json({err:'unable to create captain'})
  }

   // here generateAuthToken is not a static method inside this method we use this._id so we can't directly call it
  // Create an instance of the captain model with the captain data and then call it like classMethod

  const captainInstance = new captainModel(captain)

  const token = captainInstance.generateAuthToken()
   
// console.log("captain--",captain)
  return res.status(201).json({token:token,captain:captain})
}


module.exports.loginCaptain = async (req,res,next) =>{
 
   const errors = validationResult(req)

   if(!errors.isEmpty()){
    return res.status(401).json({error:errors.array()})
   }
 try {
    
   const {email,password} = req.body
  //  console.log("email--",email)

   const captain = await captainModel.findOne({email})

  if(!captain){
    console.log('inside !captain--',captain)
    return res.status(401).json({msg:'invalid email or password'})
  }

  const captainInstance = new captainModel(captain)

 const isMatch =  await captainInstance.comparePassword(password)

 if(!isMatch) {
    // console.log('inside !isMatch--',isMatch)
    return res.status(401).json({msg:'invalid email or password'})
 } 
 const token = await captainInstance.generateAuthToken()

 res.cookie('token',token)

 return res.status(201).json({token:token,captain:captain})
 } catch (error) {
    console.log("error while captain login in controller--",error)
 }


}

module.exports.getCaptain = async (req,res,next) =>{

  return res.status(200).json({captain:req.captain})

}

module.exports.logoutCaptain = async (req,res,next)=>{
     try {
      res.clearCookie("token");

      const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

      const isExist = await blacklistTokensModel.findOne({token})
      if(!isExist){
      await blacklistTokensModel.create({token})
      }
      return res.status(200).json({msg:'Logged Out'})

     } catch (error) {
        console.log('err while logou captain--',error)
     }
}



