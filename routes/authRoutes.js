const express = require("express")
const router = express.Router()

const AuthController = require("../controller/AuthController")



router.get('/auth', AuthController.auth)
router.post('/auth', AuthController.authPost)
router.get('/register', AuthController.register)
router.post('/register', AuthController.registerPost)
router.get('/logout', AuthController.logout)

module.exports = router