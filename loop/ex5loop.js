// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

b = 1
a = 0
c = 0

for(i = 1; i <= 10; i++) {
   console.log(c)

   c = a + b
   b = a
   a = c

}