const express = require('express'); 

const app = express(); 
const cors= require('cors') // body-parser 
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:false})); 
app.set('port', process.env.PORT||8080); 
const{ getEstudiante, addEstudiante } = require("../src/controller/estudiante.controller");

app.get('/', getEstudiante); 
app.use("/api/estudiante",require("./routes/estudiante") ); 
app.listen(app.get('port')); 
console.log(`Server on port ${app.get('port')}`);