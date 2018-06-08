const fs = require('fs');
const colors = require('colors');

let base = 4;

let listarTabla = (base, limite=10) => {
    
    console.log('=================='.red);
    console.log(`Tabla del numero ${base}`.green)
    console.log('========================'.red);

    for(let i=0; i<=limite; i++){
        console.log( `${base} * ${i} = ${base * i}`)
    }
} 

let crearArchivo = (base, limite = 10) => {

    return new Promise( (resolve, reject) => {
        

        if(!Number(base)){
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for(let i=0; i<= limite; i++){
            data += `${base} * ${i} = ${base * i} \n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) =>{
            if(err){
                reject(err)
            }else{
                resolve(`tabla-${base}.txt`)
            }
        })
    })   
}

module.exports = {
    crearArchivo,
    listarTabla
}
