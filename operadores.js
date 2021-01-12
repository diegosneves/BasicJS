//Crie uma variável mesmoNome que verifica se nomeDoFulano é igual a nomeDoBeltrano;

function verificarNome(nome1, nome2){
    return (nome1 === nome2);
}

const mesmoNome = verificarNome("Fulano", "Fulano");

console.log(mesmoNome ? "Nomes iguais" : "Nomes diferentes");