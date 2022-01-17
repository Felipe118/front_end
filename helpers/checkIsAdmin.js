const User = require("../models/User")

module.exports.checkIsAdmin = function (req, res, next) {
    const id = req.session.userid
    // console.log(id)

     User.findOne({where:{id:id},raw:true})
     .then((user) => {
       
          
        if(user.permission != 'admin'){
          return  res.redirect('/noticias/news')
        }
          next()
       
     })

  
   
  }
  