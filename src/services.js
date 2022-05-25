


function somar (a, b){
    return a + b;
}

function dobro (n){
    return n * 2;
}

function media(a, b, c){
    let x = (a + b + c) /3; 
    return x;
}

function tabuada(array){
    let Array = [9];
    for (let i = 0; i < 10; i++) {
        Array[i] = a * i;
    }
    return Array;
}

function corprimaria(cor){
    if (cor == "Vermelho" || cor == "Amarelo" || cor == "Azul") {
        let x = true;
    }
    return x;
}

function ingressocinema(qtd1, qtd2, dia, tipo){
    let preco = qtd1 * 28.50;

    if (dia == "Quarta-Feira") {
        preco = (qtd1 * 28.5) / 2;
    }
    else if (qtd2) {
        preco = (qtd2 * 28.5) / 2;

        if (tipo == "Brasileiro") {
            preco = 5;
        }
    }
    return preco;
}

function maiornumero(array){
    let inicio = 0;
    for (let item of array) {
        if (item > inicio) {
            inicio = item;
        }
    }
    return inicio;
}

export { somar, dobro, media, tabuada, corprimaria, ingressocinema, maiornumero }