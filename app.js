const argv = require('./config/yars').argv;
const colors = require('colors')
const { crearArchivo, listarTabla } = require('../03-bases-node/multiplicador/multiplicador')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar')
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(lista))
            .catch(e => console.log(e))
        break;

    case 'crear':
        console.log('crear')
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:  ` + `${archivo} `.green))
            .catch(e => console.log(e))
        break;

    default:
        console.log('Comando no reconocido')
}

// console.log(argv.base)
// console.log('Limite', argv.limite)