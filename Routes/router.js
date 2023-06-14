const express = require('express')
const router = new express.Router();
const controllers = require('../Controllers/userControllers')
//routes
router.post('/users/register', controllers.userpost)

module.exports = router;