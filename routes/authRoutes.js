const express = require("express")
const router = express.Router()

const AuthController = require("../controller/AuthController")

router.get('/auth', AuthController.auth)
router.get('/register', AuthController.register)

module.exports = router