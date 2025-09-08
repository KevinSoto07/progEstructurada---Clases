//Generar número aleatorio
const numeroAleatorio = Math.floor(Math.random() *10)+1;
console.log("número aleatorio entre 1 y 10: ", numeroAleatorio);

//Redondear números
const numero = 5.67;
console.log("Número original: ", numero);
console.log("Redondeado normal: ", Math.round(numero));
console.log("Redondeado hacia abajo: ", Math.floor(numero));
console.log("Redondeado hacia arriba: ", Math.ceil(numero));

//Calcular la hipotenusa
const a = 3;
const b = 4;
const hipotenusa = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
console.log(`La hipotenusa es: ${hipotenusa}`);

//Devuelve el Valor absoluto
const num = -15;
console.log(`El valor absoluto de ${num} es: ${Math.abs(num)}`);

//Mayor y menor de un conjunto
const numeros = [3, 10, 7, 25, 1];
console.log("Mayor: ", Math.max(...numeros));
console.log("Menor: ", Math.min(...numeros));

//Simular un dado
const dado = Math.floor(Math.random() * 6) + 1;
console.log(`El dado cayó en : ${dado}`);
