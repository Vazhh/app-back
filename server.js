import express from "express";

import "dotenv/config.js"
import './config/database.js'

const server = express(); // se crea el servidor
const PORT =  process.env.PORT || 8080;// se define el puerto del servidor
const ready = ()=> console.log('server ready on port ' + PORT);

//middlewares
server.use(express.json())//permite trabajar con formato json
server.use(express.urlencoded({ extended: false })) //permite capturar consultas complejas


//router + server
server.listen(PORT, ready)// iniciar servidor

console.log(process.env)