//Obtener los campos del formulario al presionar el botón "Agregar".



const propietario = document.getElementById("propietario");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const nombreMascota = document.getElementById("nombreMascota");
const tipo = document.getElementById("tipo");
const enfermedad = document.getElementById("enfermedad");
const boton = document.getElementById("agregar");


boton.addEventListener("click", () => {
    console.log(propietario.value);
    console.log(telefono.value);
    console.log(direccion.value);
    console.log(nombreMascota.value);
    console.log(tipo.value);
    console.log(enfermedad.value);
});

