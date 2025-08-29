//Connessione DB
const mysql = require('mysql'); //Vado ad importare il pacchetto di MySQL

//Dopo aver importato il pacchetto, vado a creare la connessione
const con = mysql.createConnection({
    host: "localhost",
    user:   "root",
    password: "",
    database: "node"
});

//Ora provo a connettermi per vedere se tutto è andato a buon fine
con.connect((err) => {
    if(err) throw err;
    console.log("Connesso al DB NODE!");
});


//Facico una query di selezione per vedere se riesco a leggere i dati
con.query("SELECT * FROM utenti", (err, result) => { //query(stringa sql, funzione di callback che mi restituisce errore e risultato)
    if(err) throw err; //se c'è un errore lo stampo
    console.log(result); //se non c'è errore stampo il risultato
});

module.exports = con; //Esporto la connessione per poterla usare in altri file
