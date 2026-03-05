/*
¿Qué salida tendrán los siguientes console.log?
*/


// Comparaciones con booleanos
//En JS cuando intentas usar operadores con booleanos, le asigna un valor a false y true, 0 y 1 respectivamente
// 0+0=0, 0+1=1, 1+1=2
console.log(false + false); //0
console.log(false + true); //1 
console.log(true + true); //2

// Comparaciones con arrays
console.log([] === []); //false, aunque ambos arrays nos parezcan iguales, js los interpreta como distintos porque los guarda en distintos espacios de memoria.
console.log([] + []); //vacío
console.log([1, 2] + [3, 4]); //1,23,4
console.log([1] + 1);//11, js asume el contenido de [] en un string, entonces concatena ambos valores ya que el operador + también sirve para concatenar
console.log([1] - 1);//0, como el operador - solo sirve para restar, js convierte el valor del array a int, entonces realiza la operacicon (1-1)

// Comparaciones con objetos
console.log({} + {}); //[object Object] [object Object]
console.log({} === {}); //false
console.log([] === {}); //false, este caso y el anterior se deben a la misma razón que la del array.

// Comparaciones especiales
console.log(null + 1); //1, ya que null lo cuenta como 0
console.log(undefined + 1); //NaN, debido a que el valor undefined solo se encuentra en Strings
console.log(null == 0); //false, null solo es igual a undefined
console.log(null <= 0); //true, js al hacer una comparación usando >,< >= transforma null a 0, por tanto son iguales.
console.log(undefined == null);//true, en este caso que los esta comparando por igualdad abstracta.
//Si fuera undefined === null, daría false.

// Operaciones con NaN
console.log(NaN + 1);//NaN, porque lo detecta como no como un número y por tanto no puede sumarle 1
console.log(NaN == NaN);//false
console.log(NaN === NaN);//false

//los dos últimos dan false debido a que js asume que un valor desconocido es distinto de otro valor desconocido