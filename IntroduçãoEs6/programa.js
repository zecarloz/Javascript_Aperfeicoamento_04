// Importação do projeto
let teclado = require('prompt-sync')();

//Entrada de dados
let valor1 = teclado('Digite o primeiro valor:');
console.log(`Você digitou o valor 1 = ${valor1}`);

let valor2 = teclado('Digite o segundo valor:');
console.log(`Você digitou o valor 2 = ${valor2}`);

let soma = parseInt(valor1)+parseInt(valor2);
console.log(`A soma dos valores digitados é :${soma}`);

//Entrada
//Processamento
//Saida

// console.log('+-----------------+');
// console.log('|   Boteco        |');
// console.log('|-----------------|');
// console.log('|1. Comprar       |');
// console.log('|2. Ver estoque   |');
// console.log('+-----------------+');
