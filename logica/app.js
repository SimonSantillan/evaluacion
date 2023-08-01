/* 
[11:04] Ana Minissale

Cree una función en Javascript "anagram" que reciba dos strings y retorne true si el primer string es un anagrama del segundo o false si no lo es.

Nota: un anagrama es un con junto de caracteres que resulta de la combinar los caracteres de otro conjunto de caracteres. 

*/
 

function anagram(string1,string2) {
    let palabra1 = string1;
    let palabra2 = string2;


    let sonIguales = 0;
    if (palabra1.length === palabra2.length) {
        for (let i = 0; i < palabra1.length; i++) {
            for (let j = 0; j < palabra2.length; j++) {
                if(palabra1[i]===palabra2[j]) {
                    sonIguales++
                    console.log(palabra1[i], palabra2[j])
                    break;
                }
            }
        }
        if(sonIguales===palabra1.length) {
            return true
        } else {
            return false
        }
    } else {
        return 'Las palabras ingresadas no tienen la misma longitud';
    }
    

    
}
/* Cumple que el primer string es un anagrama del segundo */
 console.log(anagram('pepe','pepe'));
 console.log(anagram('pepq','pepe'));
 console.log(anagram('rumcieloga','murcielago'));
 console.log(anagram('nomis','simon'));
 console.log(anagram('nomiq','simon'));
 console.log(anagram('casq','casa'));
 console.log(anagram('casco','casa'));
 console.log(anagram('cosac','casco'));
 console.log(anagram('conrecoer','reconocer'));
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