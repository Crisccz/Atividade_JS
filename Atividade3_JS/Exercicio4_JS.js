let fibonacci = [0, 1];
let index = 2;

while (fibonacci.length < 10) {
    fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
    index++;
}

console.log("Sequência de Fibonacci (10 números):", fibonacci);