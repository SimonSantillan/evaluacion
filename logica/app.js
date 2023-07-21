/* 
[11:04] Ana Minissale

Cree una función en Javascript "anagram" que reciba dos strings y retorne true si el primer string es un anagrama del segundo o false si no lo es.

Nota: un anagrama es un con junto de caracteres que resulta de la combinar los caracteres de otro conjunto de caracteres. 

*/
 

function anagram(string1,string2) {
    let palabra1 = string1;
    let palabra2 = string2;


    let nuevaPalabra2 = "";
    for(let i = (palabra2.length-1); i >= 0; i--) {
        nuevaPalabra2+= palabra2[i];
    }
    if (palabra1===nuevaPalabra2) {
        return true;
    } else {
        return false;
    }
}

 console.log(anagram('pepe','epep'));
 console.log(anagram('simon','nomis'));
 console.log(anagram('simone','simon'));
 console.log(anagram('qondae','simon'));
 console.log(anagram('n','n'));
 console.log(anagram('no','no'));
 console.log(anagram('no','on'));
/*
[11:05] Ana Minissale

Escriba una función en JavaScript "reverseInteger" que reciba un entero y devuelva otro entero con los dígitos invertidos. 

*/

function anagramNum(num2) {
    let numero2 = num2.toString();
    let nuevaPalabra2 = "";
    for(let i = (numero2.length-1); i >= 0; i--) {
        nuevaPalabra2+= numero2[i];
    }
    return parseInt(nuevaPalabra2)
}

console.log(anagramNum(987))
console.log(anagramNum(1987))
console.log(anagramNum(1566987))