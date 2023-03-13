const express= require('express')
const app = express()

require('dotenv').config() // to store secret links,codes etc
require('./config/db')  // to connect db in server
const PORT = 2300 || process.env.PORT
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(helmet());
app.use(morgan('dev'))
app.use(compression())




const art = require('./routes/art')


app.use('/art',art)







app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})