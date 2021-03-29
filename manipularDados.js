let fs = require('fs'); //filesystem - modulo nativo

//pega conteudo do arquivo e converte pra utf-8
let bancoDados = fs.readFileSync('bancoDados.json', 'utf-8');

//converte o conteudo
bancoDados = JSON.parse(bancoDados);

bancoDados.pets.push({
    "nome": "Morgana",
    "tipo": "gato",
    "idade": 10,
    "raca": "SRD",
    "peso": 3,
    "tutor": "Gabrielle",
    "contato": "(11) 97589-8599",
    "vacinado": true,
    "servicos": []
});

let petsAtualizado = JSON.stringify(bancoDados);

fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');


