const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// mongoose.set('strictQuery', false);




const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'firstname at least have 3 characters']
        },
        lastname:{
            type:String,
           minlength:[3,'lastname must have at least 3 characters ']
        }
    },

    email:{
        type:String,
        required:true,
       match:[/^\S+@\S+\.\S+$/,'please enter a valid email']
    },
    password:{
        type:String,
        required:true,
        minlength:[6,'pasword must have 6 characters'],
        // select:false
        
    },

    socketId:{
        type:String,
    },

    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'color must have 3 characters']
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'plate must have 3 character']
        },
        capacity:{
            type:Number,
            required:true,
            minlength:[1,'capacity must be at least 1']
        },
        vehicleType:{
            type:String,
            enum:['car','auto','motorcycle'],
            required:true
        }
    },

    location:{
        ltd:{
            type:Number,

        },
        lng:{
            type:Number
        }
    }
})


captainSchema.methods.generateAuthToken = function (){
   const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token
}

captainSchema.statics.hashPassword = async function (password){  // static methods dont need instanse

 const hashed = await bcrypt.hash(password,10)
//  console.log('hashed---',hashed)
 return hashed
}

captainSchema.methods.comparePassword = async function (password){

  return await bcrypt.compare(password,this.password)
}

const captainModel = mongoose.model('captains',captainSchema)

module.exports = captainModel