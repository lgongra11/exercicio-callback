function repetirAcao(vezes, callback) {
    callback(vezes);
}

repetirAcao(3, (vezes) => {
    for (let i = 0; i <= vezes; i++) {
        console.log("Exxecução número: " + i);
    }
});