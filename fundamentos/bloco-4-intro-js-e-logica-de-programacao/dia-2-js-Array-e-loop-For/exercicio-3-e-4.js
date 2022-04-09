//>>> >-> 3 <-< <<<
//Para o terceiro exercício, calcule e imprima a média
// aritmética dos valores contidos no array;

let numbers = [5,9,3,19,70,8,100,2,35,27];

let media = 0;
let sum = 0;

for (i=0; i<numbers.length; i++){
    sum += numbers[i];
}
media = sum / numbers.length;
console.log(media);

//>>> >-> 4 <-< <<<
//Com o mesmo código do exercício anterior, caso o valor final seja
// maior que 20, imprima a mensagem: "valor maior que 20".
//Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media>20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}
