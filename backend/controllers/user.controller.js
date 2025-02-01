const userModel = require('../models/user.model')  // here we create our controllers (api logic)
const {validationResult} = require('express-validator')// now i want to check the error is available or not through express-validator
const userServices = require('../services/user.service')


module.exports.registerUser = async (req,res,next) =>{ // now import service here to create user
    console.log("req.body--",req.body)
   const errors = validationResult(req)

   if(!errors.isEmpty()){
   return res.status(401).json({errors:errors.array()})
   }

   const {fullname,email,password} = req.body

  const isUserAlready = await userModel.findOne({email})

  if(isUserAlready) return res.status(400).json({msg:'user already exist'})

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







// we can also write like this both are same
// const registerUser = async (req,res,next) =>{

// }

// module.exports = {registerUser}


// {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzlkYjBkNzhhYTAzMDgxOTdhMjIzNTAiLCJpYXQiOjE3MzgzODc2NzF9.Xw7_zLCYA7ZkbOwB3KS_8oIwJTNFfDC_LTPZUTmQXjQ",
//     "user": {
//         "fullname": {
//             "firstname": "jhone",
//             "lastname": "doe"
//         },
//         "email": "jhon@gmail.com",
//         "password": "$2b$10$/AQlAQo32x7Sw/aq3v4OouWbjp.ZlzKosEZA1S3DZmGvpWHNmu4pi",
//         "_id": "679db0d78aa0308197a22350",
//         "__v": 0
//     }
// }