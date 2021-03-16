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

//clases.

class Propietario{
    constructor(nombre, direccion, telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
}


class Animal{
    constructor(tipo){
        this._tipo = tipo;
    }
}

class Mascota{
    constructor(nombre, enfermedad){
        this._nombre = nombre;
        this._enfermedad = enfermedad;
    }
}


 const ojbPropietario = new Propietario('rodrigo','tarapaca','12346');
 const objAnimal = new Animal('gato');
 const objMascota = new Mascota('bigotes');

 console.log(ojbPropietario);
 console.log(objAnimal);
 console.log(objMascota);