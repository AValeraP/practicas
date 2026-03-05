/*
Ejercicio 4, refactoriza el código
Dado los siguientes códigos, refactorízalos como consideres, si consideras que está bien, explica el motivo.

Primer código
Tenemos una función que saca el nombre completo del usuario con el nombre y apellido

var usuario = {
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 45,
  profesion: "Barro man",
};

console.log(nombreUsuario(usuario));

function nombreUsuario(user) {
  const nombrCompleto = "Me llamo " + user.nombre + " " + user.apellido;

  return nombrCompleto;
}


Segundo código
Tenemos una función que calcula el salario anual y el nombre del usuario
const user = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function userData(user) {
  const annualSalary = user.salary * 12;
  const fullName = `${user.name} ${user.last}`;

  return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
}

console.log(userData(user));


Tercer código
Si el usuario tiene 30 años y no es español, recibirá una ayuda del gobierno de 2000€
const user = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

function esExtrangero(user) {
  if (user.nationality != "España") {
    if (user.age == "30") {
      return "Apto para la ayuda del gobierno";
    } else {
      return "No es apto para la ayuda del gobierno";
    }
  } else {
    return "No es apto para la ayuda del gobierno";
  }
}

console.log(esExtrangero(user));
*/


//1
function nombrarUser(){
    
    let user = {
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 45,
  profesion: "Barro man",
    }

    const nombreCompleto = "Me llamo " +user.nombre + " " +user.apellido
    console.log(nombreCompleto);
}

nombrarUser();

//2
var user = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function obtenerNombre(u){
  const fullName = u.name + " " + u.last;
  return fullName;
}

function obtenerSalario(u){
    const salarioAnual = u.salary*12;
    return salarioAnual;
}

function mostrarDatos(){
    obtenerNombre(user);
    obtenerSalario(user);

    const nombreCompleto = obtenerNombre(user);
    const salarioTotal = obtenerSalario(user);
    console.log("Me llamo " +nombreCompleto +" y cobro " +salarioTotal)
}

mostrarDatos();

//3
const persona =  {
    name: "",
    last: "",
    age: 30,
    nationality: "",
};

function esExtrangero(user) {
    if(persona.age == "30" && persona.nationality!="España"){
            console.log("Apto")
        }else{
            console.log("No apto")
        }
}

esExtrangero(persona);