//Importamos el módulo readline
//const readline = require('readline')
import readline from 'readline'

//Creamos un interfaz
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

//Realizar pregunta al usuario
rl.question("¿Cómo te llamas? ",(nombre) => {
    console.log(`Hola, buen día ${nombre}`);
    rl.close();
})