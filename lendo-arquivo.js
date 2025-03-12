const dados = require('./estudante.json');
//metodo nativo do nodejs para ler arquivos

console.log(dados);
console.log(dados.telefones[1]);
console.log(dados.endereco.rua, dados.endereco.numero);

const chaves = Object.keys(dados);

console.log(chaves);


