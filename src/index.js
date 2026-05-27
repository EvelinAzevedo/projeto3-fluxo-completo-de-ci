const { soma, subtracao } = require('./calculadora')

const resultadoSoma = soma(2, 4)

const resultadoSubtracao = subtracao(4, 2)

console.log(`
    soma de 2 + 4 = ${resultadoSoma}
    subtração de 4 - 2 = ${resultadoSubtracao}
    `)