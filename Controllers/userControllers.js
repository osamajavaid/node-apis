const users = require('../models/userSchema')
const moment = require('moment')

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
            res.status(200).json(userDate)
        }
    }
    catch (error) {
        res.status(400).json(error)
        console.log("Catch Block Error")
    }
}