const User = require("../models/User.js")

const bcrypt = require("bcryptjs")

module.exports = class AuthController{

    static auth(req,res){
        res.render('layouts/auth',{ layout: 'auth'})
    }

}