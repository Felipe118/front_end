const User = require("../models/User.js")

module.exports = class NewsController{
    static news(req,res){
        const id = req.session.userid
        console.log(id)

        User.findOne({where:{id:id}, raw:true})
        .then((user) => {
             
             if(user.permission === 'admin'){
                res.render("news/news", { layout: 'main_auth',user})
             }else{
                res.render("news/news", { layout: 'main_auth'})
             }
        })
        
    }
    
}