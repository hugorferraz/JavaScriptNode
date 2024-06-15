//Includes ou Imports
// Instalar os pacotes antes. Exemplo: mpm install readline-sync
let readline = require("readline-sync");

//Variáveis
let num = 0;

//Funções
function numeroPar(num){
    let retorno = false;
    if (num%2==0) retorno = true;
    return retorno;
}

console.log("Programa que verifica se um numero e par ou impar");
num = parseInt(readline.question("Digite um numero: "));

//let numeropar = numeroPar(num);
if(numeroPar(num)==true){
    console.log("Numero Par");
}
else {
    console.log("Numero Impar");
}

/*
if (num%2==0){
    console.log("Numero " + num+" e Par");
}
else{
    console.log("Numero " + num+" e Impar");
}
*/