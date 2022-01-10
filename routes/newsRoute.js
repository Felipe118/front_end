const express = require("express")
const router = express.Router()
const NewsController = require("../controller/NewsController.js") 

const checkAuth = require("../helpers/auth").checkAuth

router.get('/news' ,checkAuth,NewsController.news)
router.get('/newsMaterias' ,checkAuth,NewsController.newsMaterias)
router.post('/newsMateriasPost' ,checkAuth,NewsController.newsMateriasPost)

module.exports = router