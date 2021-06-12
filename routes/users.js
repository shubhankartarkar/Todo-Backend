const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Users = require('../models/users');

router.get('/', async (req, res) => {
    try {
        let users = await Users.find({}).exec()
        res.send(users)
    } catch(e){ 
        console.log('error Occured')
    }
})

router.get('/get-user', async(req, res) => {
    try {
        let { userId } = req.query
        let selectedUser = await Users.findById(mongoose.Types.ObjectId(userId))
        res.send(selectedUser)
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        let { name, email, phoneNo, userName, password } = req.body
        let user = new Users({name, email, phoneNo, userName, password})
        let newUser = await user.save()
        res.send(newUser)
    } catch (error) {
        console.log('error Occured')
    }
})

router.put('/', async (req, res) => {
    try {
        let { _id, name, email, phoneNo, userName, password } = req.body
        let updatedUser = await Users.findByIdAndUpdate(mongoose.Types.ObjectId(_id), {
            $set : {
                name, email, phoneNo, userName, password 
            }
        }, { new : true })
        res.send(updatedUser)
    } catch (error) {
        console.log(error)
    }
})

router.delete('/', async (req, res) => {
    try {
        let { _id } = req.body
        let deleted = await Users.findByIdAndDelete(mongoose.Types.ObjectId(_id))
        res.send({
            message: "User deleted"
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router