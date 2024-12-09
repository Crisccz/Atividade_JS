let numeroSorteado = Math.floor(Math.random() * 11);
let chute;

do {
    chute = parseInt(prompt("Adivinhe um número entre 0 e 10:"));
    if (chute === numeroSorteado) {
        console.log("Parabéns, você acertou!");
    } else {
        console.log("Tente novamente.");
    }
} while (chute !== numeroSorteado);