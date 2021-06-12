const globalConst = require('../appConstants')
const mongoose = require('mongoose')

const connectDb = () => {
    mongoose.connect(globalConst.dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    const db = mongoose.connection
    db.once('open', () => {
        console.log('connected')
    })
}

module.exports = connectDb