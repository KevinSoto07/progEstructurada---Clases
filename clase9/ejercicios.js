//Ejercicio 1
const raza = "Husky";
const tamaño = 1.10
const color = "Gris"

const animal = {
    raza: "Husky",
    tamaño: 1.10,
    color: "Gris"
}

console.log(animal);
console.log(animal.raza);
console.log(animal.tamaño);
console.log(animal.color);

//Ejercicio 2
animal.nombre = "dogchau";
delete animal.raza;
console.log(animal);

//Ejercicio 3
const usuario ={
    nombre: "juanito23",
    correo: "juanito23@gmail.com",
    rol: "presidente"
}

const { nombre,correo,rol } = usuario;
console.log(nombre);
console.log(correo);
console.log(rol);







