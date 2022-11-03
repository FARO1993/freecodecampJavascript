/**
 * Comprobador de palindromos
 * 
 * Devuelve true si la cadena proporcionada es un palindromo. De lo contrario, devuelve false.
 * Un palindromo es una palabra o frase que se escribe de la misma manera hacia adelante y hacia atras,
 * ignorando la puntuacion, mayusculas, minusculas y espaciado.
 * 
 * Nota: Tendras que eliminar todos los caracteres no alfanumericos(puntuacion, espacios y simbolos) y convertir todo
 * en mayusculas o minusculas para comprobar si hay palindromos.
 * 
 * Pasaremos cadenas con formatos variables, como racecar, Racecar y race CAR entre otros.
 * Tambien pasaremos cadenas con simbolos especiales, como 2A3*3a2, 2A3 3a2 y 2_A3*3#A2.
 */


function palindrome(str) {
    //Expresion regular para reemplazar valores no alfanumericos.
    const newStr = str.replace(/[\W_]/g, "").toLowerCase();
    const result = newStr.split("").reverse().join("");
    return newStr === result;
  }
  
palindrome("not a palindrome");

  /**
palindrome("eye") debe devolver un booleano.
palindrome("eye") debe devolver true.
palindrome("_eye") debe devolver true.
palindrome("race car") debe devolver true.
palindrome("not a palindrome") debe devolver false.
palindrome("A man, a plan, a canal. Panama") debe devolver true.
palindrome("never odd or even") debe devolver true.
palindrome("nope") debe devolver false.
palindrome("almostomla") debe devolver false.
palindrome("My age is 0, 0 si ega ym.") debe devolver true.
palindrome("1 eye for of 1 eye.") debe devolver false.
palindrome("0_0 (: /-\ :) 0-0") debe devolver true.
palindrome("five|\_/|four") debe devolver false.
   */