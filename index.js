const express = require("express")
const exphbs = require("express-handlebars")
const session = require("express-session")
const FileStore = require("session-file-store")(session)
const flash = require("express-flash")

const app = express()

const conn = require('./db/db.js')

//routes

const authRoutes = require('./routes/authRoutes')
const homeRoute = require("./routes/homeRoute.js")
app.engine('handlebars',exphbs.engine())

app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

app.use(express.static('assets'))

//Rotas

app.get('/', function(req,res){
    res.render('home')
});
app.use('/', authRoutes)

app.listen(3000)


