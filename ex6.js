function processarNumero(numero, callback) {
    callback(numero);
}

processarNumero(5, (resultado) => {
    console.log(resultado * 3);
});