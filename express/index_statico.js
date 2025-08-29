/*
Ora mostreremo solo file html statici e non dinamici

Creiamo la cartella public per rendere la cartella visibile a tutti.
Per farlo usiamo il comando app.use(express.static)
*/

const express = require('express');
const app = express();  
const PORT = 3000;
const cors = require('cors');
app.use(cors());  //permette le richieste da altri domini

//Importo la connessione al DB
const con = require('./utilities/db'); //importo la connessione al DB

/*
//Faccio la query utilizzando la connessione fatta nel file db.js nella cartella utilities
con.query("SELECT * FROM utenti", (err, result) => { //query(stringa sql, funzione di callback che mi restituisce errore e risultato)
    if(err) throw err; //se c'è un errore lo stampo
    console.log(result); //se non c'è errore stampo il risultato
});
*/

app.use(express.static('public'));  //rende visibile la cartella public


//Gestisto le ROOT del software
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/home.html');  //ora la root punta a home.html
})

app.get('/michele', (req,res) => {
    res.sendFile(__dirname + '/public/michele.html');  //ora la root punta a michele.html
})

app.get('/api/utenti', (req,res) => {
    //Faccio la query utilizzando la connessione fatta nel file db.js nella cartella utilities
    con.query("SELECT * FROM utenti", (err, result) => { //query(stringa sql, funzione di callback che mi restituisce errore e risultato)               
        if(err) throw err; //se c'è un errore lo stampo
        //console.log(result); //se non c'è errore stampo il risultato
        //res.send(result); //mando il risultato al client
        res.json(result); //mando il risultato al client in formato json
    });
})


app.listen(PORT);
console.log(`Server in esecuzione sulla porta ${PORT}`);