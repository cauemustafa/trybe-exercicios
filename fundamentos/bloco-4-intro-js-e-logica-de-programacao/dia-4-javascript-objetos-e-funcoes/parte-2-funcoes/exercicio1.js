/* 1 - Crie uma função que receba uma string e retorne true
 se for um palíndromo, ou false, se não for. */

 function ehPalindromo(palavra) {
    
    // let letras = palavra.split('');
    // console.log(letras);
    let verifica = false;

    // for (let i in letras) { //usando o split
    //     console.log(letras[i],'é igual',letras[letras.length-1-i],'?');
    //     if (letras[i] == letras[letras.length-1-i]) {
        for (let i=0; i<=palavra.length/2; i++) {  //elimina os testes repetitivos.
        console.log(palavra[i], 'é igual', palavra[palavra.length-1-i], '?');
        if (palavra[i] == palavra[palavra.length-1-i]) {
            verifica = true;
        }   else {
                verifica = false;
                break;
            };
    };
    return verifica;
 };
 
 console.log(ehPalindromo('ana'));
