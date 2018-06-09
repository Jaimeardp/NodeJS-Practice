const fs = require('fs');

let listadoPorHacer = []

const saveDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json',data, (err) => {
        if(err){
            throw new Error('Error escribiendo archivo');
        }else{
            console.log('Saved Success!');
        }
    });
}

const loadDB = () => {
    try{

        listadoPorHacer = require('../db/data.json');

    }catch(error){
        listadoPorHacer = []; // En caso el .json este vacion
    }
    
}

const crear = (descripcion) => {

    loadDB();

    let porHacer = {
        // descripcion : descripcion -> En es6 es redundante
        descripcion,
        completado : false
    };

    listadoPorHacer.push(porHacer);

    saveDB();

    return porHacer;
}

const getListado = () => {
    loadDB()
    return listadoPorHacer;
}

const actualizar = (descripcion, completado) => {
    
    loadDB();

    let index = listadoPorHacer.findIndex( item => item.descripcion === descripcion)

    if(index>= 0){
        listadoPorHacer[index].completado = completado;
        saveDB();
        console.log('Update Success!')
        return true;
    }else{
        console.log('Update failde');
        return false;
    }

}

const borrar = (descripcion) => {

    loadDB();

    let nuevoListado = listadoPorHacer.filter( item => item.descripcion != descripcion)

    if(nuevoListado.length == listadoPorHacer.length){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        saveDB();
        return  true;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}