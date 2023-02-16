// //Pratica Guiada 1

// const estudante = {
//     nome: 'Mario',
//     sobrenome: 'Carneiro',
//     numeroDeMatricula: 123456,
//     notasDoSemestre: [7.5, 8, 8.5, 9, 9.5, 10],
// }

// //Pratica Guiada 2
// estudante.modulo = 3

// const nomeDoEstudante = estudante.nome
// const segundaNotaDoSemestre = estudante.notasDoSemestre[1]

// // console.log(estudante.nome)
// // console.log(segundaNotaDoSemestre)
// // console.log(`Modulo que a pessoa esta: ${estudante.modulo}`)

// //Pratica Guiada 3

// const novoNomeDeEstudante = {
//     ...estudante
// }

// novoNomeDeEstudante.nome = 'Astrodev'
// novoNomeDeEstudante.notasDoSemestre.push(9)
// novoNomeDeEstudante.modulo = 4

// // console.log(novoNomeDeEstudante)

// const estudanteLabenu = [estudante, novoNomeDeEstudante]

// console.log(estudanteLabenu)

// //Exercicio de Fixação

const carrinho = {
    nome: `Marlon`,
    formaDePagamento: `Dinheiro`,
    endereco: `Rua dos Indecisos s/n`
}

carrinho.compras = {
    nomeDoProduto: `Melancia`,
    precoDoProduto: 20,
    quantidadeDoProduto: 12
}

// console.log(carrinho)

//console.log(carrinho.compras.quantidadeDoProduto)

const carrinhoPresente = {
    ...carrinho
}

carrinhoPresente.nome = `Felipe`
carrinhoPresente.formaDePagamento = `Cartao Presente`

console.log(carrinho)
console.log(carrinhoPresente)