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

const transacaoDoTipoCredito = [
    {tipo: "credito", valor: 50.5},
    {tipo: "credito", valor: 1500.5},
    {tipo: "credito", valor: 505.5}
];

const transacaoDoTipoDebito = [
    {tipo: "debito", valor: 50.5},
    {tipo: "debito", valor: 520.5},
    {tipo: "debito", valor: 20}
];

function criarTransacao(transacao){
    usuario.transacao.push(transacao);
    usuario.saldo = transacao.tipo == "credito" ? usuario.saldo + transacao.valor : usuario.saldo + transacao.valor;
}

function getTransacaoMaisAltaPorTipo(tipo){ // Tipo = credito/debito
    let maiorValor = 0;
    let altaTrasacao = usuario.transacao[0];

    for (let i = 0; i < usuario.transacao.length; i++) {
        if(usuario.transacao[i].tipo == tipo){ // Valida os tipo de transacoes.
            if(usuario.transacao[i].valor > maiorValor){
                maiorValor = usuario.transacao[i].valor;
                altaTrasacao = usuario.transacao[i];
            }
        }
    }
    return altaTrasacao;
}

for (let i = 0; i < transacaoDoTipoCredito.length; i++) {
    criarTransacao(transacaoDoTipoCredito[i]);
}

for (let i = 0; i < transacaoDoTipoDebito.length; i++) {
    criarTransacao(transacaoDoTipoDebito[i]);
}

console.log(getTransacaoMaisAltaPorTipo("credito"));
console.log(getTransacaoMaisAltaPorTipo("debito"));