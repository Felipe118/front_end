
const {DataTypes} = require("sequelize")
const db = require("../db/db.js")
const User = require("../models/User.js")

const News = db.define("news", {
    title:{
        type: DataTypes.TEXT,
        allowNull:false
    },
    abstract:{
            type:DataTypes.TEXT,
            allowNull:false
    },
    news: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

News.belongsTo(User)
User.hasMany(News)

module.exports = News