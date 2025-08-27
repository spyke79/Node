/*
NPM = Node Package Manager (https://www.npmjs.com/)

Un pacchetto o packeg è un codice riutilizzabile

COMANDI:
npm => per avere una panoramica su npm

npm --version -V => Visualizzare la versione

npm install(o solo i) nome_del_pacchetto => Serve ad installare un pacchetto in locale, l'istallazione viene fatta solo sulla cartella del progetto

npm -g nome_del_pacchetto => Installazione globale del pacchetto, installo sul pc quindi è incluso per tutti i progetti che apro

npm uninstall nome_del_pacchetto => disistalla il pacchetto

PACKAGE JASON
- è un file manifest con le inforamzioni del nostro progetto, dall'autore fino alle dipendenze
- si può fare sia a mano (troppo difficile), oppure con "npm init" e lo compiliamo tramite terminale, 
    oppure "npm init -y" ne crea uno di default che possiamo modificare
*/

//Proviamo il pacchetto lodash appena installato
const _ = require('lodash') //Per convenzione si mette "_"

const oggetti = [1,[2,[3,[4]]]] //Creo un array multidimensionale

const oggetti2 = _.flatMapDeep(oggetti)//Creo un array flat da un array multidimensionale

console.log("Oggetti: ", oggetti)
console.log("Oggetti 2: ", oggetti2)


/*Proviamo ad importare bootstrap
lanciamo il comando "nom i bootstrap"

dopo lo disistalliamo con "npm uninstall bootstrap"

Per disistallare un pacchetto si potrebbe fare anche a mano togliendo il nome da dependencies, da package-look.json
eliminare la cartella da node_module e dopo rifare l'installazione con il comando "npm init"

Quando lavoriamo con altri programmatori, non condividiamo node_modules perchè chi lo scarica può fare un 
"npm install" e node scaricherà e installerà tutte le dependencies che si trovano in package.json e crea 
tutto il necessario
*/


/*
IL PACKAGE-LOCK.JSON
serve ad andare a definire in modo specifico quale è la versione installata nella nostra applicazione.
Nelle dependencies possiamo trovare i package con il numero di veriosne scritto così "^5.0.1", significa che
va bene una versione 5.0.1 o superiore. 
Nel file package-lock.json invece troviamo la verione esatta.

Capire i numeri delle versione x.y.z
    x = Magior changes
    y = Mainor changes
    z = Patches
*/