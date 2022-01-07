const express = require("express")
const router = express.Router()
const NewsController = require("../controller/NewsController.js") 

const checkAuth = require("../helpers/auth").checkAuth

router.get('/news' ,checkAuth,NewsController.news)

module.exports = router