function sumar(a,b){
    return a + b;
}

// Function arrow
// Tipo 1
let restar = (a,b) => {
    return a - b;
}
// Tipo 2
// Normalmente cuando hay solo una linea
let prod = (a,b) => a * b; 
//Tipo 3
// Parametro vacio
let hello = () => 'Hello Wordl!';
// Tipo 4
let welcome = nombre => `Hola ${nombre}`;

//Welcome
console.log(welcome('Jaime'));
// Sumar - normal function
console.log(sumar(10,29));
// Restar - arrow functionp
console.log(restar(10,5));
// Multiplicar 
console.log(prod(2,9));
// Saludar
console.log(hello());

let heroe = {
    nombre : 'Maximo',
    apellido : 'Robles',
    poder : 'Paciencia',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

console.log('***************************************');

console.log(heroe.getNombre());