// instead of creating user in db directly in controller we create separate service and use inside our controller for that production grade approach

const userModel = require('../models/user.model')

module.exports.CreateUser = async ({firstname,lastname,email,password}) =>{

// console.log('createUserService--',{firstname,lastname,email,password})

if (!firstname || !lastname || !email || !password){
  throw new Error('All Fields are required')
}


  try {
    const createdUser = await userModel.create({
      fullname:{
        firstname,
        lastname,
      },
        
        email,
        password
    })
    return createdUser

  } catch (error) {
    console.log("err while creating user",error)
    
  }
}