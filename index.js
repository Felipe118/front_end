const express = require("express")
const exphbs = require("express-handlebars")
const session = require("express-session")
const FileStore = require("session-file-store")(session)
const flash = require("express-flash")

const app = express()

const conn = require('./db/db.js')

//models
const News = require("./models/News.js")

//routes
const authRoutes = require('./routes/authRoutes')
const homeRoute = require("./routes/homeRoute.js")
const newsRoutes = require("./routes/newsRoute.js")

app.engine('handlebars',exphbs.engine())

app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

//session middleware
app.use(
    session({
      name: 'session',
      secret: 'my_secret',
      resave: false,
      saveUninitialized: false,
      store: new FileStore({
        logFn: function () {},
        path: require('path').join(require('os').tmpdir(), 'sessions'),
      }),
      cookie: {
        secure: false,
        maxAge: 3600000,
        expires: new Date(Date.now() + 3600000),
        httpOnly: true,
      },
    }),
  )

app.use(flash());

app.use(express.static('assets'))
// set session to res
app.use((req, res, next) => {
    // console.log(req.session)
    console.log(req.session.userid);
  
    if (req.session.userid) {
      res.locals.session = req.session;
    }
  
    next();
  });

//Rotas

app.get('/', function(req,res){
    res.render('home')
});
app.use('/', authRoutes)
app.use('/', newsRoutes)

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));

