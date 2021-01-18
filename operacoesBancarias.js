/*
Crie um programa para realizar operações bancárias na conta de um usuário.

Comece criando um objeto com o nome do usuário, suas transações e saldo.

As transações (transactions) devem iniciar como um array vazio [] e o saldo (balance) em 0 (zero).
*/

const usuario = {
    nome: "Fulano",
    transacao: [],
    saldo: 0
};

//Um array de trasacoes do tipo "credito" para utilizar como teste.
const transacaoDoTipoCredito = [
    {tipo: "credito", valor: 50},
    {tipo: "credito", valor: 120}
];

//Um array de trasacoes do tipo "debito" para utilizar como teste.
const transacaoDoTipoDebito = [
    {tipo: "debito", valor: 80},
    {tipo: "debito", valor: 30}
];

/**
 * Função que insere uma transação no atributo(array) do objeto usuario.
 * @param {*} novaTransacao recebe um objeto(transacao) como parâmetro.
 */
function criarTransacao(novaTransacao){
    //Insere o objeto na ultima posicao do array(atributo transacao do usuario).
    usuario.transacao.push(novaTransacao);

    //Atualiza o saldo do usuario com base no tipo de transacao recebida como parametro.
    //Foi utilizado um operador ternario para simplificar o codigo.
    usuario.saldo = novaTransacao.tipo === "credito" ? usuario.saldo + novaTransacao.valor : usuario.saldo - novaTransacao.valor;;
}

/**
 * Função que retorna a transacao com o valor mais alto, registrado.
 * @param tipo Recebe um tipo de transacao (credito ou debito).
 * @retuns Um objeto de um array cujo o valor da transacao seja o maior dentro do array.
 */
function getTransacaoMaisAltaPorTipo(tipo){
    let maiorValor = 0;
    let altaTrasacao = usuario.transacao[0];

    for (let i = 0; i < usuario.transacao.length; i++) {
        if(usuario.transacao[i].tipo === tipo){ // Valida os tipo de transacoes.
            if(usuario.transacao[i].valor > maiorValor){
                maiorValor = usuario.transacao[i].valor;
                altaTrasacao = usuario.transacao[i];
            }
        }
    }
    return altaTrasacao;
}
/**
 * Função que retorna a média dos valores de todas a transações dentro do atributo transacao(array) do usuário.
 * @returns Retorna a média dos valores.
 */
function getMediaDosValoresDasTransacoes(){
    let valorMedio = 0;
    let somaValores = 0;
    for (let i = 0; i < usuario.transacao.length; i++) {
        somaValores += usuario.transacao[i].valor;        
    }
    valorMedio = (somaValores / usuario.transacao.length).toFixed(2);
    return valorMedio;
}

/**
 * Função que retorna o número de transações de cada tipo e o retorno da função deve ser um objeto.
 * @returns Retorna o objeto com os dados.
 */
function getContadorDeTransacoes(){
    //Objeto contador com os atributos zerados.
    const contador = {
        credito: 0,
        debito: 0
    }

    //Laço que percorre o array(atributo transacao do objeto usuario), verificando o tipo de transação e somando mais um ao contador.
    for (let i = 0; i < usuario.transacao.length; i++) {
        //Novamente usado o operador ternario para facilitar o código.
        usuario.transacao[i].tipo === "credito" ? contador.credito++ : contador.debito++;        
    }
    return contador; //Retorna o objeto com os atributos atualizados.
}

/* Testar as functions */

//Laco de repeticao usado para facilitar a insercao dos arrays de apoio(testes).
for (let i = 0; i < transacaoDoTipoCredito.length; i++) {
    criarTransacao(transacaoDoTipoCredito[i]);
}

//Laco de repeticao usado para facilitar a insercao dos arrays de apoio(testes).
for (let i = 0; i < transacaoDoTipoDebito.length; i++) {
    criarTransacao(transacaoDoTipoDebito[i]);
}

const creditoMaisAlto = getTransacaoMaisAltaPorTipo("credito");
const debitoMaisAlto = getTransacaoMaisAltaPorTipo("debito");


console.log(`Transação tipo: ${creditoMaisAlto.tipo} | Valor: ${creditoMaisAlto.valor}`);
console.log(`Transação tipo: ${debitoMaisAlto.tipo} | Valor: ${debitoMaisAlto.valor}`);

console.log(`Saldo atual do Usuário: ${usuario.saldo}`);

console.log(`Valor médio das Transações: ${getMediaDosValoresDasTransacoes()}`)

console.log(`Total de Transações:\nCrédito - ${getContadorDeTransacoes().credito} | Débito: ${getContadorDeTransacoes().debito}`);
