const http = require('http')
const app = require('./app')
const port = process.env.PORT || 3000
const userRoutes = require('./routes/user.routes')

const server = http.createServer(app)


app.use('/user',userRoutes)


server.listen(port, ()=> console.log(`server running on port ${port}`))