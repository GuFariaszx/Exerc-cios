// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let no1 = parseFloat(prompt ("Digite a primeira nota de Jorge de 1 à 10:"))
let no2 = parseFloat(prompt ("Digite a segunda nota de Jorge de 1 à 10:"))
let no3 = parseFloat(prompt ("Digite a terceira nota de Jorge de 1 à 10:"))
let no4 = parseFloat(prompt ("Digite a quarta nota de Jorge de 1 à 10:"))

let calc = (no1 + no2 + no3 + no4) / 4 

if (calc < 5 ) {
    console.log ("Reprovado")
} else if (calc >= 7) {
    console.log ("Aprovado")
} else {
        console.log ("Recuperação")
}