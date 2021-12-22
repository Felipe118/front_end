const express = require("express")
const router = express.Router()

const AuthController = require("../controller/AuthController")

router.get('/auth', AuthController.auth)
router.get('/register', AuthController.register)
router.post('/register', AuthController.registerPost)

module.exports = router