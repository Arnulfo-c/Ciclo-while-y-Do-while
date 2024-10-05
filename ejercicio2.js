function encontrarmayor(arr){
    return Math.max(...arr);
}

let numeros = [3, 5, 7, 2, 8, 10];
let mayor = encontrarmayor(numeros);
console.log(mayor);