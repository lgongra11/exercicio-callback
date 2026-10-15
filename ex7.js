const produtos = [
    { nome: "chocolate", preco: 10 },
    { nome: "biscoito", preco: 20 },
    { nome: "doce", preco: 25 },
    { nome: "salgadinho", preco: 15 },
    { nome: "refrigerante", preco: 9 },
];

function exibirProduto(produto) {
    console.log(`Produto: ${produto.nome}, Preço: R$${produto.preco}`);
}

produtos.forEach(exibirProduto);