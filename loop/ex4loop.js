// FOR
// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.



let tab = parseInt(prompt("Informe um número de 1 a 10"))

if (tab >= 1 && tab <= 10) {
    console.log("Tabuada do " + tab + ":\n")
    for (i = 1; i <= 10; i++) {
        r = tab * i
        console.log(tab + "x" + i + " = " + r)

    }
}

else {
    alert("é necessário informar um número entre 1 a 10!")
}