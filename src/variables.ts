

// En este caso crearemos 2 variables con let, y las uniremos 
//en una utilizando const.


// La diferencia entre let y const, es que const es una variable que no cambiara en un futuro,
// En cambio let si puede cambiar en un futuros.

let nombre= "Julio Andrés";
let apellido= "Bravo Lozano";

const alumno: { nombre: string, apellido: string} = {
    nombre: nombre,
    apellido: apellido
};

// Por ultimos mostraremos por consola la variable.

console.log(alumno)

