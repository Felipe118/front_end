const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

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
})

app.listen(3000)


