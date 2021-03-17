//Obtener los campos del formulario al presionar el botón "Agregar".

const propietario = document.getElementById("propietario");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const nombreMascota = document.getElementById("nombreMascota");
const tipo = document.getElementById("tipo");
const enfermedad = document.getElementById("enfermedad");
const boton = document.getElementById("agregar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {

    //Segun el tipo de mascota selecciona se llama el nombre del objeto.
    const tipoMascota = tipo.value.toLowerCase();

    switch (tipoMascota){
        case 'perro':
            const perro = new Animal('perro');
            break;
        case 'gato':
            const gato = new Animal('gato');
            break;
        case 'conejo':
            const conejo = new Animal('conejo');
            break;
        default:
            const animal = new  Animal('gato');
            break;
    }


    const ojbPropietario = new Propietario('rodrigo','tarapaca','12346');    
    const objAnimal = new Animal('gato');
    const objMascota = new Mascota('bigotes');

    const mensajeMascota = `El Tipo de animal es un : ${objAnimal.getAnimal()}, mientras que el nombre de las mascota es : ${objMascota.getNombre()} y la enfermedad es: ${objMascota.getEnfermedad()}`;

    resultado.innerHTML = ojbPropietario.getDatosPropietarios();

    resultado.innerHTML += '<br>' + mensajeMascota;

});

//clases.
class Propietario{
    constructor(nombre, direccion, telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    getDatosPropietarios(){
        return `El nombre del dueño es: ${this._nombre}. El domicilio es : ${this._direccion} ,y el número telefónico de contacto: ${this._telefono}`; 
    }
}


class Animal{
    constructor(tipo){
        this._tipo = tipo;
    }

    getAnimal(){
        const mensaje = `El tipo de animal es un : ${this._tipo}`;

        return mensaje;
    }
}

class Mascota{
    constructor(nombre, enfermedad){
        this._nombre = nombre;
        this._enfermedad = enfermedad;
    }

    getNombre(){
        return this._nombre;
    }

    getEnfermedad(){
        return this._enfermedad;
    }
}
