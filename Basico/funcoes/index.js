//Exemplo com variaveis globais
function exibirMensagemGlobal(){
    console.log(msgGlobal);
}
//Exempllo sem variavel global
function exibirMensagemLocal(msg){
    console.log(msg);
}
var msgGlobal = "Ola Mundo Global!!!";
let msgLocal = "Ola Mundo Local!!!";

exibirMensagemGlobal();
exibirMensagemLocal(msgLocal);

