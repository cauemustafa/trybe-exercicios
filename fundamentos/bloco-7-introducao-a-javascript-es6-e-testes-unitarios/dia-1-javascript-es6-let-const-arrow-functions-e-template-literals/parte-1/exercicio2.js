/* 🚀 Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().
Spoiler: É possível realizar uma função que ordene qualquer array de números.
 */

const oddsAndEvens = [13, 3, 4, 10, 7, 2]
console.log('Ordem original: ' + oddsAndEvens)

// array.sort() with compare function
console.log(`Ordem crescente: ${oddsAndEvens.sort((a, b) => a - b)}`)

console.log(`Ordem decrescente: ${oddsAndEvens.sort((a, b) => b - a)}`)

// The Fisher Yates Method
// Random Order
const randomOrder = (arr) => {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * i)
    const k = arr[i]
    arr[i] = arr[j]
    arr[j] = k
  }
  return arr
}

console.log(`Ordem aleatória: ${randomOrder(oddsAndEvens)}`)

// reference:
// https://www.w3schools.com/js/js_array_sort.asp
