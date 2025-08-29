/*

Introduzione a Express.

Fare "npm init -y" (-y per fare il file di default) e cancellare lo script di default

poi installare 
- express "npm i express"
- nodemon "npm --save-dev" e poi andare in package.json e creare lo 
  scritp -> "start": "nodemon index.js". Per far partire lo script start basta fare npm start. 
  Se cambiamo nome allo script npm run nome_script perchè non sono parole chiave

*/
import express from 'express';
//const express = require('express') //Importiamo il modulo express
const app = express(); //Creo un istanza di express
const port = 3000;

app.get('/', (req, res) =>{
    res.send("<h1>Ciao dalla prima pagina Express</h1><p>Con modulo nodemon</p>");
});
app.get('/michele', (req,res) =>{
    res.send("<h1>Pagina di michele</h1>");
});


//Inseriamo il listner sulla porta del server
app.listen(port);
console.log("Server in ascolto sulla porta: ",port);