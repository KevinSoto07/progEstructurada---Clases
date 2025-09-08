//Un sistema de gestión de pedidos recibe códigos de seguimiento en el formato: PED-2025-00045, se necesita extraer el año del pedido y el número de orden usando el método substring().
//Requisitos:
//1. Extraer el año del pedido (2025) y el número de orden (00045) usando substring().

import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Realizamos la pregunta

rl.question("Ingrese el código del pedido( ej: PED-2025-00045): ",(codigo)=>{
    const año = codigo.substring(4,8);
    const numOrden = codigo.substring(9)

    console.log(`Año del pedido: ${año}`);
    console.log(`Número de orden: ${numOrden}`);

    rl.close();
})