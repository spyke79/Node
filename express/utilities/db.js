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



module.exports = con; //Esporto la connessione per poterla usare in altri file
