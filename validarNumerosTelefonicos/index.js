/*
Validador de números telefónicos

Devuelve true si la cadena pasada concuerda con un número de teléfono válido en Estados Unidos.

El usuario puede completar el campo del formulario de la forma que elija, 
siempre que tenga el formato de un número estadounidense válido. 
Los siguientes ejemplos son de formatos válidos para números estadounidenses 
(consulte las pruebas a continuación para otras variantes):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

Para este desafío se te presentará una cadena como 800-692-7753 o 8oo-six427676;laskdjf. 
Tu trabajo es validar o rechazar el número de teléfono estadounidense basado en cualquier combinación de los formatos proporcionados arriba. 
El código de área es obligatorio. Si el código de país es proporcionado, debes confirmar que el código de país es 1. 
Devuelve true si la cadena es un número de teléfono estadounidense valido; de lo contrario devuelve false.
*/ 

function telephoneCheck(str) {
    //Expresion regular para validar numero telefonico formato estadounidense.
    var re=/^[1-9]\d{9}$|^[1-9]\d{2}-[0-9]\d{2}-[0-9]\d{3}$|^\([1-9]\d{2}\)[0-9]\d{2}-[0-9]\d{3}$|^\([1-9]\d{2}\)\s[0-9]\d{2}-[0-9]\d{3}$|^[1-9]\d{2}\s[0-9]\d{2}\s[0-9]\d{3}$|^[1]\s[0-9]\d{2}\s[0-9]\d{2}\s[0-9]\d{3}$|^[1]\s[0-9]\d{2}-[0-9]\d{2}-[0-9]\d{3}$|^[1]\s\([0-9]\d{2}\)\s[0-9]\d{2}-[0-9]\d{3}$|^[1]\([0-9]\d{2}\)[0-9]\d{2}-[0-9]\d{3}$/g;
    if(str.match(re)){
      return true;
    }else{
      return false;
    }
}
  
  
telephoneCheck("555-555-5555");

/*
telephoneCheck("555-555-5555") debe devolver un booleano.
telephoneCheck("1 555-555-5555") debe devolver true.
telephoneCheck("1 (555) 555-5555") debe devolver true.
telephoneCheck("5555555555") debe devolver true.
telephoneCheck("555-555-5555") debe devolver true.
telephoneCheck("(555)555-5555") debe devolver true.
telephoneCheck("1(555)555-5555") debe devolver true.
telephoneCheck("555-5555") debe devolver false.
telephoneCheck("5555555") debe devolver false.
telephoneCheck("1 555)555-5555") debe devolver false.
telephoneCheck("1 555 555 5555") debe devolver true.
telephoneCheck("1 456 789 4444") debe devolver true.
telephoneCheck("123**&!!asdf#") debe devolver false.
telephoneCheck("55555555") debe devolver false.
telephoneCheck("(6054756961)") debe devolver false.
telephoneCheck("2 (757) 622-7382") debe devolver false.
telephoneCheck("0 (757) 622-7382") debe devolver false.
telephoneCheck("-1 (757) 622-7382") debe devolver false.
telephoneCheck("2 757 622-7382") debe devolver false.
telephoneCheck("10 (757) 622-7382") debe devolver false.
telephoneCheck("27576227382") debe devolver false.
telephoneCheck("(275)76227382") debe devolver false.
telephoneCheck("2(757)6227382") debe devolver false.
telephoneCheck("2(757)622-7382") debe devolver false.
telephoneCheck("555)-555-5555") debe devolver false.
telephoneCheck("(555-555-5555") debe devolver false.
telephoneCheck("(555)5(55?)-5555") debe devolver false.
telephoneCheck("11 555-555-5555") debe devolver false.
*/ 

