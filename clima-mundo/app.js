//const axios = require('axios');
//console.log(argv.direccion);
const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//console.log(argv.descripcion);

//lugar.getLugarLatLng(argv.descripcion)
//    .then( resp => console.log(resp))
//    .catch( err => console.log(err))

//clima.getTemperatura(-12.0463731, -77.042754)
//    .then( resp => console.log(resp))
//    .catch( err => console.log(err))

let getInfo = async(direccion) =>{

    try{

        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getTemperatura(coors.lag, coors.lng);

        return `El clima actual en ${direccion} es -> ${temp}`;

    }catch(err){
        return `No se pudo determinar el clima en ${direccion}`;
    }

}

getInfo(argv.descripcion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));








