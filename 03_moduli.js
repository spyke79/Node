/*
    In Node.js, un modulo è semplicemente un file JavaScript che funziona come un blocco di codice riutilizzabile. 
    Pensa a un modulo come a una scatola degli attrezzi toolbox 🧰. 
    Invece di avere tutti i tuoi attrezzi sparsi sul pavimento (il "global scope"), 
    li organizzi in scatole separate in base alla loro funzione (matematica, gestione file, saluti, ecc.).

    Ogni modulo ha il suo scope privato, il che significa che le variabili, 
    le funzioni o le classi definite al suo interno non sono visibili all'esterno, 
    a meno che non decidi esplicitamente di "esportarle".
*/

//Richiamo il modulo Matematica per poter utilizzare le funzioni al suo interno

const matematica = require('./03_Matematica');

console.log("la Somma di 4 + 5 è: ", matematica.somma(4,5))
console.log("la Sottrazione di 4 - 5 è: ", matematica.sottrazione(4,5))