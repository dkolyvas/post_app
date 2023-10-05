const typeorm = require("typeorm")
require('dotenv').config()
require('mysql')

const CategoryEntity = require("./model/Category").CategoryEntity
const PostEntity = require("./model/Post").PostEntity


const datasource = new typeorm.DataSource({
    type: "mariadb",
    host: process.env.HOST,
    port: 3306, 
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    entities:[CategoryEntity, PostEntity]
   

     
})

datasource
.initialize()
.then(function(){
    console.log("Connected to database")
})
.catch(function(error){
    console.log("Problem connecting to database", error)
})


module.exports = {datasource}