/* **********     Variables: var-let     ********** */
var hola = "Hola Mundo";
let hello = "Hi World";
console.log(hola);
console.log(hello);
console.log(window);
console.log(window.hola);
console.log(window.hello);

//Ambito de bloque
//Esto es un bloque - comentario de una linea
/*
      Esto
      es
      un
      comentario
      de
      varias
      líneas
      */

console.log("*****************var****************");
var musica = "Rock";
console.log("Variable Música antes del Bloque", musica);
{
  var musica = "Pop";
  console.log("Variable Música dentro del Bloque", musica);
}
console.log("Variable Música antes del Bloque", musica);

console.log("*****************let****************");
let musica2 = "Rock";
console.log("Variable Música antes del Bloque", musica2);
{
  let musica2 = "Pop";
  console.log("variable Música dentro del Bloque", musica2);
}
console.log("variable Música antes del Bloque", musica2);

/* **********     Constantes (const)     ********** */

let a; /*Permite declarar una variable vacía*/
const PI = 3.1416;
const nueve = 9;
console.log(PI);

a = "kenai";
console.log(a);

/*Objetos y arreglos*/

const objeto = {
  nombre: "Jon",
  edad: 35,
};

const colores = ["blanco", "negro", "azul"];

console.log(objeto);
console.log(colores);

objeto.correo = "correo@correo.com";
colores.push("naranja");

console.log(objeto);
console.log(colores);

/* **********     Cadenas de Texto (Strings)     ********** */
let nombre = "Will";
let apellido = "BetId";
let saludo = new String("Hola mundo");
let lorem =
  "                Lorem ipsum dolor sit amet                 , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

console.log(nombre, apellido, saludo);
console.log(
  nombre.length,
  apellido.length,
  saludo.length,
  nombre.toUpperCase() /*Mayúsculas*/,
  apellido.toLowerCase() /*Minúsculas*/,
  lorem.includes("amet") /*Encontrar una palabra*/,
  lorem.includes("Will") /*Encontrar una palabra*/,
  lorem /*String original*/,
  lorem.trim() /*Quita espacios alrededor del texto*/,
  lorem.split(" ") /*Generar un arreglo, para agregar un separador*/,
  lorem.split(",")
);

/* **********     Template Strings     ********** */

let name = "Will";
let lastName = "BetId";

let text = "Hola, mi nombre es " + name + " " + lastName;
console.log(text);

//Interpolaciones
let saludo2 = `Hola, mi nombre es ${name} ${apellido}`;
console.log(saludo2);

let ul = "<ul><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul>";
console.log(ul);

let ul2 = `
      <ul>
        <li>Primavera</li>
        <li>Verano</li>
        <li>Otoño</li>
        <li>Invierno</li>
      </ul>`;

console.log(ul2);

let ul3 = "<ul>";
ul3 += "<li> Primavera</li>";
ul3 += "<li>Verano</li>";
ul3 += "<li>Otoño</li>";
ul3 += "<li>Invierno</li>";
ul3 += "</ul>";

console.log(ul3);
