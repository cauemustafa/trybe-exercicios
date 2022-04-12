/* Parte I - Objetos e For/In

Usando o objeto abaixo, faça os exercícios a seguir:
*/

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal dos quadrinhos do Pato Donald',
    recorrente: 'Sim',
    }

/* 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima,
 incluindo seu nome. Valor esperado no console: */
 console.log('1 - ');

console.log('Bem vinda,', info.personagem);

/*2 - 
Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e
 o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console: */

/* 3 - 
Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:*/
console.log('3 - ');

for (let index in info) {
    console.log(index);
}

/* 4 - 
Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
 Valor esperado no console: */
 console.log('4 - ');

for (let index in info) {
    console.log(info[index]);
}

/* 5 -
Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e
 os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178',
  'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com
   cada uma das chaves. Valor esperado no console: */
   console.log('5 - ');

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

for (let i in info){
    console.log(info[i],'e',info2[i]);
}
