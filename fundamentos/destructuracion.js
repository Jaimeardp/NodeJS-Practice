let heroe = {
    nombre : 'Maximo',
    apellido : 'Robles',
    poder : 'Paciencia',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

console.log(heroe.getNombre());


//let nombre = heroe.nombre;
//let apellido = heroe.apellido;
//let poder= heroe.poder;

// Destructuracion

let {nombre: anyNombre , apellido, poder} = heroe;

console.log( `Heroe : ${anyNombre} ${apellido} - poder: ${poder}`)



//ES6
/*
getNombre (){
    return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
}*/