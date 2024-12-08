// Calcular a média e verificar aprovação
let n1 = parseFloat(prompt("Digite a nota da primeira prova (N1):"));
let n2 = parseFloat(prompt("Digite a nota da segunda prova (N2):"));
let media = (n1 + n2) / 2;

// Operador ternário para verificar aprovação
let resultado = media >= 6 ? "Aprovado" : "Reprovado";
console.log(`Sua média foi ${media}. Você está ${resultado}.`);