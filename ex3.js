function somar(a, b) {
    return a + b;
}

function multiplicar(a, b) {
    return a * b;
}

function calcular(a, b, operacao) {
    return operacao(a, b);
}

console.log(calcular(5, 3, somar));
console.log(calcular(5, 3, multiplicar));