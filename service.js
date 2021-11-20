const dados = require('./data.js');

function retornaFrase (dia) {
    return dados.frases[dia - 1];
}

exports.retornaFrase = retornaFrase;