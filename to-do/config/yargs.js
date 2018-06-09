const descripcion = {
    demand: true,
    alias : 'd',
    desc : 'Descripcion de la tarea por hacer'
};

const completado = {
    alias : 'c',
    default : true,
    desc : 'Marca como completado o pendiente la tarea'
};


const optsc = {
    descripcion
}

const optsa = {
    descripcion,
    completado
}

const optsb = {
    descripcion
}

const argv = require('yargs')
                .command('crear','Crear un elemento por hacer',optsc)
                .command('actualizar','Actualizar el estado completado por una tarea',optsa)
                //.command('listar', '', opts)
                .command('borrar', 'Borrar una tarea', optsb)
                .help()
                .argv;


module.exports = {
    argv
}

