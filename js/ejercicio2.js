/*
Ejercicio 2, Hoisting
Que devuelve por consola cada uno de los siguientes console.log
*/
console.log(a);
var a = "hola";

console.log(b);
let b = "hola";

console.log(c);
const c = "hola";

sayHi();


function sayHi() {
  console.log("Hola desde sayHi!");
}

function sayBye() {
  console.log("Adios desde sayBye!");
}

sayBye();

/*En los primeros ejemplos da error y nunca muestra nada porque se intenta imprimir primero la variable
 antes de declararla y asignarle un valor. 

Por el contrario al llamar las funciones, se imprimen siempre independientemente de su orden.
*/