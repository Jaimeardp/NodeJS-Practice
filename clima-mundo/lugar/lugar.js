const axios = require('axios');


const getLugarLatLng = async(direccion) =>{


    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&ckey=AIzaSyDCGI2CJAy5EusHthp4vzZQrliRe7DajWw`)

    if(resp.data.status === 'ZERO_RESULTS'){
            throw new Error(` No se encontro resultado para la ciudad ${direccion}`)
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion:location.formatted_address,
        lag : coors.lat,
        lng : coors.lng

    }
}


module.exports = {
    getLugarLatLng
}

/*.then(response =>{
    //console.log(JSON.stringify(data.data), undefined, 2);

    console.log(geo.lat);
    console.log(geo.lng);
})
.catch( err => console.log(err));*/