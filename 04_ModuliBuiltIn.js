//Sono i moduli già presenti in Node.js

//Se i simboli sono scatole viola sono funzioni e ci vogliono le (), se sono blue sono costanti e non vogliono le ().

const os = require('os'); //Per i moduli buidIn scrivo solo il nome del modulo senza ./

console.log(os.userInfo()); //Informazioni sull'utente del PC

console.log(os.uptime()); //Tempo di utilizzo del PC, da quanto tempo è acceso in secondi

console.log(os.version()); //Versione del sistema operativo

console.log(os.arch()); //Architettura del sistema operativo

//Assegnazione di informazioni alle variabili
console.log("---------------------");
const os_info = {
    nome: os.type(),
    release: os.release(),
    memoria: os.totalmem(),
    disponibile: os.freemem(),
    macRel: os.cpus(),
}

console.log(os_info)

//Modulo ppath per conoscere i percorsi

const path = require('path');

console.log("Conoscere il tipo di separatore: ", path.sep);

//Posso usare la funzione join del modulo path per unire dei percorsi che mi potranno servire
const jsFile = path.join('./js', 'mio.js');
console.log(jsFile);


//Basename ritorna il nome del file del percorso
console.log(path.basename(jsFile));

//Per avere tutto il percorso 
const percorsoAssoluto = path.resolve(__dirname,'./js','mio.js');
console.log(percorsoAssoluto);