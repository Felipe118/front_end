
const {DataTypes} = require("sequelize")

 const db = require("../db/db.js")


 const User = db.define('users', {
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
     },
     permission:{
        type: DataTypes.STRING,
         allowNull:false
     }
 })

 module.exports =User