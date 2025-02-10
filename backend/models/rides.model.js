const mongoose = require('mongoose')


const RideSchema = new mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,  // data association its an user id
        ref:'user',
        required:true
    },
    captain:{   // initialy captain not set when captain accept ride then we set that captain id 
        type:mongoose.Schema.Types.ObjectId,
        ref:'captains'
    },
    pickup:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['pending','accepted','ongoing','completed','cancel'],
        default:'pending'
    },
    fare:{      // cost of travel
        type:Number,  
        required:true
    },
    distance:{    // in meters
        type:Number,
        required:true
    },
    duration:{  // in seconds
        type:Number,
        // required:true
    },
    paymentID:{     // on user payment time  paymentID,orderID,signature are needs to verify payments 
      type:String,
    },
    orderID:{
        type:String
    },
    signature:{
        string:String
    },
    otp:{
        type:String,
        select:false, // not come while fetching
        required:true
    }

})

const RideModel = mongoose.model('ride',RideSchema)

module.exports = RideModel