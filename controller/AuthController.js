const User = require("../models/User.js")

const bcrypt = require("bcryptjs")


module.exports = class AuthController{

    static auth(req,res){
        res.render('layouts/auth',{ layout: 'auth'})
    }
    static register(req,res){
        res.render('register')
    }
    static async registerPost(req,res){
            const {name,email,pass,confirmpassword} = req.body

            if(pass != confirmpassword){
                req.flash('message', 'As senhas não conferem')
                res.render('register')
                return
            }

            const CheckIfUserExists = await User.findOne({where: {email:email}})

          if(CheckIfUserExists){
                req.flash('message', 'O E-mail já foi cadastrado')
                res.render('register')
               return
           }
            const salt = bcrypt.genSaltSync(10)
            const hashedPassword = bcrypt.hashSync(pass, salt)

            const user = {
                name,
                email,
                pass: hashedPassword
             }

             User.create(user)
             .then((user) => {
                 //inicializando a sessao
                req.session.userid = user.id
               

                req.session.userid = user.id

                req.flash('message', 'Cadastro realizado com sucessso')

                req.session.save(()=>{
                    res.redirect('/')
                })
             }).catch((erro) => console.log(erro))
    }

}