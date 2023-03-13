const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URL,
    {
        dbName: process.env.MONGO_DB,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(() => { console.log(`MongoDB connected`) })
    .catch((err) => { console.log(`Error: ${err}`) })

