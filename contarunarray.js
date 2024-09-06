function contarNumero(array, numero) {
    let contador = 0;
    let i = 0;
    
    while (i < array.length) {
        if (array[i] === numero) {
            contador++;
        }
        i++;
    }
    
    return contador;
}

const miArray = [1, 2, 3, 4, 2, 2, 5, 2];
const numeroABuscar = 2;
const resultado = contarNumero(miArray, numeroABuscar);

console.log(`El número ${numeroABuscar} aparece ${resultado} veces en el array.`);
