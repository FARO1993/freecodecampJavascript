/*
    Aplanadora
    Aplana un arreglo anidado. Debes tener en cuenta los diferentes niveles de anidacion. 
*/ 

// This is done in a linear time O(n) without recursion
// memory complexity is O(1) or O(n) if mutable param is set to false
function flatten(array, mutable) {
    var toString = Object.prototype.toString;
    var arrayTypeStr = '[object Array]';
    
    var result = [];
    var nodes = (mutable && array) || array.slice();
    var node;

    if (!array.length) {
        return result;
    }

    node = nodes.pop();
    
    do {
        if (toString.call(node) === arrayTypeStr) {
            nodes.push.apply(nodes, node);
        } else {
            result.push(node);
        }
    } while (nodes.length && (node = nodes.pop()) !== undefined);

    result.reverse(); // we reverse result to restore the original order
    return result;
}

function steamrollArray(arr) {
    return flatten(arr,true);
  }
  

steamrollArray([1, [2], [3, [[4]]]]);  


  /*
  steamrollArray([[["a"]], [["b"]]]) debe devolver ["a", "b"].
  steamrollArray([1, [2], [3, [[4]]]]) debe devolver [1, 2, 3, 4].
  steamrollArray([1, [], [3, [[4]]]]) debe devolver [1, 3, 4].
  steamrollArray([1, {}, [3, [[4]]]]) debe devolver [1, {}, 3, 4].
  Tu solución no debe utilizar los métodos Array.prototype.flat() o Array.prototype.flatMap().
  Las variables globales no deben ser usadas.
  */ 