for (let numero = 2; numero <= 20; numero++) {
    let ehPrimo = true;

    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            ehPrimo = false;
            break; 
        }
    }

    if (ehPrimo) {
        console.log(numero);
    }
}