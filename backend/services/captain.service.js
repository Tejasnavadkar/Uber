const captainModel = require("../models/captain.model")

module.exports.createCaptain = async ({firstname,lastname,email,password,color,plate,capacity,vehicleType}) =>{

    if(!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error('all fields are required')
    }

// console.log("pass--",password)
try {
    const createdCaptain =  await captainModel.create({
        fullname:{
            firstname:firstname,
            lastname:lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
       })
       return createdCaptain

} catch (error) {
    console.log('error while creating captain in services',error)
}

}