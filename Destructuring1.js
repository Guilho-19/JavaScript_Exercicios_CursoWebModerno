const pessoa = {
    nome: "Thalita",
    idade: 17,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000,
    }
}

const { nome, idade } = pessoa
console.log( nome, idade )

const { nome: cabo_de, idade: aço } = pessoa
console.log( cabo_de, aço )

const { bem_humorado, sorriso = true } = pessoa
console.log( bem_humorado, sorriso)

const { endereco: { logradouro, numero, cep = true } } = pessoa
console.log( logradouro, numero, cep )