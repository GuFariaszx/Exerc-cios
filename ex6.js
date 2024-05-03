// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

let year = prompt("Digite seu ano de nascimento:")

let calc1 = 2024 - year

if ( calc1 >= 18 ) {
    console.log ("Você é maior de Idade")
} 
else {
    console.log ("Você não é maior de Idade")
}