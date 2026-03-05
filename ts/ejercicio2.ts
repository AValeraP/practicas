//Partiendo del ejercicio 1, haz que la raza (race), solo pueda ser Husky, Labrador, Chucho

//Mediante un type, limitamos el número de opciones.
type race = 'husky' | "labrador"| "chucho";
interface perro {
    name: string,
    canEat: boolean,
    canDrink: boolean,
    canSleep: boolean,
    canFly: boolean,
    race: race,
    age: number,
}