const User = require("../models/User.js")
const News = require("../models/News.js")

module.exports = class NewsController{
    static news(req,res){
        const id = req.session.userid
        //console.log(id)
    
        User.findOne({where:{id:id}, raw:true})
        .then((user) => {
            News.findAll()
            .then((news) => {
                
                const noticias = news.map((result) => result.get({ plain: true }))
                console.log(noticias)
                if(user.permission === 'admin'){
                    res.render("news/news", { layout: 'main_auth',user,noticias})
                 }else{
                    res.render("news/news", { layout: 'main_auth',noticias})
                 }
            })
            //  if(user.permission === 'admin'){
            //     res.render("news/news", { layout: 'main_auth',user})
            //  }else{
            //     res.render("news/news", { layout: 'main_auth'})
            //  }
        })
    }

    static newsMaterias(req,res){
        res.render("news/cad",{ layout: 'main_auth'} )
    }
    static newsMateriasPost(req,res){

        const materia = {
            title: req.body.title,
            abstract: req.body.abstract,
            news: req.body.news,
            language: req.body.language,
            userId: req.session.userid
        }
        News.create(materia)
        .then(() => {
            req.flash('message', 'Pensamento criado com sucesso!')
            req.session.save(() => {
                res.redirect('/noticias/news')
            })
        }).catch((err) => {
            console.log(err)
        })
       

    }
}