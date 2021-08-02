const dbConnection = require('../config/databaseCon'); 
const connection = dbConnection(); 
let getEstudiante = async (req,res)=>{
    await connection.query("select from estudiantes", (err,result)=>{
         if (result) 
            res.send(result);
        else  
            res.status(500).send(err);
    });
}
module.exports = { 
    getEstudiante
}