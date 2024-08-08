/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

/*
// **********     Ejercicio 1     **********

console.log("**********     Ejercicio 1     **********");

function contador(text) {
  if (typeof text === "string") {
    return text.length;
  } else {
    console.log("Esta cadena no está definida o no es válida");
  }
}

console.log(contador("text"));

// **********     Solución tutor ejercicio 1     **********

//Función declarada (Mala práctica):
function characterCount(string = "") {
  if (!string) {
    console.warn("No ingresaste ninguna cadena");
  } else {
    console.info(`La cadena "${string}" tiene ${string.length} caracteres`);
  }
}

const characterCount2 = (string2 = "") =>
  !string2
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(`La cadena "${string2}" tiene ${string2.length} caracteres`);

characterCount();
characterCount("Hola Mundo");
characterCount2();
characterCount2("Hola Mundo");

// **********     Ejercicio 2     **********

console.log("**********     Ejercicio 2     **********");

let string2 = new String("Hola Mundo");

function buscador(string2, num) {
  return string2.substring(0, num);
}

console.log(buscador(string2, 5));

// **********     Solución tutor ejercicio 2     **********

const cutText = (stringR = "", length = undefined) => {
  !stringR
    ? console.warn("No ingresaste el texto")
    : length === undefined
    ? console.warn("No ingresaste la logitud para recortar el texto")
    : console.info(stringR.slice(0, length));
};

cutText("Hola Mundo", 6);
cutText();
cutText("Hola Mundo");
cutText("", 5);

// **********     Ejercicio 3     **********

console.log("**********     Ejercicio 3     **********");

let stringToArray = new String(
  "Hola mundo, soy una cadena de texto (string) que se conviritó en Array"
);

function convertidor(stringToArray, separador) {
  return stringToArray.split(separador);
}

console.log(convertidor(stringToArray, " "));

// **********     Solución tutor ejercicio 3     **********

const string2Array = (stringP = "", separador = undefined) => {
  !stringP
    ? console.warn("No ingresaste el texto de la cadena")
    : separador === undefined
    ? console.warn("No ingresaste el caracter separador")
    : console.info(stringP.split(separador));
};

string2Array("Hola mundo, soy una cadena de texto (string) que se conviritó en Array", " ");
string2Array("Mes,Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic", ",");
string2Array();
string2Array("Hola Mundo");
string2Array("", "-");

// **********     Ejercicio 4     **********

console.log("**********     Ejercicio 4     **********");

function repetidor(textR) {
  return textR.repeat(3);
}

console.log(repetidor("Hola Mundo "));

// **********     Solución tutor ejercicio 4     **********

const repeatText = (textRe = "", numRe = undefined) => {
  if (!textRe) return console.warn("No ingresaste el texto a repetir");
  if (numRe === undefined) console.warn("No ingresaste el número para repetir");
  if (numRe === 0) console.error("El número de veces no puede ser 0");
  if (Math.sign(numRe) === -1) console.warn("El número de veces no puede ser negativo");

  for (let i = 1; i <= numRe; i++) console.log(`${textRe}, ${i}`);
};

repeatText("Hola Mundo", 3);
repeatText("Hola Mundo", 0);
repeatText("Hola Mundo", -4);
repeatText("", -4);
repeatText("Hola Mundo");
*/

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */
/*
// **********     Ejercicio 5     **********

// Hay diferentes formas de invertir un texto en JS https://www.freecodecamp.org/espanol/news/tres-formas-de-invertir-una-cadena-en-javascript/

console.log("**********     Ejercicio 5     **********");

const invest = (investText) => {
  let invested = "";
  for (let i = investText.length - 1; i >= 0; i--) {
    invested += investText[i];
  }
  return invested;
};
console.info(invest("Hola"));

// **********     Solución tutor ejercicio 5     **********

const invest2 = (investText2) =>
  !investText2
    ? console.warn("No ingresaste una cadena de texto")
    : console.info(investText2.split("").reverse().join(""));

invest2("Hola Mundo");
invest2();

// **********     Ejercicio 6     **********
console.log("**********     Ejercicio 6     **********");

const countWord = (text, word) => {
  const regex = new RegExp(`\\b${word}\\b`, "ig");
  const found = text.match(regex);
  return found ? found.length : 0;
};

const text2 = "Hola mundo adiós mundo";
const word = "Mundo";
const result = countWord(text2, word);

console.info(`La palabra ${word} se repite ${result}`);

// **********     Solución con condicionales if ejercicio 6     **********

const textInString = (stringText, wordEv) => {
  if (!stringText) return console.warn("No ingresaste una cadena de texto");
  if (!wordEv) return console.warn("No ingresaste la palabra a buscar");
  const regex2 = new RegExp(`\\b${wordEv}\\b`, "ig");
  const found2 = stringText.match(regex2);
  return found2 ? found2.length : 0;
};

const stringText = "Hola mundo adiós mundo";
const wordEv = "Mundo";
const result2 = textInString("Hola mundo adión mundo", "mundo");

console.info(`La palabra ${wordEv} se repite ${result2}`);

// **********     Solución tutor ejercicio 6 (Solución con Bucle: While)     **********

const textToString = (stringText2, wordEv2) => {
  if (!stringText2) return console.warn("No ingresaste una cadena de texto");
  if (!wordEv2) return console.warn("No ingresaste la palabra a buscar");

  let i = 0,
    counter = 0;

  while (i !== -1) {
    i = stringText2.indexOf(wordEv2, i);
    if (i !== -1) {
      i++;
      counter++;
    }
  }
  return console.info(`La palabra ${wordEv2} se repite ${counter}`);
};

textToString("Hola mundo. Adiós, mundo", "mundo");

// **********     Ejercicio 7     **********

console.log("**********     Ejercicio 7     **********");

const validPalim = (validword) => {
  if (!validword) return console.warn("No ingresaste una palabra o frase");
  let conver = validword.replace(/\s+/g, "").toLowerCase();
  let inverW = conver.split("").reverse().join("");

  return conver === inverW
    ? console.info(`La palabra "${conver}" si es un palíndromo "${inverW}"`)
    : console.info(`La palabra "${conver}" no es palíndromo "${inverW}"`);
};

validPalim("A mama Roma le aviva el amor a mama");

// **********     Solución tutor ejercicio 7     **********

const palindromo = (word) => {
  if (!word) return console.warn("No ingresaste una palabra o frase");
  word = word.toLowerCase();
  let convert = word.split().reverse().join();

  return word === convert
    ? console.info(`La palabra "${word}" si es un palíndromo "${convert}"`)
    : console.info(`La palabra "${word}" no es palíndromo "${convert}"`);
};

palindromo("A mama Roma le aviva el amor a mama");

// **********     Ejercicio 8     **********

console.log("**********     Ejercicio 8     **********");

const delWord = (string = "") =>
  !string
    ? console.warn("No agregó ningún texto para eliminar")
    : console.info(string.replace(/,/g, ""));

delWord("Hola, voy, a elimnar, las, comas");

// **********     Solución tutor ejercicio 8     **********

const deletW = (paragraph = "", select = "") => {
  !paragraph
    ? console.warn("No ingresó ninguna frase")
    : !select
    ? console.warn("No ingresó patrón de caracteres para eliminar")
    : console.info(paragraph.replace(new RegExp(select, "ig"), ""));
};

deletW("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"); */

/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

/*
// **********     Ejercicio 9     **********
console.log("**********     Ejercicio 9     **********");

const numRandom = (limitMin = undefined, limitMax = undefined) => {
  if (!limitMin) console.warn("No ingresó el límite Mínimo o no es un caracter válido");
  if (!limitMax) console.warn("No ingresó el límite Máximo o no es un caracter válido");
  return console.info(Math.round(Math.random() * (limitMax - limitMin) + limitMin));
};

numRandom(501, 600);

// **********     Ejercicio 10     **********
console.log("**********     Ejercicio 10     **********");

const capicua = (num = "") => {
  if (!num) return console.warn("No ingresaste un número");
  if (typeof num !== "number") return console.error(`El valor ${num} ingresado, No es un número`);
  if (num.toString().length === 1) return console.warn("No puede ingresar números de 1 dígito");
  let strNum = num.toString();
  let converNum = strNum.split("").reverse().join("");

  return strNum === converNum
    ? console.info(`La palabra "${strNum}" si es un capicúa "${converNum}"`)
    : console.info(`La palabra "${strNum}" no es capicúa "${converNum}"`);
};

capicua(2002);

// **********     Ejercicio 11     **********
console.log("**********     Ejercicio 11     **********");

// Usando método iterativo
const factorial = (x = "") => {
  if (x === undefined) return console.warn("No ingresas un número");
  if (typeof x !== "number") return console.error(`El valor ${x} ingresado, No es un número`);
  if (x === 0) return console.error("El número no puede ser 0");
  if (Math.sign(x) === -1) return console.error("El número no puede ser negativo");
  if (x < 0) console.error(`El valor ${x} ingresado, No es un número positivo`);
  let result = 1;
  for (let i = x; i > 1; i--) {
    result *= i;
  }
  return console.info(`El factorial de ${x} es ${result}`);
};

factorial(5);

// Usando método recursivo

const factorial2 = (f) => {
  if (f < 0) console.warn("No se puede calclular el factorial de un número negativo");
  if (f === 0 || f === 1) return 1;
  return f * factorial2(f - 1);
};

console.info(factorial2(5));
*/

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */
/*
// **********     Ejercicio 12     **********
console.log("**********     Ejercicio 12     **********");

const PrimNum = (numP) => {
  if (numP < 2) return console.warn("No ingresaste un valor válido");
  if (typeof numP !== "number") return console.log(`El valor ${numP} ingresado no es un número`);
  if (numP === 0) return console.error("El número no puede ser 0");
  if (numP === 1) return console.error("El número no puede ser 1");
  if (Math.sign(numP) === -1) return console.error("El número no puede ser negativo");
  for (let i = 2; i <= Math.sqrt(numP); i++) {
    if (numP % i === 0) return console.warn(`Verificamos. ${numP} no es un número primo`);
  }
  return console.info(`Verificado. ${numP} es un número primo`);
};

PrimNum(7);

// **********     Ejercicio 13     **********
console.log("**********     Ejercicio 13     **********");

const numPar = (numPa = undefined) => {
  if (numPa === undefined) return console.warn("No ingresaste un valor válido");
  if (typeof numPa !== "number") return console.warn(`El valor ${numPa} ingresado no es un número`);
  if (Math.sign(numPa) === -1) return console.error("El número no puede ser negativo");
  return numPa % 2 === 0
    ? console.info(`${numPa} Es un número Par`)
    : console.info(`${numPa} Es un número Impar`);
};

numPar(2);
numPar(3);
numPar(4);
numPar(5);

// **********     Ejercicio 14     **********
console.log("**********     Ejercicio 14     **********");

const converTemp = (nTem = undefined, grade = undefined) => {
  if (nTem === undefined || grade === undefined)
    return console.warn("No hay valor para convertir. Ingresa uno");
  if (typeof nTem !== "number" || typeof grade !== "string")
    return console.warn("El valor ingresado no es un número o no es la unidad requerida (c o f)");
  if (grade.length !== 1) return console.warn("Valor de unidad no reconocido debe ingresar c o f");
  if (grade === "c") {
    return console.info(`${nTem}°C es ${Math.round((nTem * 9) / 5 + 32)}°F`);
  } else if (grade === "f") {
    return console.info(`${nTem}°F es ${Math.round(((nTem - 32) * 5) / 9)}°C`);
  } else {
    console.error("Grado desconocido. Ingresa 'c' para Celsius o 'f' para Fahrenheit");
  }
};

converTemp(0, "c"); */

/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

// **********     Ejercicio 15     **********
console.log("**********     Ejercicio 15     **********");

const converBin = (numToCon = undefined, datem = undefined) => {
  if (numToCon === undefined || datem === undefined) {
    return console.warn("No hay valor para convertir. Ingresa uno.");
  }
  if (typeof numToCon !== "number" && typeof numToCon !== "string") {
    return console.warn("El valor ingresado no es un número o una cadena binaria.");
  }
  if (typeof datem !== "string" || datem.length !== 1) {
    return console.warn("Valor de unidad no reconocido, debe ingresar 'B' o 'D'.");
  }

  if (datem === "B") {
    if (typeof numToCon === "string" && /^[01]+$/.test(numToCon)) {
      let decimal = parseInt(numToCon, 2);
      return console.info(`${numToCon} base 2 es igual a ${decimal} base 10`);
    } else {
      return console.error("Entrada no válida: debe ser una cadena binaria.");
    }
  }

  if (datem === "D") {
    if (typeof numToCon === "number" && numToCon >= 0 && Number.isInteger(numToCon)) {
      let binario = numToCon.toString(2);
      return console.info(`${numToCon} base 10 es igual a ${binario} base 2`);
    } else {
      return console.error("Número no válido: debe ser un entero no negativo.");
    }
  }

  return console.error(
    "Unidad no reconocida. Debe ser 'B' para binario a decimal o 'D' para decimal a binario."
  );
};

converBin("100", "B");
converBin(4, "D");

// **********     Ejercicio 16     **********
console.log("**********     Ejercicio 16     **********");

const discount = (price = undefined, prcnt = undefined) => {
  if (price === undefined || prcnt === undefined)
    return console.warn("No escribió ningún valor vuelva a intentar");
  if (typeof price !== "number" && typeof prcnt !== "number") {
    return console.warn("El valor ingresado no es un número");
  } else {
    let nwPrice = price * (1 - prcnt / 100);
    console.info(
      `El precio original del producto es $${price.toLocaleString(
        "es-CO"
      )}, con un descuento de ${prcnt}%. Ahora Pagas $${nwPrice.toLocaleString("es-CO")}`
    );
  }
};

discount(10000, 20);

// **********     Ejercicio 17     **********
console.log("**********     Ejercicio 17     **********");

const calDate = (year = undefined, month = undefined, day = undefined) => {
  if (year === undefined || month === undefined || day === undefined)
    console.warn("No escribió fecha válida");
  if (typeof year !== "number" && typeof year !== "number" && typeof day !== "number")
    console.error("Debe ingresar el formato de fecha Año/Mes/Día en números");
  if (Math.sign(year, month, day) === -1) return console.error("El número no puede ser negativo");
  let dateToCal = new Date(year, month, day);
  let actDate = new Date();
  let yearsTrans = actDate.getFullYear() - dateToCal.getFullYear();
  return console.info(
    `Del año ${dateToCal.getFullYear()} a el año actual ${actDate.getFullYear()} hay ${yearsTrans} años`
  );
};

calDate(1999, 7, 17);

/**/
