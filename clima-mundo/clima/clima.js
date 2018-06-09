const axios = require('axios');

const getTemperatura = async(lag, lng) => {
    
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lag}&lon=${lng}&units=metric&appid=e76e8af125b2cc04dafa7cc4a1c31436`)

    if(resp.data.status  == 400){
        throw new Error(' Coordenadas invalidas!');
    }

    let temp = resp.data.main.temp

    return temp;
}


module.exports = {
    getTemperatura
}