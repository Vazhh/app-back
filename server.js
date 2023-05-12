import express from "express";

const server = express(); // se crea el servidor

const PORT =  process.env.PORT || 8080;// se define el puerto del servidor

const ready = ()=> console.log('server ready on port ' + PORT);

server.listen(PORT, ready)// iniciar servidor

console.log(process.env)