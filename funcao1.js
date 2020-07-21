// Função sem retorno
function imprimirsoma(a, b){
    console.log(a+b)
}

imprimirsoma(2, 3)
imprimirsoma(2, 3, 4, 5, 6, 7, 8)

// Função com retorno
function soma(a, b=0){
    return a+b
}

soma(2, 3)
console.log(soma(2, 3))