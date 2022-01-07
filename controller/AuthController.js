const User = require("../models/User.js")

const bcrypt = require("bcryptjs")
const res = require("express/lib/response")
const req = require("express/lib/request")


module.exports = class AuthController{

    static auth(req,res){
        res.render('layouts/auth',{ layout: 'auth'})
    }
    static async authPost(req,res){
       
        const {email,password} = req.body

        const user = await User.findOne({where: {email:email}}) 

        //console.log(user)

        if (!user) {
            res.render('auth', {
              message: 'Usuário nao encontrado!',
            })
      
            return
          }

          //compare password
          const passwordMatch = bcrypt.compareSync(password, user.pass)

          if(!passwordMatch){
            res.render('auth',{
                message: "Senha Invalida"
            })
            return
          }

          req.session.userid = user.id
         console.log(req.session)

          req.flash('message','Login realizado com sucesso')
          req.session.save(()=>{
              res.redirect('/noticias/news');
          })
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
                    res.redirect('/auth')
                })
             }).catch((erro) => console.log(erro))
    }

    static logout(req, res) {
        req.session.destroy()
        res.redirect('/')
      }

}