const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true },
    phoneNo: { type: String, trim: true },
    userName: { type: String, trim: true, unqiue: true },
    password: { type: String, trim: true }
},
{ timestamps: true, versionKey: false })

const Users = mongoose.model('users', userSchema)
module.exports = Users
