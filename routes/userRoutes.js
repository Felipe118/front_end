const express = require("express")
const router = express.Router()

const UserController = require("../controller/UserController.js")

router.get('/checkUser',UserController.checkUser)

module.exports = router