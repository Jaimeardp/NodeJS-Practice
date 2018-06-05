let testing = 'Probando';

let heroe = {
    nombre : 'Maximo',
    apellido : 'Robles',
    poder : 'Paciencia',
    getNombre: () => { // this apunta en un objeto vacio
        console.log(global === this);
        return `${this.console} ${this.apellido} - poder: ${this.poder}`;
    }
}

console.log(heroe.getNombre());