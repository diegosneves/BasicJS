/*
Exercício:
Uma empresa quer verificar se um colaborador está qualificado para a aposentadoria. 
Para estar em condições de se aposentar, ele deve atender a pelo menos um dos seguintes critérios:

1 - Ter pelo menos 65 anos de idade;
2 - Ter trabalhado no mínimo 30 anos;
3 - Ter pelo menos 60 anos de idade e 25 anos de trabalho.

Você deve criar uma função chamada verificarAposentadoria, que recebe um nome como argumento e verifica se 
aquele colaborador pode se aposentar.

A função deve imprimir uma mensagem dizendo "Parabéns, já pode sair de férias eternas :)" ou "Infelizmente para você, 
ainda falta um tempo :(". Caso seja informado o nome de um colaborador que não existe, deve ser apresentada 
a mensagem "Colaborador inválido :|".

Use os arrays abaixo para considerar as informações de colaboradores, idade e tempo de trabalho:
*/

colaboradores    = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison']
idades           = [      69,          66,           58,      61,         60,          64,         59,         55]
temposDeTrabalho = [      31,          29,           30,      26,         25,          24,         26,         29]

function verificarAposentadoria(nome){
    let indice = 0; //Indice que será usando para todos os arrays
    let aposentar = false;
    let existePessoa = false;

    //Laço de repetição para buscar um colaborador pelo nome
    for (indice; indice < colaboradores.length; indice++) {

        if(nome == colaboradores[indice]){
            existePessoa = true; // Se encontrou o nome, logo, a pessoa existe :)
            if(idades[indice] >= 65){ // Regras de aposentadoria
                aposentar = true;
            } else if(temposDeTrabalho[indice] >= 30){ // Regras de aposentadoria
                aposentar = true;
            } else if(idades[indice] >= 60 && temposDeTrabalho[indice] >= 25){ // Regras de aposentadoria
                aposentar = true;
            }
            break; // Apos encontrar o nome valida as regras e sai fora do laço. 
        }
    }

    //Se "não" existe a pessoa, informa que o colaborador é inválido.
    if(!existePessoa){
        console.log("Colaborador inválido :|");
        return;
    } else {
        if(aposentar){
            console.log("Parabéns, já pode sair de férias eternas :)");
        } else {
            console.log("Infelizmente para você, ainda falta um tempo :(");
        }
    }
};

verificarAposentadoria('Rosiméri');    // true (regra 3)
verificarAposentadoria('Agripino');    // false (falta 1 ano de idade para regra 3)
verificarAposentadoria('Rhoger');      // true (todas)
verificarAposentadoria('Hudnélson');   // false (colaborador inexistente)
verificarAposentadoria('Gleysberto');  // true (regra 2)
verificarAposentadoria('Regislane');   // false (falta 1 ano de idade para regra 1 e 1 de trabalho para regra 3)
verificarAposentadoria('Cléverson');   // true (regras 1 e 3)
verificarAposentadoria('Nádio');       // true (regra 3)
verificarAposentadoria('Wellison');    // false (falta 1 ano de trabalho para regra 2)
verificarAposentadoria('Florisberto'); // false (colaborador inexistente)

