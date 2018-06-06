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

let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find((empleado) =>{
        return empleado.id === id;
    });

    if(!empleadoDB){
        callback(` No existe el empleado ${id}`);
    }else{
        callback(null,empleadoDB);
    }

    //console.log(empleadoDB);
};

let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find((salario) => salario.id === empleado.id);

    if(!salarioDB){
        callback(`Nose encontro un salario para el empleado ${empleado.nombre}`);
    }else{
        callback(null, {
            nombre : empleado.nombre,
            salario : salarioDB.salario
        });
    }

}

/*getSalario({id:'1', nombre:'Jaime'}, (err, response)=>{
    if(err){
        return console.log(err);
    }

    console.log('Nuevo Objeto -> ', response);
});*/

getEmpleado(3, (err,empleadoDB) =>{

    if(err){
        return console.log(err);
    }

    getSalario(empleadoDB, (err, res) =>{
        if(err){
            return console.log(err);
        }

        console.log(res);
    });

    //console.log('Empleado -> ', empleadoDB);
});