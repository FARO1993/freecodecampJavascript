/*
    Argumentos opcionales
Crea una funcion que sume dos argumentos. Si solo se proporciona un argumento, entonces devuelve una funcion que espera
un argumento y devuelve la suma.
Por ejemplo, addTogether(2,3) debe devovler 5 y addTogether(2) debe devolver una funcion.
Si se llama a esta funcion con un solo argumento, se obtendra la suma.
*/ 


function addTogether() {
    // Función para comprobar si un número es realmente un número
    // y retornar undefined en caso contrario.
    var checkNum = function(num) {
      if (typeof num !== 'number') {
        return undefined;
      } else
        return num;
    };
  
    // Comprobar si tenemos dos parámetros y si ambos son números
    // En caso que no lo sean retornamos undefined
    // retornamos la suma
    if (arguments.length > 1) {
      var a = checkNum(arguments[0]);
      var b = checkNum(arguments[1]);
      if (a === undefined || b === undefined) {
        return undefined;
      } else {
        return a + b;
      }
    } else {
      // Si solo es encontrado un parámetro retornamos una nueva función para solicitar un segundo parámetro
      // Guardamos el primer argumento antes de entrar al scope de la nueva función
      var c = arguments[0];
  
      // Comprobamos que sea número de nuevo, debe ser fuera del objeto que retornaremos
      // en lugar de undefined.
      if (checkNum(c)) {
        // // Retornamos la función que espera el segundo parámetro.
        return function(arg2) {
          // Comprobamos que no sean números.
          if (c === undefined || checkNum(arg2) === undefined) {
            return undefined;
          } else {
            // Si lo son, sumamos.
            return c + arg2;
          }
        };
      }
    }
  }
  
  // realizamos el test
  addTogether(2,3);


  /**
   * addTogether(2, 3) debe devolver 5.
   * addTogether(23, 30) debe devolver 53.
   * addTogether(5)(7) debe devolver 12.
   * addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") debe devolver undefined.
   * addTogether(2, "3") debe devolver undefined.
   * addTogether(2)([3]) debe devolver undefined.
   * addTogether("2", 3) debe devolver undefined.
   * addTogether(5, undefined) Debería devolver undefined.
   * 
   */