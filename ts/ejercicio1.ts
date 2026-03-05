/*Crea un objeto bird que tenga los siguientes datos: name, canEat, canDrink, canSleep, canFly
Crea un objero dog que tenga los mismos datos que pájaro, pero que a demás tenga: race, age
Crea los tipos/interfaces necesarios para poder trabajar con estos datos en TypeScript. */

//Interfaz de bird (establece el tipo de variables)
interface Bird {
    name: string,
    canEat: boolean,
    canDrink: boolean,
    canSleep: boolean,
    canFly: boolean,
}
//Objeto bird con los valores de las variables
const bird: Bird = {
name: "Piolín",
canEat: true,
canDrink: true,
canSleep: true,
canFly: true,
}
//Interfaz de dog
interface Dog {
    name: string,
    canEat: boolean,
    canDrink: boolean,
    canSleep: boolean,
    canFly: boolean,
    race: string,
    age: number,
}
//Objeto de dog
const dog: Dog = {
name: "Buñuelo",
canEat: true,
canDrink: true,
canSleep: true,
canFly: false,
race: "Beagle",
age: 2,
}