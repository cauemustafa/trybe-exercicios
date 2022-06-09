/* Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

Bônus (opcional): tente fazer o mesmo exercício de forma recursiva.

http://devfuria.com.br/logica-de-programacao/recursividade-fatorial/

Spoiler: É possível resolver com uma linha usando ternary operator. */

const calculaFatorial = (number) => {
  let fatorial = 1
  for (let i = 0; i < number; i += 1) fatorial *= number - i
  return fatorial
}
console.log('Modelo 1: ' + calculaFatorial(4))

// de forma não recursiva
const calculaFatorial2 = (number) => {
  let fatorial = number
  if (number === 0) return 1
  while (number > 2) fatorial *= --number // operador Decrement (--)
  return fatorial
}
console.log('Modelo 2: ' + calculaFatorial2(4))
// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement

// resolvendo com operador ternário usando a forma recursiva
// reference: https://www.ime.usp.br/~leo/mac2166/2017-1/introducao_recursividade_exemplos.html
const fatorial = (n) => n ? fatorial(n - 1) * n : 1

// entendendo recursividade sem operador ternário
/* const fatorial = (n) => {
  if (n) {
    console.log(`(${fatorial(n - 1)}, ${n})`)
    return fatorial(n - 1) * n
  } else return 1
} */
console.log('Modelo 3: ' + fatorial(4))
