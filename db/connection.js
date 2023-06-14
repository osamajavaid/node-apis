const mongoose = require('mongoose')
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log("Data base is connected"))
    .catch((err) => console.log("ERROR:: ", err))