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

let getEmpleado = async id => {

    //return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find((item) => item.id === id );

        if(!empleadoDB){
            //reject( `No existe el empleado con el id : ${id}`);
            throw new Error(`No existe el empleado con el id : ${id}`);
        }else{
            //resolve(empleadoDB);
            return empleadoDB;
        }

    //});
}

let getSalario = async empleado => {

    //return new Promise( (resolve, reject) => {

        let salarioDB = salarios.find( item => empleado.id === item.id );

        if(!salarioDB){
            //reject(`No existe salario para el empleado : ${empleado.nombre}`)
            throw new Error(`No existe salario para el empleado : ${empleado.nombre}`);
        }else{
            //resolve({
            //    nombre : empleado.nombre,
            //    salario : salarioDB.salario
            //})
            return {nombre : empleado.nombre, salario: salarioDB.salario};
        }
    //});
}


let getInformacion = async id =>{
    
    let empleado = await getEmpleado(id);
    let response = await getSalario(empleado);

    return ` ${response.nombre} - $/ ${response.salario}`

}


/*getEmpleado(10)
    .then(empleado => getSalario(empleado))
    .then(response => console.log(response))
    .catch(err => console.log(err))*/

getInformacion(1)
    .then( mensaje => console.log(mensaje))
    .catch( err => console.log(err));