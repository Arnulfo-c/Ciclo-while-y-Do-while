function generarFibonacci(hasta) {
    let fibonacci = [0, 1];
    let i = 2;
    
    while (true) {
        let siguiente = fibonacci[i - 1] + fibonacci[i - 2];
        if (siguiente > hasta) break;
        fibonacci.push(siguiente);
        i++;
    }
    
    return fibonacci;
}

const resultado = generarFibonacci(20);

console.log(`Los números de la secuencia de Fibonacci menores o iguales a 20 son: ${resultado.join(', ')}`);
