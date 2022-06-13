const express = require('express')
const connected = require('./config/Connected')
const UsersRoute = require('./routes/Users')
const path = require('path')
const User = require('./models/User')
  require('dotenv').config()

const app = express()

connected()


app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, "public", "index.html"));  
})

// express.json and url encoded are only needed for POST AND PUT methods not get 
app.use(express.json())
app.use('/', UsersRoute)

app.listen(process.env.port, ()=>console.log(`Server at ${process.env.port}`))
