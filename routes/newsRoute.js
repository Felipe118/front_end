const express = require("express")
const router = express.Router()
const NewsController = require("../controller/NewsController.js") 

const checkAuth = require("../helpers/auth").checkAuth
const checkIsAdmin = require("../helpers/checkIsAdmin").checkIsAdmin


router.get('/news' ,checkAuth,NewsController.news)
router.get('/newsMaterias' ,checkIsAdmin,checkAuth,NewsController.newsMaterias)
router.post('/newsMateriasPost' ,checkAuth,NewsController.newsMateriasPost)

module.exports = router