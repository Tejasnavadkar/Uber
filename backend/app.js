const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const app = express()
const ConnectToDb = require('./db/db')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')
const mapsRoutes = require('./routes/maps.routes')

const rideRoutes = require('./routes/rides.routes')


dotenv.config()
ConnectToDb() // if we call this fn above dotenv.config() it gives error becoz we trying to set connection befor configuring env and inside env we have db url 
app.use(cors()) // initialy we allow req from all domains but in prod we set a particular domain
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true})) 

// Why Use express.urlencoded()
// When a user submits a form on a webpage or sends data in application/x-www-form-urlencoded format (the default for HTML forms), the server needs to parse that data to access it.
// express.urlencoded() is a built-in middleware in Express that extracts the form data and makes it available in req.body.

app.use('/user',userRoutes)  // first go req from here
app.use('/captain',captainRoutes)
app.use('/maps',mapsRoutes)
app.use('/rides',rideRoutes)

module.exports = app  // for make server in server.js