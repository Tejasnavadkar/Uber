const userModel = require('../models/user.model')  // here we create our controllers (api logic)
const {validationResult} = require('express-validator')// now i want to check the error is available or not through express-validator
const userServices = require('../services/user.service')
const blacklistTokensModel = require('../models/blacklistTokens.model')


module.exports.registerUser = async (req,res,next) =>{ // now import service here to create user
    console.log("req.body--",req.body)
   const errors = validationResult(req)

   if(!errors.isEmpty()){
   return res.status(400).json({errors:errors.array()})
   }

   const {fullname,email,password} = req.body

  const isUserAlreadyExist = await userModel.findOne({email})

  if(isUserAlreadyExist) return res.status(400).json({msg:'user already exist'})

  const hashedPassword = await userModel.hashPassword(password)

const user = await userServices.CreateUser({
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email,
    password:hashedPassword
  })

  if(!user){
    return res.status(401).json({err:'unable to create user'})
  }

  // here generateAuthToken is not a static method inside this method we use this._id so we can't directly call it
  // Create an instance of the user model with the user data and then call it like classMethod

  const userInstance = new userModel(user);
  const jwtToken = userInstance.generateAuthToken()

  return res.status(201).json({token:jwtToken,user})

}

module.exports.loginUser = async (req,res,next) =>{

 const errors = validationResult(req)

 if(!errors.isEmpty){
  return res.status(400).json({err:errors.array()})
 }

 const {email,password} = req.body

const user = await userModel.findOne({email}).select('+password') // bydefault password will not come coz set select:false in model but now it will come coz .select('+password') 

if(!user){
  return res.status(401).json({msg:'invalid email or password'})
}

const userInstance = new userModel(user)

const isMatch = await userInstance.comparePassword(password)

if(!isMatch){
  return res.status(401).json({msg:'invalid email or password'})
}

const jwtToken = userInstance.generateAuthToken()

res.cookie('token',jwtToken)

return res.status(200).json({
  token:jwtToken,
  user
})

}

module.exports.getUserProfile = async (req,res,next) =>{
  // console.log("req.user--",req.user) 

  return res.status(200).json({user:req.user})

}

module.exports.logoutUser = async (req,res,next) =>{
  
try {
  res.clearCookie('token')  // first cleare token present in cookie then blacklist
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
  
  const isExist = await blacklistTokensModel.findOne({token})
  
  if(!isExist){
  await blacklistTokensModel.create({token})
  }
  return res.status(200).json({msg:'Logged Out'})

} catch (error) {
  console.log('err while userlogout-----',error)
}
}







// we can also write like this both are same
// const registerUser = async (req,res,next) =>{

// }

// module.exports = {registerUser}


