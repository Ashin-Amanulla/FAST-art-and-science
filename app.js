const express= require('express')
const app = express()

require('dotenv').config() // to store secret links,codes etc
require('./config/db')  // to connect db in server
const PORT = 2300 || process.env.PORT



app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})