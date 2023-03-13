const mongoose = require("mongoose")

const artSchema = new mongoose.Schema({

    title: { type: String },
    date: { type: String },
    venue: { type: String },
    rules: { type: String },
    winners: {
        type: String,
        default: null
    }

})

const artEvent = mongoose.model('artEvent', artSchema)
module.exports = artEvent;