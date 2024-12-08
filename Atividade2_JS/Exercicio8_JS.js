let precoOriginal = parseFloat(prompt("Digite o valor original do produto:"));
let codigo = prompt("Digite o código promocional: DESC1, DESC2, DESC3, DESC4 ou DESC5");
let desconto;

switch (codigo) {
    case "DESC1":
        desconto = 0.05;
        console.log("5% de desconto aplicado.");
        break;
    case "DESC2":
        desconto = 0.10;
        console.log("10% de desconto aplicado.");
        break;
    case "DESC3":
        desconto = 0.15;
        console.log("15% de desconto aplicado.");
        break;
    case "DESC4":
        desconto = 0.20;
        console.log("20% de desconto aplicado.");
        break;
    case "DESC5":
        desconto = 0.25;
        console.log("25% de desconto aplicado.");
        break;
    default:
        desconto = 0;
        console.log("Código promocional inválido!");
}

if (desconto > 0) {
    let precoFinal = precoOriginal * (1 - desconto);
    console.log(`Valor original: R$ ${precoOriginal.toFixed(2)}`);
    console.log(`Valor com desconto: R$ ${precoFinal.toFixed(2)}`);
}