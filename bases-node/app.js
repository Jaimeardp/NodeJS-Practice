const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv
const colors = require('colors/safe');

//let base = '4'


//console.log(module);
//console.log(process.argv);

let argv2 = process.argv;
//******************* 
//console.log(argv2);
console.log(argv);
console.log('Base ', argv.base);
console.log('Limite ', argv.limite);
//******************* 

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( response => console.log(`Se genero el archivo :`, colors.green(response)))
            .catch( err => console.log(err))
        break;
    default:
        console.log('Comando no proporcionado');
}


//let param = argv[2];
//let base = param.split('=')[1];

//console.log(base);

/*crearArchivo(base)
    .then( response => console.log(`Se genero el archivo : ${response}`))
    .catch( err => console.log(err))*/