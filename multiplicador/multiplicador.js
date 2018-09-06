const fs = require('fs');
const colors = require('colors')


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('No ingreso un numero')
            return
        }

        for (base; base <= limite; base++) {
            console.log(`${base} x ${limite} = ${base * limite}\n`)
        }
    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        let data = ''

        for (base; base <= limite; base++) {
            data += `${base} x ${limite} = ${base * limite}\n`

        }

        fs.writeFile(`./tablas/tabla-${base - 1}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`El archivo tabla-${base - 1}`)
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}