/**
 * O IMC significa Índice de Massa Corpórea e é um indicador utilizado pela OMS (Organização Mundial da Saúde)
 * como referência para saber a saúde de uma pessoa com base no seu peso e altura.
 */

 const peso = 102;
 const altura = 1.88;

 const imc = (peso / altura ** 2).toFixed(2);

 const classificacao = [
     {tipo:"Magreza", grau: 0},
     {tipo: "Normal", grau: 0},
     {tipo: "Sobrepeso", grau: 1},
     {tipo: "Obesidade", grau: 2},
     {tipo: "Obesidade grave", grau: 3}
 ];

 

 console.log(imc);