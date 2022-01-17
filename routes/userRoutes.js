const express = require("express")
const { route } = require("express/lib/application")
const router = express.Router()

const UserController = require("../controller/UserController.js")

const checkAuth = require("../helpers/auth").checkAuth
const checkIsAdmin = require("../helpers/checkIsAdmin").checkIsAdmin

router.get('/checkUser',checkAuth,UserController.checkUser)
router.get('/',checkIsAdmin, checkAuth,UserController.UserHome)

module.exports = router