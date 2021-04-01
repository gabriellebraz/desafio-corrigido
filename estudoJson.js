let bancoDados = require('./bancoDados.json');

let pets = bancoDados.pets;


const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);

    // if(servico){
    //     servico();
    // }
    (servico) ? servico() : console.log('só vim dar uma olhadinha');

    console.log('Tchau, até mais!');
}

const darBanho = () => {
    console.log('dando banho no pet...');
}

const apararUnhas = () => {
    console.log('Aparando unhas...');
}

// atenderCliente(pets[0], darBanho);
// console.log("---------")
// atenderCliente(pets[2], apararUnhas);
// console.log("---------")
// atenderCliente(pets[1]);


//desestruturação

// let pessoa = {
//     nome: 'Iago',
//     idade: 25,
//     profissao: 'dev',
//     contato: '119999999',
//     habilidades: ['node.js', 'mysql', 'javascript', 'html']
// }

// let {nome, contato} = pessoa;

// console.log(`${pessoa.nome} - ${pessoa.contato}`);
// console.log(`${nome} - ${contato}`);

let turma1 = ['Anna', 'João', 'Vinicius', 'Igor'];
let turma2 = ['Janaina', 'Gustavo', 'Adriana', 'Isaac', 'Anna'];

// let turmasAvanade = [turma1, turma2];
// let turmasAvanade = [...turma1, ...turma2];

// console.log(turmasAvanade);

// turma1.push(turma2);
// console.log(turma1)