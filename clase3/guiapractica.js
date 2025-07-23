let edad = 17;
let entrada = true;

let puedeEntrar = edad >= 13 && entrada ? "puede acceder al cine" : "no puede acceder al cine";
console.log(puedeEntrar);

////////////////////////////////////////////////////////////

let edadCliente = 68;
let presentaDiscapacidad = true;

let tieneDescuento = edad >= 60 || presentaDiscapacidad ? "Tiene acceso al descuento" : "No tiene acceso al descuento";
console.log(tieneDescuento);

////////////////////////////////////////////////////////////

let nota = 8;
let apruebaRecuperacion = false;

let estudianteAprueba = nota >= 7 || apruebaRecuperacion ? "El estudiante aprobó" : "El estudiante no aprobó";
console.log(estudianteAprueba);
