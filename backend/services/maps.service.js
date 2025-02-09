const axios  = require("axios");


module.exports.getAddressCoordinate = async (address) =>{
try {
    
   const API_KEY = process.env.GOOGLE_MAPS_API;   
   const response = await axios.get(`${process.env.GOOGLE_MAPS_BASE_URL}/maps/api/geocode/json?address={${address}}&key=${API_KEY}`)
   if(response.status === 200){
    // console.log('inside res--',response.data.results[0].geometry.location)
    const locations = response.data.results[0].geometry.location
    if(locations){
        return {
            lat:locations.lat,
            lon:locations.lng
        }
    }
   }else{
    throw new Error('unable to fetch coordinates')
   }

    
} catch (error) {

    throw new Error(`err while getting coordinate--${error}`)
}
}

module.exports.getDistanceTime = async (origin,destination) =>{

    if(!origin || !destination){
     throw new Error('Origin and destination are required')
    }
try {
    
    const API_KEY = process.env.GOOGLE_MAPS_API
    const response = await axios.get(`${process.env.GOOGLE_MAPS_BASE_URL}/maps/api/distancematrix/json?destinations={${destination}}&origins={${origin}}&key=${API_KEY}`)
    if(response.data.status === 'OK'){
        if(response.data.rows[0].elements[0].status === 'ZERO_RESULTS'){
            throw new Error('no routes found')
        }
        const DistanceTime = response.data.rows[0].elements[0]
        // console.log('distance-',DistanceTime)
        if(DistanceTime){
           return DistanceTime
        }else{
            throw new Error('unable to get distance and time')
        }
    }

} catch (error) {
    
    throw new Error(`err while getting DistanceTime--${error}`)
}
}

module.exports.getAutoCompleteSuggestions  = async (input) =>{

    if(!input){
        throw Error('Qury required')
    }
 try {
    const API_KEY = process.env.GOOGLE_MAPS_API
    const url = `${process.env.GOOGLE_MAPS_BASE_URL}/maps/api/place/autocomplete/json?input=${input}&key=${API_KEY}`;

   const response = await axios.get(url)
 console.log(response.status)
   if(response.status === 200){
    return response.data.predictions
   }else{
    throw new Error('unable to fetch suggetions')
   }
 } catch (error) {
    console.log('err in getAutoCompleteSuggestions service--',error)
    throw error
 }
}