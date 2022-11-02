/**
 * Crea una persona
 * 
 * Completa el constructor de objetos con los siguientes metodos:
 *  getFirstName()
    getLastName()
    getFullName()
    setFirstName(first)
    setLastName(last)
    setFullName(firstAndLast)

    Ejecuta las pruebas para ver el resultado esperado para cada método. 
    Los métodos que toman un argumento deben aceptar sólo un argumento y tiene que ser una cadena. 
    Estos métodos deben ser el único medio disponible para interactuar con el objeto.
 * 
 */


const Person = function(firstAndLast) {
    // Cambia solo el código debajo de esta línea
    // Completa el método de abajo e implementa los otros de manera similar
    
    this.getFullName = function() {
      return firstAndLast;
    };

    this.getLastName = function() {
        return firstAndLast.split(" ").pop();
    };

    this.getFirstName = function() {
        return firstAndLast.split(" ").slice(0,1).toString();
    };

    this.setFullName = function(nombreCompleto){
        firstAndLast = nombreCompleto;
    };

    this.setLastName = function(apellido){
        const arrName = firstAndLast.split(" ");
        arrName[1] = apellido;
        firstAndLast = arrName.join(" ");
    };

    this.setFirstName = function(nombre){
        const arrName = firstAndLast.split(" ");
        arrName[0] = nombre;
        firstAndLast = arrName.join(" ");
        
    };


    return firstAndLast;
};
  
const bob = new Person("Bob Ross");
console.log(bob.getFullName());
bob.setFirstName("Haskell");
console.log(bob.getFullName());
//console.log(bob.getFullName());

/***
No se deben agregar propiedades. Object.keys(bob).length siempre debe devolver 6.
bob instanceof Person debe devolver true.
bob.firstName debe devolver undefined.
bob.lastName debe devolver undefined.
bob.getFirstName() debe devolver la cadena Bob.
bob.getLastName() debe devolver la cadena Ross.
bob.getFullName() debe devolver la cadena Bob Ross.
bob.getFullName() debe devolver la cadena Haskell Ross after bob.setFirstName("Haskell").
bob.getFullName() debe devolver la cadena Haskell Curry después de bob.setLastName("Curry").
bob.getFullName() debe devolver la cadena Haskell Curry después de bob.setFullName("Haskell Curry").
bob.getFirstName() debe devolver la cadena Haskell después de bob.setFullName("Haskell Curry").
bob.getLastName() debe devolver la cadena Curry después de bob.setFullName("Haskell Curry").
*/