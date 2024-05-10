// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let n1 = prompt("Digite o primeiro número:")
let n2 = prompt("Digite o segundo número:")
let n3 = prompt("Digite o terceiro número:")

if (n1 < n2 < n3) {
    console.log ("Está em ordem Crescente")
} 
else {
    console.log ("Não está em ordem Crescente")
}