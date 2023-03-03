const mysql = require("mysql2")


const db = mysql.createConnection({
    port:"3306",
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"employee_db",
    
})



module.exports=db