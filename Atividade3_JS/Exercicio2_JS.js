let idade;

do {
    idade = parseInt(prompt("Digite sua idade (deve ser maior que 0):"));
} while (idade <= 0 || isNaN(idade));

console.log(`Idade válida inserida: ${idade}`);