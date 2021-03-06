const User = require("../models/User.js")


module.exports = class UserController{
    static  checkUser(req,res){
        const id = req.session.userid
       // console.log(id)

        User.findOne({where:{id:id}, raw:true})
        .then((user) => {
             
             if(user.permission === 'admin'){
                 res.render('users/user', {user},{ layout: 'main_auth'})
             }
        }
     
     )
    }

    static UserHome(req,res){

        const id = req.session.userid
       // console.log(id)

        User.findAll()
        .then((user) => {
          
             const usuarios = user.map((result) => result.get({ plain: true }))
             res.render('users/home',{
                   layout: 'main_auth',
                   usuarios,
               })
        })
        
      
    }
    
}
