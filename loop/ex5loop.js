// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

let fib1 = 0
let fib2 = 1

console.log("Os Primeiros 10 número da sequência de Fibonacci são: ")
console.log (fib1)
console.log(fib2)

for(let n = 2; n < 10; n++) {
   let nextFib = fib1 + fib2

   console.log(nextFib)

   fib1 = fib2
   fib2 = nextFib
}