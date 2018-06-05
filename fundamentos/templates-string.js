let nombre = 'Jaime';
let apellido = 'Robles Del Pino'

// Concatenacion normal
console.log(nombre +  ' ' +apellido);
// Templates- String con literales
console.log(`${nombre} ${apellido}`);

let nomCompleto = nombre + ' ' + apellido;
let nomTemplate = `${nombre} ${apellido}`;

console.log(nomCompleto === nomTemplate);


// Utilizandolo con funciones

function getNombre(){
    return `${nombre} ${apellido}`;
}

console.log( `El nombre de : ${getNombre()}` )
