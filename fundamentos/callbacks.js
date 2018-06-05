
setTimeout(function(){
    console.log('Hello Wordl!');
}, 5000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre : 'Jaime',
        id // Se puede obviar si exactamente es lo mismo de el parametro
    }

    if(id === 20){
        callback(`El usuario del id ${id} no existe en la DB`);
    }else{
        callback(null, usuario);
    }
}


getUsuarioById(2, (err, usuario) =>{
    if(err){
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario )
});
