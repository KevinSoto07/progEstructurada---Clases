const estudiante ={
    nombre: "Juan",
    apellido: "Cruz",
    edad: "27 años",
    direccion:{
        pais: "El Salvador",
        calle: "Los Almendros",
        numCasa: 27
    }
}

//Acceso al objeto
console.log(estudiante);
console.log(estudiante.direccion);

console.log(estudiante['direccion']);

//Agregamos nueva propiedad al objeto
estudiante.colorOjos="Azules"
console.log(estudiante);

//Agregando propiedad al objeto anidado
estudiante.direccion.postal=303;
console.log(estudiante['direccion']);

//Modificamos propiedad
estudiante.direccion.numCasa=20;
console.log(estudiante.direccion);


//Eliminando propiedades del objeto anidado
delete estudiante.direccion.numCasa;
console.log(estudiante.direccion);

