/*
Ejercicio 5, maps
Sigue los siguientes pasos:

Crea un mapa llamado myMap
Añade los siguientes key-valor al map
Clave	Valor
moroso	user (object)
agarrado	user (object)
generoso	user2 (object)
funcion	findAnimal (function)
color	color (string)
Muestra por consola todo el map
Muestra por consola el key moroso
Comprueba si existe la key hola
Muestra por consola el tamaño total del map
Recorre el map con un forEach
Elimina el elemento agarrado del map
Limpia el mapa por completo

*/

const myMap = new Map();
myMap.set("Clave", "Valor");
myMap.set("moroso", "user (object)");
myMap.set("agarrado", "user(object)");
myMap.set("generosos", "user2(object)");
myMap.set("funcion", "findAnimal()");
myMap.set("color", "color(string)");

//Mostrar todo el map
console.log(myMap)
//Mostrar el key moroso
console.log(myMap.get("moroso"));
//Comprobar si existe el key hola
console.log(myMap.has("hola")); //Devuelve false en la terminal
//Mostrar por consola el tamaño real del map
console.log(myMap.size)
//Recorrer el map con un foreach
myMap.forEach((valor, clave) => {
    console.log(`${clave}: ${valor}`);
});
//Eliminar el elemento agarrado del map
myMap.delete("color") //Eliminamos el último elemento
console.log(myMap);
//Limpiar el mapa por completo
myMap.clear();
console.log(myMap);