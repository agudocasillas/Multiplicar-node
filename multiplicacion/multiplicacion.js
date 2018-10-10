const fs = require('fs');
const colors = require('colors');

let createFile = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`${base} is not a number`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, data, (err) => {
            if (err) throw err;
            resolve(`tabla-del-${base}-al-${limite}.txt ha sido creado!`);
        });

    });
};

let listar = (base, limite = 10) => {
    console.log(`===================`.rainbow);
    console.log(`====Tabla del ${base}===`.yellow);
    console.log(`===================`.rainbow);
    for (let i = 1; i <= limite; i++) {
        console.log(colors.verbose(`${base} * ${i}`), colors.red('='), colors.info(`${base * i}`));
    }
}

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});


module.exports = {
    createFile,
    listar
}