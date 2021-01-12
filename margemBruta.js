/**
 * O lucro bruto de uma empresa é representado pela receita líquida de vendas menos o custo dos produtos vendidos. 
 * A margem bruta de uma empresa é calculada pela divisão do lucro bruto pela receita líquida de vendas. 
 * Faça a representação da fórmula da margem bruta, multiplicando o resultado final por 100 
 * para obter o valor percentual
 */
const custoDosProdutos = 1000;
const receitaLiquida = 3000;

function lucroBruto(receita, custo) {
    return receita - custo;
}

function margemBruta(lucroBruto, receitaLiquida) {
    //.toFixed() serve para definir o numero de casas decimais.
    return ((lucroBruto / receitaLiquida) * 100).toFixed(1);
}

const resultado = margemBruta(lucroBruto(receitaLiquida, custoDosProdutos), receitaLiquida);

console.log(`Margem Bruta -> ${resultado}%`);

