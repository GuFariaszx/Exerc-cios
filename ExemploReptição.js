//for -> Loop contado

for(let contador = 10; contador >= 0; contador--) {
    console.log(contador)
}

// //while -> Loop Condicional
let cont = 0;

while (cont <= 5){
    console.log(cont)
    
    cont+=1
}

// do - while -> Loop Condicional

do{
    let valor = prompt("Digite um número: ")
    switch (valor) {
        case "1":
            console.log("Você digitou o valor 1")
            break;

        case "2":
            console.log("Você digitou o valor 2")
            break;

        case "3":
            console.log("Você digitou o valor 3")
            break;
        
        default:
            console.log("VAlor invalido")
            break;
    }
}while(count == "0");

// ForEach(para cada) -> percorrer a lista

let num = [1,2,3,4,5,6,7];

num.forEach(elemento => {
    console.log("O números é: " + elemento)

})

for(let elemento of num) {
    console.log(elemento)
}
