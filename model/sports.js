const mongoose = require("mongoose")

const sportsSchema = new mongoose.Schema({

    title:{type:String},
    date:{type:String},
    venue:{type:String},
    rules:{type:String},
    Winners:{type:String}

})

const sportsEvent = mongoose.model('sportsEvent',sportsSchema)
module.exports=sportsEvent;