/* Pig Latin 
Pig Latin es una manera de alterar las palabras en ingles. Las normas son las siguientes:
-Si una palabra comienza con una consonante, toma la primer consonante o grupo de consonantes, muevela al final
de la palabra, y añadre "ay" en ella.
-Si una palabra comienza con una vocal, solo añade "way" al final.

Traduce la cadena proporcionada a Pig Latin. Las cadenas de entrada estan garantizadas como palabras en ingles en minusculas.*/
function isVocal(string) {
    let vocales = ["a", "e", "i", "o", "u"];
    return vocales.includes(string);
}

function translatePigLatin(str) {
    debugger;
    let nuevoStr = str.trim().toLowerCase().split("");
    let consonantes = [];
    console.log(consonantes);
    for (let i = 0; i < nuevoStr.length; i++) {
        if (!isVocal(nuevoStr[i])) {
            consonantes.push(nuevoStr[i]);
            nuevoStr.splice(i, 1);
            i -= 1;
        } else {
            if (consonantes.length > 0) {
                break;
            } else {
                return nuevoStr.join("") + "way";
            }
        }
    }

    consonantes = [...nuevoStr, ...consonantes];
    consonantes = consonantes.join("") + "ay";

    return consonantes;
}

translatePigLatin("eight");