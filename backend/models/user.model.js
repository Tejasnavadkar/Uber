const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userSchema = mongoose.Schema({

    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'FirstName must be at least 3 character']
        },
        lastname:{
            type:String,
            minlength:[3,'LastName must be at least 3 character']
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'Email must be at least 5 character']
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String,  // to share location 
    }
})

  // here generateAuthToken and comparePassword is not a static method inside this method we use this._id , this.password so we can't directly call it
  //we need to create an instance based on specific user/user model with the user data and then call it like classMethod

userSchema.methods.generateAuthToken = function (){
  const token = jwt.sign({_id:this._id},process.env.JWT_SECRET)
  return token
}

userSchema.methods.comparePassword = async function (password){
  return await bcrypt.compare(password,this.password)
}

userSchema.statics.hashPassword = async function (password){
  return await bcrypt.hash(password,10)
}


const userModel = mongoose.model('user',userSchema)

module.exports = userModel