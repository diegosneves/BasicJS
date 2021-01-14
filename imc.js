/**
 * O IMC significa Índice de Massa Corpórea e é um indicador utilizado pela OMS (Organização Mundial da Saúde)
 * como referência para saber a saúde de uma pessoa com base no seu peso e altura.
 */

 const peso = 80;
 const altura = 1.98;

 const imc = (peso / altura ** 2).toFixed(2);

 const classificacao = [
     {tipo:"Magreza", grau: 0},
     {tipo: "Normal", grau: 0},
     {tipo: "Sobrepeso", grau: 1},
     {tipo: "Obesidade", grau: 2},
     {tipo: "Obesidade grave", grau: 3}
 ];

 function retornarClassificacao(resultadoImc){
     let classificacaoAtual = "";
     if(resultadoImc < 18.5){
        classificacaoAtual = classificacao[0];
     } else if(resultadoImc >= 18.5 && resultadoImc <= 24.99){
         classificacaoAtual = classificacao[1];
     } else if(resultadoImc >= 25 && resultadoImc <= 29.99){
         classificacaoAtual = classificacao[2];
     } else if(resultadoImc >= 30 && resultadoImc <= 39.99){
         classificacaoAtual = classificacao[3];
     } else {
         classificacaoAtual = classificacao[4];
     }
     return classificacaoAtual;
 }

 function mensagemOms(grauDeObesidade){
     if(grauDeObesidade == 3){
         console.log("\nÉ importante procurar um médico para avaliar sua saúde");
     } else if(grauDeObesidade > 0 && grauDeObesidade < 3){
         console.log("\nCuidado! Você está acima do peso recomendado pela OMS.");
     } else {
         return;
     }
 }

 function exibirResultado(imc, resultadoDaClassificacao){
     const topo = "|     IMC     |      Classificação       |    Grau de Obesidade     |\n";
     console.log(`${topo}|   ${imc}     |       ${resultadoDaClassificacao.tipo}                     ${resultadoDaClassificacao.grau}             `);
     mensagemOms(resultadoDaClassificacao.grau);
 }

exibirResultado(imc, retornarClassificacao(imc));
