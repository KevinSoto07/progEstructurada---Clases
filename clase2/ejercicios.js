//EJERCICIO 1
let base = 5;
let altura = 10;
let areaTriángulo = (base * altura) / 2;
console.log(`El área del triángulo es: ${areaTriángulo}`);

//EJERCICIO 2
let nota1 = 10;
let nota2 = 6;
let resultado = (nota1 >= nota2) ? "Mayor" : "Menor";
console.log(`La nota 1 es: ${resultado}`);

//EJERCICIO 3
let numero1 = 19;
let numero2 = 8;
let numeroEntre10y20 = (numero1 > 10 && numero1 < 20) || (numero2 > 10 && numero2 < 20);
console.log(`Número entre 10 y 20: ${numeroEntre10y20}`);

//EJERCICIO 4
let valor = 5;
let incremento = (valor *= 5) * 2;
console.log(`El valor aumentó a: ${incremento}`);

//EJERCICIO 5
let valor1 = 12;
let valor2 = "hola";

console.log("¿El Resultado es igual en valor?", valor1 == valor2, "El resultado es igual en tipo", valor1 === valor2);

//EJERCICIO 6
let usuario1 = {
    edad: 18,
    miembro: true,
    administrador: false
}

let usuario2 = {
    edad: 20,
    miembro: true,
    administrador: true
}

let usuario3 = {
    edad: 17,
    miembro: false,
    administrador: false,
}

console.log("El usuario 1 puede acceder? Edad, Membresía o Administrador: ", (usuario1.edad && usuario1.miembro || usuario1.administrador));

console.log("El usuario 2 puede acceder? Edad, Membresía o Administrador: ", (usuario2.edad && usuario2.miembro || usuario2.administrador));

console.log("El usuario 3 puede acceder? Edad, Membresía o Administrador: ", (usuario3.edad && usuario3.miembro || usuario3.administrador));