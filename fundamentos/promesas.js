let empleados = 
[
    {
        id:1,
        nombre:'Jaime'
    },
    {
        id:2,
        nombre:'Anthony'
    },
    {
        id:3,
        nombre:'Juan'
    }
]

let salarios = 
[
    {
        id:1,
        salario:2500
    },
    {
        id:2,
        salario:3000
    }
]

let getEmpleado = id => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find((item) => item.id === id );

        if(!empleadoDB){
            reject( `No existe el empleado con el id : ${id}`);
        }else{
            resolve(empleadoDB);
        }

    });
}

let getSalario = empleado => {

    return new Promise( (resolve, reject) => {

        let salarioDB = salarios.find( item => empleado.id === item.id );

        if(!salarioDB){
            reject(`No existe salario para el empleado : ${empleado.nombre}`)
        }else{
            resolve({
                nombre : empleado.nombre,
                salario : salarioDB.salario
            })
        }
    });
}

/*getEmpleado(3)
    .then((empleado) =>{
        //console.log('Empleado de BD -> ', empleado);
        getSalario(empleado)
            .then(
                response => console.log(response),
                err => console.log('Erro!') ) // Se manejo el error, entonces no ingresa al catch
            .catch(err => console.log(err));
    })
    .catch(err => {
        console.log(err);
    });*/

//getEmpleado(3)
//    .then(res => console.log(res))
//    .catch(err => console.log(err))

getEmpleado(10)
    .then(empleado => getSalario(empleado))
    .then(response => console.log(response))
    .catch(err => console.log(err))