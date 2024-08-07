/* **********     Variables: var-let     **********
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
        console.log("variable Música antes del Bloque", musica2); */

/* **********     Constantes (const)     **********

        let a; // Permite declarar una variable vacía
        const PI = 3.1416;
        const nueve = 9;
        console.log(PI);

        a = "kenai";
        console.log(a);

        /* Objetos y arreglos

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
        console.log(colores); */

/* **********     Cadenas de Texto (Strings)     **********
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
          nombre.toUpperCase() // Mayúsculas,
          apellido.toLowerCase() // Minúsculas,
          lorem.includes("amet") // Encontrar una palabra,
          lorem.includes("Will") // Encontrar una palabra,
          lorem // String original,
          lorem.trim() // Quita espacios alrededor del texto,
          lorem.split(" ") // Generar un arreglo, para agregar un separador,
          lorem.split(",")
        ); */

/* **********     Template Strings     **********

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

        console.log(ul3); */

/* **********     Números (Number)     **********

        let an = 2;
        let b = new Number(1);
        let c = 7.19;
        let d = "5.6";

        console.log(a, b);
        console.log(c.toFixed(1)); // mostrar cierto número de decimales
        console.log(parseInt(c)); // Solo devuelve la parte entera
        console.log(parseFloat(c)); // mostrar decimales
        console.log(typeof c, typeof d); // mostrar que tipo de datos es una variable
        console.log(a + b); // Proceso de suma
        console.log(c + d); // Proceso de concatenación
        console.log(c + parseInt(d)); // Operación de suma con variable number y string
        console.log(c + parseFloat(d)); // Operación de suma con variable number y string

        /* **********     Booleans     **********

        let verdadero = true;
        let falso = false;
        let v = Boolean(true);
        let f = Boolean(false);

        console.log(verdadero, falso, v, f);
        console.log(typeof verdadero, typeof falso);

        console.log(0);
        console.log(-7);
        console.log("");
        console.log(" "); */

/* **********     undefined, null & NaN     **********
        //undefined indica que no se ha inicializado una variable y que el valor está ausente
        let indefinida;
        console.log(indefinida);

        //null es un valor especial que indica la ausencia de un valor
        let nulo = null;
        console.log(null);

        let noEsUnNumero = "hola" * 3.7;
        console.log(noEsUnNumero); */

/* **********     Funciones     **********

        // Función declarada

        function estoEsUnaFuncion() {
          console.log("Uno");
          console.log("Dos");
          console.log("Tres");
        }

        // Invocación de función
        estoEsUnaFuncion();
        estoEsUnaFuncion();
        estoEsUnaFuncion();

        function funcionDevuelveValor() {
          console.log("Uno");
          return 19;
          console.log("Dos");
          console.log("Tres");
          return "La función ha retornado una cadena de texto";
        }

        let valorFuncion = funcionDevuelveValor();

        console.log(valorFuncion);

        function saludar(nombre = "Desconocido", edad = 0) {
          // Parametros de una función (Valores que recibe porque los usará internamente para algo)
          console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`);
        }

        saludar("Kenai", 7);
        saludar();

        // Funciones declaradas vs funciones expresadas

        function funcionDeclarada() {
          console.log(
            "Esto es una función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada"
          );
        }

        funcionDeclarada();

        //Función anonima
        const funcionExpresada = function () {
          console.log(
            "Esto es una función expresada, es decir una función que se la ha asignado como valor una variable, si invocamos esta función antes de su definiciónm JavaScript no dirá..."
          );
        };

        funcionExpresada(); */

/* **********     Arreglos (Arrays)     **********

        const w = [];
        const z = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];
        console.log(w);
        console.log(z);
        console.log(z.length); // Devuelve el número de elementos
        console.log(z[2]); // Extraer valor específico
        console.log(z[0]);
        console.log(z[3]);
        console.log(z[3][2]); // Extraer valor de un array dentro de un array
        console.log(z[3][3][0]);

        const q = Array.of("X", "Y", "Z", 9, 8, 7);
        console.log(q);

        const r = Array(100).fill(false);
        console.log(r);

        const k = new Array();
        console.log(k);

        const s = new Array(1, 2, 3, true, false);
        console.log(s);

        const colors = ["Rojo", "Verde", "Azul"];
        console.log(colors);

        colors.push("Negro"); // Añade un elemento a lo último
        console.log(colors);

        colors.pop(); // Quita el último elementos
        console.log(colors);

        colors.forEach(function (el, index) {
          console.log(`<li id="${index}">${el}</li>`);
        }); */

/* **********     Objetos (Objects)     **********

        let e = new String("Hola");
        console.log(e);

        const l = {};
        console.log(l);

        const y = new Object();
        console.log(y);

        const user = {
          nombr: "Will",
          apellido: "Betancur",
          edad: 23,
          pasatiempos: ["Aprender", "Hacer ejercicio", "Fotografía", "Ciclismo"],
          soltero: false,
          contacto: {
            email: "correo@corre.com",
            instagram: "@usuario",
            movil: "+57(000)000-0000",
          },

          saluda: function () {
            console.log(`Hola`);
          },

          decirMiNombr: function () {
            console.log(
              `Hola, me llamo ${this.nombr} ${this.apellido} y tengo ${this.edad} años y me puedes seguir en instagram como ${this.contacto.instagram}`
            );
          },
        };

        console.log(user);
        console.log(user["apellido"]);
        console.log(user["nombr"]);
        console.log(user.nombr);
        console.log(user.apellido);
        console.log(user.edad);
        console.log(user.soltero);
        console.log(user.pasatiempos);
        console.log(user.pasatiempos[2]);
        console.log(user.contacto);
        console.log(user.contacto.instagram);

        user.saluda();
        user.decirMiNombr();

        console.log(Object.keys(user)); // Listar las llaves del objeto
        console.log(Object.values(user)); // Listar los valores de las llaves del objeto
        console.log(user.hasOwnProperty("nombr")); // Saber si un objeto tiene una propiedad
        console.log(user.hasOwnProperty("nacimiento")); */

/* **********     Tipos de Operadores     **********

        // Operadores Aritméticos

        let f = 5 + (5 - 10) * 3;
        let modulo = 5 % 2;

        console.log(f);
        console.log(modulo);

        // Operadores de comparación

        console.log(8 < 9);
        console.log(8 > 9);
        console.log(8 >= 9);
        console.log(8 <= 9);
        console.log(7 < 7);
        console.log(7 <= 7);

        console.log(7 == 7);
        console.log("7" == 7);
        console.log(0 == false);
        console.log(7 === 7);
        console.log("7" === 7);
        console.log(0 === false);

        // Operadores de incremento y decremento

        let i = 2;

        // console.log(i++);
        // console.log(++i);

        //i = i + 2;
        //i *= 3;
        //console.log(i);

        // Operador unario
        i++;
        i--;
        ++i;
        --i;
        console.log(i);

        // Operadores Lógicos

        console.log(!true);
        console.log(!false);
        console.log(9 === 9 || "9" === 9);
        console.log(9 === 9 && "9" === 9);
        console.log(9 === 9 && "9" === "9"); */

/* **********     Condicionales     **********

        let edad = 17;

        if (edad > 17) {
          console.log("Eres mayor de edad");
        } else {
          console.log("Eres menor de edad");
        }

        if (edad >= 18) {
          console.log("Eres mayor de edad");
        } else {
          console.log("Eres menor de edad");
        }

        if (edad < 18) {
          console.log("Eres menor de edad");
        } else {
          console.log("Eres mayor de edad");
        }

        if (edad <= 17) {
          console.log("Eres menor de edad");
        } else {
          console.log("Eres mayor de edad");
        }

        let hora = 2;
        if (hora >= 0 && hora <= 5) {
          console.log("Déjame dormir");
        } else if (hora >= 6 && hora <= 11) {
          console.log("Buenos días");
        } else if (hora >= 12 && hora <= 18) {
          console.log("Buenas tardes");
        } else {
          console.log("Buenas noches");
        }

        if (hora > 0 && hora < 6) {
          console.log("Déjame dormir");
        } else if (hora > 5 && hora < 12) {
          console.log("Buenos días");
        } else if (hora > 11 && hora < 19) {
          console.log("Buenas tardes");
        } else {
          console.log("Buenas noches");
        }

        let eresMayor = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
        console.log(eresMayor);

        let dia = 3;

        switch (dia) {
          case 0:
            console.log("Domingo");
            break;
          case 1:
            console.log("Lunes");
            break;
          case 2:
            console.log("Martes");
            break;
          case 3:
            console.log("Miercoles");
            break;
          case 4:
            console.log("Jueves");
            break;
          case 5:
            console.log("Viernes");
            break;
          case 6:
            console.log("Sábado");
            break;

          default:
            console.log("El día no existe");
            break;
        } */
/* **********     Ciclos/Bucles:Loops     **********

        let contador = 10;

        while (contador < 10) {
          console.log("While " + contador);
          contador++;
        }

        do {
          contador++;
          console.log("do While " + contador);
        } while (contador < 10);

        for (let i = 0; i < 10; i++) {
          console.log("for " + i);
        }

        let numeros = [10, 20, 30, 40, 50, 60, 80, 90];

        for (let i = 0; i < numeros.length; i++) {
          console.log(numeros[i]);
        }

        const w = {
          nombre: "Will",
          apellido: "Betancur",
          edad: 8,
        };

        for (const key in w) {
          console.log(key);
        }

        // Imprimir los valores

        for (const key in w) {
          console.log(`key: ${key}, Value: ${w[key]}`);
        }

        for (const element of numeros) {
          console.log(element);
        }

        let gh = "Hola mundo";

        for (const character of gh) {
          console.log(character);
        } */

/* **********     Estructura de control para Manejo de errores     **********

        try {
          console.log("En el Try se agrega el código a evaluar");
          noExiste;
        } catch (error) {
          console.log("Segundo mensaje en el try");
          console.log("Catch, captura cualquier error surgido o lanzado en el try");
          console.log(error);
        } finally {
          console.log("El bloque finally se ejecutará siempre al final de unbloque try-catch");
        }

        try {
          let numero = 100;
          if (isNaN(numero)) {
            throw new Error("El caracter introducido no es un número");
          }
          console.log(numero * numero);
        } catch (error) {
          console.log(`Se produjo el siguiente error: ${error}`);
        } finally {
        } */

/* **********     Break & Continue     **********

        const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

        for (let i = 0; i < numeros.length; i++) {
          if (i === 5) {
            break;
          }
          console.log(numeros[i]);
        }

        for (let i = 0; i < numeros.length; i++) {
          if (i === 7) {
            continue;
          }
          console.log(numeros[i]);
        } */

/* **********     Destructuración     **********

        const numeros = [1, 2, 3];

        // Sin destructuración
        let uno = numeros[0];
        dos = numeros[1];
        tres = numeros[2];

        console.log(uno, dos, tres);

        // con destructuración
        const [one, two, three] = numeros;
        console.log(one, two, three);

        const person = {
          nombre: "Gu",
          apellido: "ji",
          edad: 67,
        };

        const { nombre, apellido, edad } = person;

        console.log(nombre, apellido, edad); */

/* **********     Objetos literales     **********

        let nombre = "kEnai";
        edad = 7;

        const dog = {
          nombre: nombre,
          edad: edad,
          ladrar: function () {
            console.log("Wau Wau!!");
          },
        };

        console.log(dog);
        dog.ladrar();

        const perro = {
          nombre,
          edad,
          raza: "Criollo",
          ladrar() {
            console.log("Wau Wau!!");
          },
        };

        perro.ladrar(); */

/* **********     Parámetros REST & Spread Operator     **********

        function sumar(a, b, ...c) {
          let resultado = a + b;

          c.forEach(function (n) {
            resultado += n;
          });

          return resultado;
        }

        console.log(sumar(1, 2));
        console.log(sumar(1, 2, 3));
        console.log(sumar(1, 2, 3, 4));
        console.log(sumar(1, 2, 3, 4, 5));
        console.log(sumar(1, 2, 3, 4, 5, 6));
        console.log(sumar(1, 2, 3, 4, 5, 6, 7));

        // Spread Operator

        const arr1 = [1, 2, 3, 4, 5];
        arr2 = [6, 7, 8, 9, 0];

        console.log(arr1, arr2);

        const arr3 = [...arr1, ...arr2];

        console.log(arr3); */

/* **********     Arrows Functions     **********

        const saludo = () => console.log("Hola");
        saludo();

        const saludar = (nombre) => console.log(`Hola ${nombre}`);
        saludar("irma");

        const saluda = (nombr) => console.log(`Hola ${nombr}`);
        saluda("irma");

        const sumar = function (a, b) {
          return a + b;
        };

        console.log(sumar(8, 9));

        const suma = (f, x) => f + x;

        console.log(sumar(9, 9));

        const funcionDVLineas = () => {
          console.log("Uno");
          console.log("Dos");
          console.log("Tres");
        };

        funcionDVLineas();

        const numeros = [1, 2, 3, 4, 5];

        numeros.forEach((el, index) => console.log(`${el} esta en lo posición ${index}`));

        function dog() {
          console.log(this);
        }

        dog();

        const perro = {
          nombre: "Hachiko",
          ladrar() {
            console.log(this);
          },
        };

        perro.ladrar(); */

/* **********     Prototipos     ********** 

      const animal = {
        nombre: "Snoopy",
        sonar() {
          console.log("Hago sonidos, porque estoy vivo");
        },
      };

      const animal2 = {
        nombre: "Lola Bunny",
        sonar() {
          console.log("Hago sonidos, porque estoy vivo");
        },
      };

      console.log(animal);
      console.log(animal2);

      // Función constructora

      function Animales(nombre, genero) {
        //Atributos
        this.nombre = nombre;
        this.genero = genero;
      }

      //Métodos agregados al prototipo de la función consturctora
      Animales.prototype.sonar = function () {
        console.log("Hago sonidos, porque estoy vivo");
      };

      Animales.prototype.saludar = function () {
        console.log(`Hola me llamo ${this.nombre}`);
      };

      const snoopy = new Animales("Snoopy", "Macho");
      lolaBunny = new Animales("Lola Bunny", "Hembra");
      susy = new Animales("Susy", "Hembra");
      hachiko = new Animales("Hachiko", "Macho");

      console.log(snoopy);
      console.log(lolaBunny);
      console.log(susy);
      console.log(hachiko);

      snoopy.sonar();
      snoopy.saludar();
      lolaBunny.sonar();
      lolaBunny.saludar(); */

/* **********     Herencia Prototipica     ********** 

      function Animales(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
      }

      Animales.prototype.sonar = function () {
        console.log("Hago sonidos, porque estoy vivo");
      };

      Animales.prototype.saludar = function () {
        console.log(`Hola me llamo ${this.nombre}`);
      };

      function Perro(nombre, genero, tamanio) {
        this.super = Animales;
        this.super(nombre, genero);
        this.tamanio = tamanio;
      }

      // Perro está heredando de Animales
      Perro.prototype = new Animales();
      Perro.prototype.constructor = Perro;

      // Sobreescritura de métodos del prototipo padre en el hijo
      Perro.prototype.sonar = function () {
        console.log("Soy un perro y mi sonido es un ladrido");
      };

      Perro.prototype.ladrar = function () {
        console.log("Wau Wau!");
      };

      const snoopy = new Perro("Snoopy", "Macho", "Mediano");
      lolaBunny = new Animales("Lola Bunny", "Hembra");
      susy = new Animales("Susy", "Hembra");
      hachiko = new Animales("Hachiko", "Macho");

      console.log(snoopy);
      console.log(lolaBunny);
      console.log(susy);
      console.log(hachiko);

      snoopy.sonar();
      snoopy.saludar();
      snoopy.ladrar();
      lolaBunny.sonar();
      lolaBunny.saludar(); */

/* **********     Clases y herencia     ********** 

      class Animales {
        constructor(nombre, genero) {
          this.nombre = nombre;
          this.genero = genero;
        }

        sonar() {
          console.log("Hago sonidos, porque estoy vivo");
        }

        saludar() {
          console.log(`Hola me llamo ${this.nombre}`);
        }
      }

      class Perro extends Animales {
        constructor(nombre, genero, tamanio) {
          // Manda a llamar el constructor de la clase padre
          super(nombre, genero);
          this.tamanio = tamanio;
        }
        sonar() {
          console.log("Soy un perro y mi sonido es un ladrido");
        }
        ladrar() {
          console.log("Wau Wau!!!");
        }
      }

      const mimi = new Animales("Mimi", "Hembra"),
        scooby = new Perro("Scooby", "Macho", "Gigante");

      console.log(mimi);
      mimi.saludar();
      mimi.sonar();
      console.log(scooby);
      scooby.saludar();
      scooby.sonar();
      scooby.ladrar(); */

/* **********     Métodos estáticos. getters y setters     ********** 

      class Animales {
        constructor(nombre, genero) {
          this.nombre = nombre;
          this.genero = genero;
        }

        sonar() {
          console.log("Hago sonidos, porque estoy vivo");
        }

        saludar() {
          console.log(`Hola me llamo ${this.nombre}`);
        }
      }

      class Perro extends Animales {
        constructor(nombre, genero, tamanio) {
          super(nombre, genero);
          this.tamanio = tamanio;
          this.raza = null;
        }
        sonar() {
          console.log("Soy un perro y mi sonido es un ladrido");
        }
        ladrar() {
          console.log("Wau Wau!!!");
        }
        // Método estático
        static queEres() {
          console.log(
            "Los perros sin animales mamiferos que pertenecen a la familia de los caninos. Somos considerados los mejores amigos del hombre."
          );
        }

        // Getters y setters (Métodos obtenedores)
        get getRaza() {
          return this.raza;
        }

        set setRaza(raza) {
          this.raza = raza;
        }
      }

      const mimi = new Animales("Mimi", "Hembra"),
        scooby = new Perro("Scooby", "Macho", "Gigante");

      console.log(mimi);
      mimi.saludar();
      mimi.sonar();
      console.log(scooby);
      Perro.queEres();
      scooby.saludar();
      scooby.sonar();
      scooby.ladrar();
      console.log(scooby.getRaza);
      scooby.setRaza = "Gran Danés";
      console.log(scooby.getRaza); */

/* **********     Objeto console     ********** 

      console.log(console);
      console.error("Esto es un error");
      console.warn("Esto es un aviso");
      console.info("Esto es un mensaje informativo");
      console.log("Registro de lo que ha pasado en la aplicación");

      let nombre = "Wi",
        apellido = "Bt",
        edad = 4;

      console.log(nombre);
      console.log(apellido);
      console.log(edad);
      console.log(nombre, apellido, edad);
      console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
      console.log(`Hola mi nombre es %s %s y tengo %d años`, nombre, apellido, edad);
      console.clear();
      console.log(window);
      console.log(document);
      console.dir(window);
      console.dir(document);
      console.clear();

      console.group("Esto es un grupo");
      console.log("Elemento 1");
      console.log("Elemento 2");
      console.log("Elemento 3");
      console.log("Elemento 4");
      console.log("Elemento 5");
      console.groupEnd();

      console.groupCollapsed("Esto es un grupo");
      console.log("Elemento 1");
      console.log("Elemento 2");
      console.log("Elemento 3");
      console.log("Elemento 4");
      console.log("Elemento 5");
      console.groupEnd();
      console.clear();

      console.log(console);
      console.table(Object.entries(console).sort());

      const numeros = [1, 2, 3, 4, 5],
        vocales = ["a", "e", "i", "o", "u"];

      console.table(numeros);
      console.table(vocales);

      const perro = {
        nombre: "Bunny",
        raza: "Boxer",
        color: "Café",
      };

      console.table(perro);

      console.clear();

      console.time("Cuanto tiempo tarde mi código");
      const arreglo = Array(1000000);

      for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = i;
      }

      console.timeEnd("Cuanto tiempo tarde mi código");

      // console.log(arreglo);

      console.clear();

      for (let i = 0; i < 100; i++) {
        console.count("Código For");
        console.log(i);
      }

      console.clear();

      let x = 3,
        y = 2,
        pruebaXY = "Se espera que X siempre sea menor que y";

      console.assert(x < y, [x, y, pruebaXY]); */

/* **********     Objeto date     ********** 

      console.log(Date());

      let fecha = new Date();
      console.log(fecha);
      //Día del mes
      console.log(fecha.getDate());
      //Día de la semana D L M Mi J V S -> 0 1 2 3 4 5 6
      console.log(fecha.getDay());
      // Mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
      console.log(fecha.getMonth());
      // Year
      console.log(fecha.getFullYear());
      console.log(fecha.getHours());
      console.log(fecha.getMinutes());
      console.log(fecha.getSeconds());
      console.log(fecha.getMilliseconds());
      console.log(fecha.toString());
      console.log(fecha.toDateString());
      console.log(fecha.toLocaleString());
      console.log(fecha.toLocaleDateString());
      console.log(fecha.toLocaleTimeString());
      console.log(fecha.getTimezoneOffset());
      console.log(fecha.getUTCDate());
      console.log(fecha.getUTCHours());
      console.log(fecha.getUTCMonth());
      console.log(Date.now());
      let cumple = new Date(1984, 4, 23);
      console.log(cumple); */

/* **********     Objeto Math     ********** 

      console.log(Math);
      console.log(Math.PI);
      console.log(Math.abs(-7.8)); // Valor absoluto de un número
      console.log(Math.ceil(7.2)); // Redondea el número
      console.log(Math.floor(7.8)); // Busca el número entero menor
      console.log(Math.round(7.49));
      console.log(Math.sqrt(81)); // Sacar la raiz cuadrada de un número
      console.log(Math.pow(2, 5)); // Elevar potencias
      console.log(Math.sign(-0.3)); // Indicador si el número es negativo, positivo o 0
      console.log(Math.random());
      console.log(Math.random() * 1000);
      console.log(Math.round(Math.random() * 1000)); */

/* **********     Operador de Cortocircuito     ********** 

      //Cortocircuito OR

      function saludar(nombre = "Desconocido") {
        nombre = nombre || "Desconocido";
        console.log(`Hola ${nombre}`);
      }

      saludar("W");
      saludar();

      console.log("Cadena" || "Valor de la derecha");
      console.log(19 || "Valor de la derecha");
      console.log(true || "Valor de la derecha");
      console.log([] || "Valor de la derecha");
      console.log({} || "Valor de la derecha");
      console.log(false || "Valor de la derecha");
      console.log(null || "Valor de la derecha");
      console.log(undefined || "Valor de la derecha");
      console.log("" || "Valor de la derecha");
      console.log(-2 || "Valor de la derecha");
      console.log(0 || "Valor de la derecha");

      //Cortocircuito NAD

      console.log("Cadena" && "Valor de la derecha");
      console.log(19 && "Valor de la derecha");
      console.log(true && "Valor de la derecha");
      console.log([] && "Valor de la derecha");
      console.log({} && "Valor de la derecha");
      console.log(false && "Valor de la derecha");
      console.log(null && "Valor de la derecha");
      console.log(undefined && "Valor de la derecha");
      console.log("" && "Valor de la derecha");
      console.log(-2 && "Valor de la derecha");
      console.log(0 && "Valor de la derecha"); */

/* **********     Alert, confirm y prompt     ********** 

      console.log(window);

      //window.alert("Esto es una alerta");
      //window.confirm("Esto es una confirmación");
      //window.prompt("Esto es un aviso");

      let alerta = alert("Esto es una alerta"),
        confirmacion = confirm("Esto es una Confirmación"),
        aviso = prompt("Esto es un aviso");

      console.log(alerta);
      console.log(confirmacion);
      console.log(aviso); */

/* **********     Expresiones regulares     **********

      let paragraph =
        "Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza clsica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, viene de una linea en la sección 1.10.32";

      //let expReg = new RegExp("lorem", "ig");
      //console.log(expReg.test(paragraph));
      //console.log(expReg.exec(paragraph));

      let expReg2 = /lorem{1}/gi;
      console.log(expReg2.test(paragraph));
      console.log(expReg2.exec(paragraph)); */

/* **********     Funciones anonimas autoejecutables     ********** 

      (function () {
        console.log("Mi primer IIFE");
      })();

      (function (d, w, c) {
        console.log("Mi segunda IIFE");
        console.log(d);
        console.log(w);
        c.log("Este es un console.log");
      })(document, window, console);

      // Formas de escribir las IIFE

      //Clásica
      (function () {
        console.log("Versión Clásica");
      })();

      //La Crockford (JavaScript The God Parts)
      (function () {
        console.log("Versión Crockford");
      })();

      //Unaria
      +(function () {
        console.log("Versión Unaria");
      })();

      //Facebook
      !(function () {
        console.log("Versión Facebook");
      })(); */
