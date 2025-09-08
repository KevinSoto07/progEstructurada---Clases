const nombre = "Eli";
const edad = 30;
const altura = 1.50;

//Creación de objetos con object literal
const persona = {
    nombre: "Eli",
    edad: 30,
    altura: 1.50
}

//Imprimir el objeto
console.log(persona);

//Accede a las propiedades del objeto
//Accede por punto
console.log(persona.nombre);
//Acceder a las propiedades por corchete
console.log(persona['edad']);

//Agregamos más propiedades al objeto
persona.imagen = "imagen.jpg";

console.log(persona);

//Eliminando propiedades del objeto
delete persona.altura;
console.log(persona);

//Modificamos el valor de una propiedad o llave
persona.nombre = "Elizabeth";
console.log(persona);

//Asignando el valor de la propiedad del objeto a una variable
const nom = persona.nombre
console.log(nom);

//Destructuring
const {nombrep} = persona;
console.log(nombrep);

const {pepito} = persona;
console.log(pepito);

const {nombren,edadd} = persona;
console.log(nombren);
console.log(edadd);

