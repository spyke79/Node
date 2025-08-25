function ciao(){
    console.log("CIao dalla funzione");
}

ciao();
ciao();

function ciaoNome(nome){
    console.log("Ciao da " + nome);
}

ciaoNome("Michele");
ciaoNome("Pasquale");

function somma(a, b){
    return a + b;
}

console.log(somma(5,7));