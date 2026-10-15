function mostrarBoasVindas() {
    console.log("Bem-vindo(a)!");
}

function mostrarDespedida() {
    console.log("Até logo!");
}

function executarMensagem(acao) {
    acao();
}

executarMensagem(mostrarBoasVindas);