let operacao = prompt("Escolha uma operação: +, -, *, /");
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

switch (operacao) {
    case "+":
        console.log(`Resultado: ${num1 + num2}`);
        break;
    case "-":
        console.log(`Resultado: ${num1 - num2}`);
        break;
    case "*":
        console.log(`Resultado: ${num1 * num2}`);
        break;
    case "/":
        if (num2 !== 0) {
            console.log(`Resultado: ${num1 / num2}`);
        } else {
            console.log("Erro: Divisão por zero.");
        }
        break;
    default:
        console.log("Operação inválida!");
}