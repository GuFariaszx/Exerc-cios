// Nome
// let nome = "Gustavo"


// Apelido
// let apelido = "Gu"

let pessoa1 = {
    nome: "Gustavo",
    apelido: "Gu"
}

let pessoa2 = {
    nome: "Vitória",
    apelido: "Vic"
}

let produto = {
    nomeProduto: "Tênis",
    marca: "Nike",
    descricao: "O melhor para esporte",
    preco: "399.99"    
}

console.log(produto.preco + " " + produto.descricao)

console.log("Olá Gustavo, Utilize este Tênis, para ter melhor conforto em sua atividade física")

console.log(`Olá ${pessoa1.nome}, ${produto.descricao}, utilizando o ${produto.marca}`)

let produtoCadastrado = {
    nome: "",
    valor: "",
    marca: ""
}

produtoCadastrado.nome = prompt("Digite o nome do produto: ")
produtoCadastrado.valor = parseFloat(prompt("Digite o valor do produto: "))
produtoCadastrado.marca = prompt("Digite a marca do produto: ")

console.log(produtoCadastrado)


