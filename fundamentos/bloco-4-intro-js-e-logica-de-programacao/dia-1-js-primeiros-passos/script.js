// 1. Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
// 2. Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
// 3. Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

const base =5;
let height = 8;
const area = base*height;
console.log('Área:',area);
const perimeter = 2*(base+height);
console.log('Perímetro:',perimeter)

// 1. Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
// 2. Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:

const nota = 80;

if (nota >= 80) {
    console.log('Parabéns, você foi aprovade!');
}   else if (nota < 60) {
    console.log('Você foi reprovade.');
    } else {
        console.log('Você está na lista de espera.');
    }
