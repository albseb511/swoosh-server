const express = require('express')
const dotenv = require('dotenv') 
const app = express()
const port = process.env.port || 4000
const mongo = require('mongoose')
const bodyParser = require('body-parser')

// dot env setup
dotenv.config()

// mongo connect
mongo.connect(process.env.MONGO_URI,{ useNewUrlParser: true },()=>{
    console.log('connected to DB now')
})

// Middlewares
app.use(bodyParser.json())

// Route Middlewares
const authRoute = require('./routes/auth')

app.use('/users',authRoute)

app.listen(port,()=>{
    console.log('listening on port',port)
})