const { createFile, listar } = require('./multiplicacion/multiplicacion');
const argv = require('./multiplicacion/yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite);
        break;
    case 'creaTabla':
        createFile(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        break;
}