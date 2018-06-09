const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors')
let comando = argv._[0];

switch(comando){

    case 'crear':
        console.log('Crear por hacer -> ', argv.descripcion);
        console.log(toDo.crear(argv.descripcion));
        break;
    case 'listar':
        let tareas = toDo.getListado();
        for(let tarea of tareas){
            console.log('============================'.green)
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log('============================'.green)
        }
        break;
    case 'actualizar':

        var status = toDo.actualizar(argv.descripcion, argv.completado);
        console.log(`Se completo la actualizacion ? : ${status}`);
        //console.log('Actualizar tarea', argv.completado);
        break;
    case 'borrar':
        console.log('Borrar una tarea');
        var status = toDo.borrar(argv.descripcion);
        console.log(`Se borro con exito la tarea (${argv.descripcion}) ? : ${status}`);
        break;
    default:
        console.log('No se proporcion actividad');
        

}