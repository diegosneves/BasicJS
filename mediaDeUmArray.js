const valores = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55];

function exibirMedia(dados){
    let total = 0;
    for (let i = 0; i < dados.length; i++) {
        total += dados[i];
    }
    const media = (total / dados.length).toFixed(2);
    console.log("Média: ", media);
}

exibirMedia(valores);
