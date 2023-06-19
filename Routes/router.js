const express = require('express')
const router = new express.Router();
const controllers = require('../Controllers/userControllers')
//routes
router.post('/user/register', controllers.userpost)
router.get('/user/getAllUsers', controllers.getUsers)
router.get('/user/singleUser/:id', controllers.getUserById)
router.get('/user/deleteUser/:id', controllers.deleteUserById)
router.put('/user/updateUser/:id', controllers.updateUserById)

module.exports = router;