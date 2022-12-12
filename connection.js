const mysql=require("mysql2")


const db=mysql.createConnection({
    port:3306,
    host:"localhost",
    user:"root",
    password:"password",
    database:"emploee_db"
})

db.connect(function(){console.log("emploee database connected")})

module.exports=db