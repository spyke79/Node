/*
Le VARIABILI in Node JS

per dichiarare una varibile usiamo o let o var e non dichiariamo il tipo di variabile (es String, int)

var per variabili globali
let per variabili locali
const per variabili costanti
*/

var nome = "Michele"; //Dichiaro e inizializzo la variabile nome con Michele

console.log(nome + 4); //console.log serve pers tamapre a console il risultato

nome = 4;
console.log(nome + 4); //Fa la somma

//IF
var cognome = "Orlando";

if(cognome == "Sorbo"){
    console.log("Ciao Michele");
}else if(cognome == "Orlando"){
    console.log("Ciao Pasquale");
}
else{
    console.log("Non ti conosco");
}

/*
== il valore delle variabili è uguale quindi "4" è uguale a 4

=== (Strettamente uguale) sia il valore che la tipologia delel variabili deve essere uguale


per usare AND e OR

AND = &&
OR = ||

*/

var num = 4;
var num2 = "4";
console.log(typeof(num));
console.log(typeof(num2));

if(num === num2){
    console.log("Il numero è uguale");
}else{
    console.log("Non uguale");
}

if(num == num2){
    console.log("Il numero è uguale");
}else{
    console.log("Non uguale");
}

/*
Scrivere un piccolo script che presi tre numeri di tipologia identica stampi a video il numero maggiore

Provare con tre esempi
es 1;
n1 = 3, n2 = 5, n3 = 1

es 2;
n1 = 8, n2 = 5, n3 = 3


es 1;
n1 = 3, n2 = 5, n3 = 12
*/

var n1 = 3;
var n2 = 5;
var n3 = 12;

if(n1 > n2 && n1 > n3){
    console.log("Il numero maggiore è n1: " + n1);
}else if(n2 > n1 && n2 > n3){
    console.log("Il numero maggiore è n2: " + n2);
}else{
    console.log("Il numero maggiore è n3: " + n3);
}

//Le funzioni in NODE (JS)