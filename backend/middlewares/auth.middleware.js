 const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')
const blacklistTokensModel = require('../models/blacklistTokens.model')
const captainModel = require('../models/captain.model')

module.exports.authUser = async (req,res,next) =>{

   const token = req.cookies.token || req.headers.authorization.split(' ')[1]

   if(!token){
      return res.status(401).json({msg:'Unautorized'})
   }

  const isBlacklisted = await blacklistTokensModel.findOne({token:token})

  if(isBlacklisted){
   return res.status(401).json({msg:'Unautorized'})
  }

try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    const user =  await userModel.findById(decoded._id)

    // console.log("user---",user)
    req.user = user
   return next()
} catch (error) {
    
    return res.status(401).json({msg:'Unauthorized'})

}

}

module.exports.authCaptain = async (req,res,next) =>{

   const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

   const isBlacklisted = await blacklistTokensModel.findOne({token:token})

   if(isBlacklisted){
      return res.status(401).json({msg:'Unauthorized'})
   }

   try {
      const decoded = jwt.verify(token,process.env.JWT_SECRET)
      const captain = await captainModel.findById(decoded._id)

      req.captain=captain
      return next()

   } catch (error) {
      console.log('error in authCaptain while verifying jwt token--',error)
      return res.status(401).json({msg:'Unauthorized'})

   }
}