// Exercício 7: Cálculo de desconto progressivo

// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

let comp = prompt ("Digite o valor do produto que você deseja comprar:")


if (comp >= 100 && comp <= 200 ) {
    let calculo = comp * 0.10
    let calculo2 = comp - calculo
    console.log("Foi descontado 10% do produto, assim , o valor final foi", calculo2)
}

if (comp > 200) {
    let calculo3 = comp * 0.20
    let calculo4 = comp - calculo3
    console.log("Foi descontado 20% do produto, assim, o valor final foi", calculo4)
}

if (comp < 100) {
    console.log ("Valor final de seu produto foi", comp)
}

