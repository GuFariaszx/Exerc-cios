// Fazer um menu de exercícios utilizando o exemplo dado em aula
// Criar um menu, onde é possível executar 6 dos exercícios anteriores.
// Cada exercício deve ser encapsulado em uma função, e o menu deve executar essas funções.
// O usuário poderá escolher qual exercício ele quer visualizar.

// o usuário deverá digitar 0 para sair do menu.

function exemploRepeticao() {
    let opcao = prompt("Digite uma opção\nDigite 0 para sair")

    while(opcao != "0"){
        console.log("Repetiuuuu")

        opcao = prompt("R:Digite uma opcao\nDigite 0 para sair")
    }
    console.log("Saiuuuuu")
}

function regressiva(){
    let reg = prompt("Informe um número: ")

while (reg >= 0) {
    console.log(reg)
    reg--   
}
}

function pares() {
    for (let i = 2; i <= 100; i += 2) {
        console.log(i)
    }
}

function fibonacci() {
    let fib1 = 0
    let fib2 = 1

console.log("Os Primeiros 10 número da sequência de Fubonacci são: ")
console.log (fib1)
console.log(fib2)

for(let n = 2; n < 20; n++) {
   let nextFib = fib1 + fib2

   console.log(nextFib)

   fib1 = fib2
   fib2 = nextFib
}
}

function tab() {
    let tab = parseInt(prompt("Informe um número de 1 a 10"))

if (tab >= 1 && tab <= 10) {
    console.log("Tabuada do " + tab + ":\n")
    for (i = 1; i <= 10; i++) {
        r = tab * i
        console.log(tab + "x" + i + " = " + r)

    }
}

else {
    alert("é necessário informar um número de 1 a 10!")
}
}

function idade() {
    let year = prompt("Digite seu ano de nascimento:")

let calc1 = 2024 - year

if ( calc1 >= 18 ) {
    console.log ("Você é maior de Idade")
} 
else {
    console.log ("Você não é maior de Idade")
}
}

let opcao = prompt("Escolha uma opção: \n1 - Exemplo Contagem Regressiva;\n2 - Exemplo Repetição;\n3 - Exemplo contagem apenas com números pares de 1 a 100;\n4 - Exemplo de Contagem com números de Fibonacci;\n5- Exemplo de tabuada;\n6 - Exemplo de Detectar sua idade e Detectar se é maior de idade;")

switch (opcao) {
    case "1":
        regressiva()
       break

    case "2":
        exemploRepeticao()
        break

    case "3":
        pares()
        break

    case "4":
        fibonacci()
        break

    case "5":
        tab()
        break

    case "6":
        idade()
        break
        
    default: 
        break   
}   