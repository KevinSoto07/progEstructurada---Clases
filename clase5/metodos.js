// Importar el módulo

import readline from 'readline';

// Crear la interfaz de lectura

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Realizamos la pregunta

rl.question("Ingrese una frase: ", (frase)=>{
    //Convertimos la frase a mayúsculas
    console.log('\n === Tratamiento de cadenas ===');

    //1.lenght 
    const fraseLenght = frase.length;
    console.log(`\n La longitud de la frase es ${fraseLenght}`);

    //2.toUpperCase
    const fraseMayus = frase.toUpperCase();
    console.log(`La frase en mayúsculas es: ${fraseMayus}`);
    
    //3.toLowerCase
    const fraseMinus = frase.toLowerCase();
    console.log(`La frase en minúsculas es: ${fraseMinus}`);

    //4. trim
    const fraseTrim = frase.trim();
    console.log(`La frase sin espacios al inicio y al final es: ${fraseTrim}`);

    //5. substring
    const subCadena = frase.substring(0,5);
    console.log(`Los primeros 10 carácteres de la frase son: ${subCadena}`);
    
    //6. slice
    const subCadenaSlice = frase.slice(5);
    console.log(`Los primeros 5 caracteres de la frase son: ${subCadenaSlice}`);

    const subCadenaSlice2 = frase.slice(-5);
    console.log(`Los últimos 5 caracteres de la frase son: ${subCadenaSlice2}`);
    
    //8. replace
    const fraseReemplazada = frase.replace('hola', 'adios');
    console.log(`La frase con 'hola' reemplazado por 'adios' es: ${fraseReemplazada}`);
    
    //9. replaceAll
    const fraseReemplazadaAll = frase.replaceAll('hola', 'adios');
    console.log(`La frase con 'hola' reemplazado por 'adios' es: ${fraseReemplazadaAll}`);

    //10. split (Divide la frase en palabras separandolas por un espacio)
    const fraseArray = frase.split('');
    console.log(`La frase dividida en palabras es : ${fraseArray}`);

    //11. includes
    const incluyeHola = frase.includes('hola');
    console.log(`La frase incluye la palabra: ${incluyeHola}`);

    //12. indexOf 
    const indiceHola = frase.indexOf('hola');
    console.log(`El indice de la primera ocurrencia de 'hola' es: ${indiceHola}`);

    //13. startsWith
    const empiezaConHola = frase.startsWith('hola');
    console.log(`La frase empieza con 'hola': ${empiezaConHola}`);

    //14. endsWith
    const terminaConAdios = frase.endsWith('adios');
    console.log(`La frase termina con 'adios': ${terminaConAdios}`);
    rl.close()  
})