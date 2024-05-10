document.body.innerHTML = "<h1>Teste H1</h1>"

document.body.innerHTML += "<p>Outro Teste</p>"

let paragrafo = document.getElementById("texto")

paragrafo.style.color = "blue"

let opcao = prompt("Escolha a cor do paragrafo: \n1 - verde\n2 - vermelho")

if(opcao == "1") {
    paragrafo.style.cor = "darkgreen"
} else if(opcao == "2") {
    paragrafo.style.cor = "red"
} else {
    window.alert("opcao incorreta")
}