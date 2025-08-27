/*
    Modulo con tutte le funzioni di matematica

    Ci sono due meccanismi principali che fanno funzionare i moduli:

    module.exports: È un oggetto speciale che agisce come un "ponte" verso l'esterno. 
    Qualsiasi cosa assegni a module.exports (una funzione, un oggetto, una variabile) diventa pubblica e può essere importata da altri file.

    require(): È la funzione usata per "importare" un modulo. E va inserita nel file che userà questo modulo.
    Quando chiami require('./nomefile'), Node.js esegue il file nomefile.js e ti restituisce il suo oggetto module.exports.
*/

function somma(a,b){
    return a + b;
}

function sottrazione(a,b){
    return a - b;
}

/* module.exports = {
    somma:somma,
    sottrazione:sottrazione
}; */

module.exports = {
    somma,
    sottrazione
};