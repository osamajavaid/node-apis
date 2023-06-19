const users = require('../models/userSchema')
const moment = require('moment')

// creating a user
exports.userpost = async (req, res) => {
    // console.log(req.body)
    const { firstname, email, mobile, gender, status } = req.body
    if (!firstname || !email || !mobile || !gender || !status) {
        res.status(400).json({ error: "All inputs are required" })
    }
    try {
        const preuser = await users.findOne({ email: email })
        if (preuser) {
            res.status(400).json({ error: 'This user is already exists' })
        } else {
            const dateCreate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
            const userData = new users({
                firstname, email, mobile, gender, status, datecreated: dateCreate
            })
            await userData.save()
            res.status(200).json(userData)
        }
    }
    catch (error) {
        res.status(400).json(error)
        console.log("Catch Block Error")
    }
}

// updating a user
exports.updateUserById = async (req, res) => {

    const { id } = req.params
    const { firstname, email, mobile, gender, status } = req.body

    try {

        const updateDate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
        const updateUserData = await users.findByIdAndUpdate({ _id: id }, {
            firstname, email, mobile, gender, status, dateupdated: updateDate
        }, { new: true })
        await updateUserData.save()
        res.status(200).json('data updated successfully')
    }
    catch (error) {
        res.status(400).json(error)
        console.log("Catch Block Error")
    }
}

// get all users
exports.getUsers = async (req, res) => {
    try {
        const userData = await users.find()
        res.status(200).json(userData)
    }
    catch (error) {
        res.status(400).json(error)
        console.log("Catch Block Error")
    }
}

//  get User By Id
exports.getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const singleUserData = await users.findOne({ _id: id })
        res.status(200).json(singleUserData)
    }
    catch (error) {
        res.status(400).json(error)
        console.log("Catch Block Error")
    }
}
//  delete User By Id
exports.deleteUserById = async (req, res) => {
    const { id } = req.params
    try {
        const singleUserData = await users.findByIdAndDelete({ _id: id })
        res.status(200).json(`user with id: ${id} has been successfully deleted`)
    }
    catch (error) {
        res.status(400).json(error)
        console.log("Catch Block Error")
    }
}