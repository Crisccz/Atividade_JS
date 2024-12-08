let idade = parseInt(prompt("Digite sua idade:"));

switch (true) {
    case (idade >= 0 && idade <= 12):
        console.log("Você é uma criança.");
        break;
    case (idade >= 13 && idade <= 17):
        console.log("Você é um adolescente.");
        break;
    case (idade >= 18 && idade <= 59):
        console.log("Você é um adulto.");
        break;
    case (idade >= 60):
        console.log("Você é um idoso.");
        break;
    default:
        console.log("Idade inválida!");
}