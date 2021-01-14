/* Cálculo da margem bruta da empresa com base na 
 receita líquida de vendas e no custo dos produtos vendidos.
 O resultado final é multiplicado por 100 para considerar o valor percentual. */
function margemBruta(receitaLiquida, custoDosProdutos) {
    //.toFixed() serve para definir o numero de casas decimais.
    const valorFinal = (((receitaLiquida - custoDosProdutos) / receitaLiquida) * 100).toFixed(1);
    return (`Margem Bruta -> ${valorFinal}%`); // Retorna o valor formatado.
}

function imprimir(dados){
    console.log(dados);
}

// Chama a função imprimir passando como parametro outra função.
imprimir(margemBruta(1000000, 500000));

imprimir("---");

imprimir(margemBruta(528459.11, 632501.87));
