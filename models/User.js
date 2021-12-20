
const {DataTypes} = require("sequelize")

 const db = require("../db/db.js")

 const User = db.define('usuario', {
     name:{
         type:DataTypes.STRING,
         allowNull: false
     },
     email: {
         type: DataTypes.STRING,
         allowNull:false
     },
     pass: {
         type: DataTypes.STRING,
         allowNull:false
     }
 })

 module.exports =User