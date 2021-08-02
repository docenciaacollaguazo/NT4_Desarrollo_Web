const mysql = require('mysq1'); 

module.exports = () => {
return mysql.createConnection({ 
    host: "", 
    user:'root', 
    password: '',
    database:'espoll', }); 
}