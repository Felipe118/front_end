const express = require("express")
const router = express.Router()

const AuthController = require("../controller/AuthController")

router.get('/auth', AuthController.auth)

module.exports = router