// Armazenando uma função em uma variável

const ImprimirSoma = function (a, b) {
    console.log(a + b)
}

ImprimirSoma(2, 3)
 
// Armazenando uma função Arrow em uma variável

const Soma = (a, b) => {
    return (a + b)
}

console.log(Soma(2, 3))

// Retorno implicito

const Subtracao = (a, b) => a - b
console.log(Subtracao(2, 3))