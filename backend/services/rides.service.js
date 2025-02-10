
const rideModel = require('../models/rides.model')
const mapService = require('../services/maps.service')
const crypto = require('crypto')

const getFare = async (pickup, destination) => {

    if (!pickup || !destination) {
        throw new Error('pickup and destination are required')
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination)

    const baseFare = { // baseFare is the initial cost of the ride before adding distance and time-based charges.
        car: 50,
        auto: 30,
        moto: 20
    };

    const perKmRate = {
        car: 15,
        auto: 10,
        moto: 8

    };

    const perMinuteRate = {
        car: 3,
        auto: 2,
        moto: 1.5
    }

    //distance.value duration.value

    const fare = {  // here divided 1000 coz we need in km and its in a meter 
        car: baseFare.car + (perKmRate.car * (distanceTime.distance.value)/1000) + (perMinuteRate.car * (distanceTime.duration.value)/60),
        auto: baseFare.auto + (perKmRate.auto * (distanceTime.distance.value)/1000) + (perMinuteRate.auto * (distanceTime.duration.value)/60),
        moto: baseFare.moto + (perKmRate.moto * (distanceTime.distance.value)/1000) + (perMinuteRate.moto * (distanceTime.duration.value)/60)
    };

    return fare;

}

// const getOTP = (num) => {

//     if (!num || num <= 0) {
//         throw new Error('num must be a positive integer');
//     }

//     const otp = parseInt(crypto.randomBytes(Math.ceil(num / 2)).toString('hex').slice(0, num-1), 16);
//     return otp;

// }

function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}




module.exports.createRide = async ({user,pickup,destination,vehicleType}) => {

    if (!user || !pickup || !destination || !vehicleType){
        throw new Error('All fields are required to create ride')
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination)
    const fare = await getFare(pickup,destination)
    console.log('fare--',fare)
   const ride = await rideModel.create({
        user,
        pickup,
        destination,
        distance:(distanceTime.distance.value)/1000,
        fare:fare[vehicleType],
        otp:getOtp(6)
    })

    return ride

}