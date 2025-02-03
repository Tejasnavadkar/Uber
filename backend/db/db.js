const mongoose = require('mongoose')



async function ConnectToDb () {
 try {
    
    await mongoose.connect(process.env.DB_CONNECTION_STRING).then(()=>{
        console.log("Db connection Successfull")
        console.log(mongoose.connection.name);
    }).catch((err)=>{
        console.log('err while connecting Db--',err)
    })

 } catch (error) {
    console.log("error = ",error)
 }
}

module.exports = ConnectToDb