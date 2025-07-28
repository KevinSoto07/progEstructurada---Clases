//Ejercicio 1
import readline from 'readline'

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question("¿De dónde sos? ",(ciudad) => {
    console.log(`Eres de ${ciudad}`);

    rl.question("¿Cuál es tu color favorito? ",(color) => {
        console.log(`Tu color favorito es ${color}`);

    rl.question("Escribe una palabra: ", (palabra1) => {
        rl.question("Escribe otra palabra: ", (palabra2) => {
            console.log(`Tus palabras son ${palabra1} y ${palabra2}`);
            rl.close();
            });
        });
    });
});
