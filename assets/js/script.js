//Obtener los campos del formulario al presionar el botón "Agregar".

const propietario = document.getElementById("propietario");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const nombreMascota = document.getElementById("nombreMascota");
const tipo = document.getElementById("tipo");
const enfermedad = document.getElementById("enfermedad");
const boton = document.getElementById("agregar");
const resultado = document.getElementById("resultado");
let mensajePropietario = "";
let mensajeMascota = "";

boton.addEventListener("click", () => {

    //Segun el tipo de mascota selecciona se llama el nombre del objeto.
    const tipoMascota = tipo.value.toLowerCase();

    // console.log(propietario.value);
    // console.log(direccion.value);
    // console.log(telefono.value);
    // console.log(tipo.value);
    // console.log(nombreMascota.value);
    // console.log(enfermedad.value);

    switch (tipoMascota){
        case 'perro':
            const perro = new Mascota(propietario.value, direccion.value, telefono.value, tipo.value, nombreMascota.value, enfermedad.value);
            mensajePropietario = perro.getDatosPropietarios();
            mensajeMascota = `${perro.getAnimal()}, mientras que el nombre de las mascota es : ${perro.getNombre()} y la enfermedad es: ${perro.getEnfermedad()}`;
            break;
        case 'gato':
            const gato = new Mascota(propietario.value, direccion.value, telefono.value, tipo.value, nombreMascota.value, enfermedad.value);
            mensajePropietario = gato.getDatosPropietarios();
            mensajeMascota = `${gato.getAnimal()}, mientras que el nombre de las mascota es : ${gato.getNombre()} y la enfermedad es: ${gato.getEnfermedad()}`;
            break;
        case 'conejo':
            const conejo = new Mascota(propietario.value, direccion.value, telefono.value, tipo.value, nombreMascota.value, enfermedad.value);
            mensajePropietario = conejo.getDatosPropietarios();
            mensajeMascota = `${conejo.getAnimal()}, mientras que el nombre de las mascota es : ${conejo.getNombre()} y la enfermedad es: ${conejo.getEnfermedad()}`;
            break;
        default:
            const animal = new  Mascota(propietario.value, direccion.value, telefono.value, tipo.value, nombreMascota.value, enfermedad.value);
            mensajePropietario = animal.getDatosPropietarios();
            mensajeMascota = `${animal.getAnimal()}, mientras que el nombre de las mascota es : ${animal.getNombre()} y la enfermedad es: ${animal.getEnfermedad()}`;
            break;
    }

    resultado.innerHTML = mensajePropietario;
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


class Animal extends Propietario{
    constructor(nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }

    getAnimal(){
        const mensaje = `El tipo de animal es un : ${this._tipo}`;

        return mensaje;
    }
}

class Mascota extends Animal{
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad){
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    getNombre(){
        return this._nombreMascota;
    }

    setNombre(valor){
        this._nombreMascota = valor;
    }

    getEnfermedad(){
        return this._enfermedad;
    }

    setEnfermedad(valor){
        this._enfermedad = valor;
    }
}
