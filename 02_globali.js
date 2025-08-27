/*
__dirname:
    https://nodejs.org/docs/latest/api/modules.html#__dirname
    __dirname: percorso alla cartella corrente

*/

console.log("Percorso della cartella: ", __dirname)

//Es. pratico
const BASE_PATH = __dirname;
console.log("il percorso per inserire una file è: ",BASE_PATH+"\\img")


/*
__filename
    https://nodejs.org/docs/latest/api/modules.html#__filename
    __filename: nome del file
*/

console.log("File Name: ", __filename)

/*
require: funzione per usare i moduli
module: info sul modulo corrente
process: info relative all'ambiente di esecuzione
*/

//console.log("Require", require)
//console.log("Modulo", module)
console.log("Processo", process)