function contarvocales(str){
    const vocales = 'aeiouAEIOU';
    let contador = 0;

    for (let char of str){
        if(vocales.includes(char)){
            contador++;
        }
    }

    return contador;

}

let texto = "Hola mundo";
let numerodevocales = contarvocales(texto);
console.log(numerodevocales);