/*
Ora mostreremo solo file html statici e non dinamici

Creiamo la cartella public per rendere la cartella visibile a tutti.
Per farlo usiamo il comando app.use(express.static)
*/

const express = require('express');
const app = express();  
const PORT = 3000;

//Importo la connessione al DB
const con = require('./utilities/db'); //importo la connessione al DB



app.use(express.static('public'));  //rende visibile la cartella public


//Gestisto le ROOT del software
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/home.html');  //ora la root punta a home.html
})

app.get('/michele', (req,res) => {
    res.sendFile(__dirname + '/public/michele.html');  //ora la root punta a michele.html
})


app.listen(PORT);
console.log(`Server in esecuzione sulla porta ${PORT}`);