/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:

- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()

1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie uma função que mude a cor do quadrado vermelho para branco.
4. Crie uma função que corrija o texto da tag <h1>.
5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

const changeTextOnP = (text) => (document.getElementsByTagName('p')[0].innerText = text)

changeTextOnP('loremipsum')

const changeMainContent = (backgroundColor) => (document.getElementsByClassName('main-content')[0].style.backgroundColor = backgroundColor)

changeMainContent('green')

const changeCenterContent = (backgroundColor) => (document.getElementsByClassName('center-content')[0].style.backgroundColor = backgroundColor)

changeCenterContent('white')

const correctText = (text) => (document.getElementsByClassName('title')[0].innerText = text)

correctText('JavaScript')

const changeToUpperCase = () => {
  const paragraph = document.getElementsByTagName('p')
  for (const p of paragraph) {
    p.style.textTransform = 'uppercase'
  }
}
changeToUpperCase()

const showTags = () => {
  const tags = document.getElementsByTagName('p')
  for (const tag of tags) {
    console.log(tag.innerHTML)
  }
}
showTags()
