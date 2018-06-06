


let getNombre = () =>{


    return new Promise( (resolve, reject) =>{
        
        setTimeout( () => {
            resolve('Jaime');
        }, 3000);
    })


}


let saludo = async() => {

    let nombre = await getNombre(); // Esperando a la promesa

    return `Hola ${nombre}`;


}


saludo()
    .then( msj => console.log(msj))
    .catch( err => console.log(err))