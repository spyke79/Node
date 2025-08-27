//Differenza tra metodo sincrono e asincrono

const path = require('path');

//Vado a ricordare la cartella che conterrà i miei file di testo .txt
const file_txt = path.resolve(__dirname,'file');
console.log(file_txt);

//Metodo sincrono

const { readFileSync, writeFileSync } = require('fs');

//Creo un file di testo molto grande
// for(let i = 0; i<= 20000; i++){
//     writeFileSync(file_txt+"/fileGrande.txt", "\nCiao sono la riga " + i, {flag:'a'});
// }

//Vado a scrive nel file prova.txt il mio nome
writeFileSync(file_txt+"/prova.txt", "Pasquale Orlando"); //Percorso e nome del file, testo da inserire

writeFileSync(file_txt+"/prova.txt", "\nMichele Sorbo", {flag:'a'}); //Vado a continare la scrittura in modalità append

//Leggo il file in modo Sincrono
console.log("Inzio Lettura Asincrono");
console.log(readFileSync(file_txt+"/prova.txt", 'utf-8'));
console.log(readFileSync(file_txt+"/testo.txt", 'utf-8'));


//Metodo Asincrono
const { readFile, writeFile } = require('fs');
const { error } = require('console');

/*
CallBack, a differenza del sincrono, che priama prendevamo il file e poi lo leggevamo e mandavamo a schermo
Ora diciamo alla funzione di aprire il file e quando ha finito di leggerlo di mandarlo a video
*/

console.log("\n\n\nInizio Asincrono-----------------");

readFile(file_txt+"/fileGrande.txt", "utf-8", (error, result)=>{
    if(error){
        console.log(error)
        return //Chiudo e non andiamo avanti con la lettura
    }

    const file_r = result;
    console.log("Fine Lettura"); //Stampo a video il risultato della lettura
})

console.log("passo al passo successivo");