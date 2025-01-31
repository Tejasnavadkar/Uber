const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const app = express()

dotenv.config()
app.use(cors()) // initialy we allow req from all domains but in prod we set a particular domain

app.get('/',(req,res)=>{
    res.json({msg:"hiii"})
})



// app.listen(port,()=> console.log(`server started at port ${port} `)) we create server through http module
module.exports = app  // for make router