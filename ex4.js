function verificarNota(nota, callback) {
    callback(nota);
}

function resultado(nota) {
    if (nota >= 7) {
        console.log("Aprovado!");
    } else {
        console.log("Reprovado!");
    }
}

verificarNota(8, resultado);
verificarNota(5, resultado);