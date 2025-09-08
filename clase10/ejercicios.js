//Ejercicio1

const producto ={
    detalles:{
    nombre: "calculadora",
    precio: "$8.99",
    categoria: "escolares",
    },
    inventario:{
        stock: "20 unidades",
        proveedor: "industrias juanito",
        ubicacion: "El Salvador",
    },
        historial:{
            fechaIngreso: "20/08/25",
            ultimaVenta: "29/08/25",
            ventasTotales: "33 ventas"
    }
}

console.log(producto.detalles);

producto.inventario.stock="50 unidades"
console.log(producto.inventario);


//Ejercicio 2

const perfil ={
    infoPersonal:{
        nombre: "Gustavito",
        edad: "19 años",
        email: "gustavito@gmail.com",
    },
    preferencias:{
        idioma: "Español",
        notificaciones: "Activadas",
        tema: "Oscuro"
    },
    estadisticasUso:{
        fechaRegistro: "29/07/25",
        ultimoAcceso: "28/08/25",
        numeroSesiones: "22 sesiones"
    }
}

console.log(perfil.infoPersonal);
console.log(perfil.preferencias);
console.log(perfil.estadisticasUso);

perfil.preferencias.idioma="Inglés"
console.log(perfil.preferencias.idioma);

perfil.estadisticasUso.ultimoAcceso="01/09/25"
console.log(perfil.ultimoAcceso);

delete perfil.preferencias.notificaciones;

const { email,idioma } = perfil
console.log(perfil);


//Ejercicio 3

const libro ={
    informacion:{
        titulo: "El mono",
        autor: "pepe gustavo",
        género: "misterio"
    },
    disponibilidad:{
        copias: "50 copias",
        prestados: "23 libros",
        ubicacion: "estantería 3"
    },
    registro:{
        fechaPublicacion: "07/05/25",
        fechaIngreso: "10/07/25",
        ultimaRevision: "28/08/25"
    }
}

console.log(libro.informacion);

libro.registro.ultimaRevision="01/09/25";
libro.informacion.género="suspenso";
const {titulo,ubicacion} = libro
console.log(libro);





