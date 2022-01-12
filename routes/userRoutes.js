const express = require("express")
const { route } = require("express/lib/application")
const router = express.Router()

const UserController = require("../controller/UserController.js")

const checkAuth = require("../helpers/auth").checkAuth

router.get('/checkUser',checkAuth,UserController.checkUser)
router.get('/', checkAuth,UserController.UserHome)

module.exports = router