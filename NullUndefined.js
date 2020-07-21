let valor //Não inicializada
console.log(valor)

valor = null //Ausencia de valor...
console.log(valor)
// console.log(valor.toString()) não pode ser acessado pois é null

const produto = {}
console.log(produto.preco)
console.log(produto)
 
produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Deixe para linguagem setar o Undefined
console.log(!!(produto.preco))
console.log(produto.preco)

delete produto.preco
console.log(produto.preco)

produto.preco = null // Sem preço
console.log(!!(produto.preco))
console.log(produto)