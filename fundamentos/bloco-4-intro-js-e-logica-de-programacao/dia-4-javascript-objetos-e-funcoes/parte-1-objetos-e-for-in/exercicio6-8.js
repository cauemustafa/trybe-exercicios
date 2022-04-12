// Usando o objeto abaixo, faça os exercícios a seguir:

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      },
    ],
  };

  /* 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos,
   e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama
    'O Pior Dia de Todos'". */
console.log('6 - ');

console.log('O livro favorito de',leitor.nome,leitor.sobrenome,'se chama',`"`+leitor.livrosFavoritos[0]['titulo']+`"`);

/* 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array.
 Atribua a esta chave um objeto contendo as seguintes informações: 
 
 {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
*/

/* 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato:
 "Julia tem 2 livros favoritos".
 */
console.log('8 - ');

console.log(leitor.nome,'tem',leitor.livrosFavoritos.length,'livros favoritos');
