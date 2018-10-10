const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar', options)
    .command('creaTabla', 'Crea archivo de la tabla de multiplicar', options)
    .help()
    .argv;


module.exports = {
    argv
}