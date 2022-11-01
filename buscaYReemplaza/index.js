/* Busca Y reemplaza
Realiza una busqueda y reemplaza en la oracion usando los argumentos proporcionados y devuelve la nueva oracion.
El primer argumento es la frase sobre la que se va a realizar la busqueda y el reemplazo.
El segundo argumento es la palabra que se reemplazara(antes).
El tercer argumento es lo que reemplazara el segundo argumento(despues).

Nota: Manten la capitalizacion del primer caracter en la palabra original cuando lo estes reemplazando. Por ejemplo,
si quieres reemplazar la palabra "Book" por la palabra "dog", debe ser reemplazada como "Dog".
*/
function isMayuscula(letra) {
    return letra === letra.toUpperCase();
};

function myReplace(str, before, after) {
    debugger;
    let newAfter = after.slice(1);
    let letra = "";
    if (isMayuscula(before[0])) {
        letra = after.charAt(0).toUpperCase();
    } else {
        letra = after.charAt(0).toLowerCase();
    }
    let result = str.replace(before, letra+newAfter);
    return result;

};

myReplace("His name is Tom", "Tom", "john");

/*
myReplace("Let us go to the store", "store", "mall") debe devolver la cadena Let us go to the mall.
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") debe devolver la cadena He is Sitting on the couch.
myReplace("I think we should look up there", "up", "Down") debe devolver la cadena I think we should look down there.
myReplace("This has a spellngi error", "spellngi", "spelling") debe devolver la cadena This has a spelling error.
Esperando:myReplace("His name is Tom", "Tom", "john") debe devolver la cadena His name is John.
myReplace("Let us get back to more Coding", "Coding", "algorithms") debe devolver la cadena Let us get back to more Algorithms.
*/ 