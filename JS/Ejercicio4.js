// repaso de arreglos 

//personalizacion de las salidas a consola
console.warn("Practica 06: Arreglos en JavaScript")

const bg = "linear-gradient(11deg, rgb(2,0,36) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console =`background:${bg}; color:green; border-radius:6px; padding:4px; font-size:1.0rem;`;

//Declaracion de Arreglos
// para declarar un arreglo (array) de datos en javaSCript basta con agregar [], y dentro los datos que contendra el arreglo

const mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto ", "Septiembre", "Octubre" , "Noviembre", "Diciembre"]

console.log("%c1.- Declaracion de un Arreglo(ARRAY)", style_console);

console.log(mesesAnio);
console.table(mesesAnio);

//Acceder a los valores de un arreglo de datos para acceder al valor solo basta enviarla posicion de dato que queremos dentro de los limites establescidos, siendo el limite inferior 8 y  y el superior tamaño -1
console.log("%c2.- Leer o recuperar los datos de un Arreglo", style_console);
console.log(`El primer mes del año es: ${mesesAnio[0]}`)
console.log(`El ultimo mes del año es: ${mesesAnio[mesesAnio.length]}`)
//No se pueden acceder a elemento con posiciones o superiores al tamaño del 


console.log(`El mes del año en la posicion -1 es: ${mesesAnio[-1]}`) 
console.log(`El mes treceavo del año del mes es: ${mesesAnio[12]}`)
console.log(`¿Que tipo de dato es un arreglo?: ${typeof[mesesAnio]}`)

//Al ser JS UN LENGUAJE debilmente tipado podemos crear arreglos mixtos de tipo de datos.

let arregloMixto = [
    "String",
    5 , 
    45.65 ,
    -200, 
    -12546,
    Symbol("Mar"),
    "Z", 
    false, 
    BigIntValue = BigInt(12325456578912),
    true, 
    {latitud: "20° 10` 18\n", longitud: "89°", altitud: 796},
    saludar=null
];
// mostramos el contenido del objeto
console.log(arregloMixto)
console.table(arregloMixto)
console.log(typeof(arregloMixto))


console.log(`Verificamos los tipos de datos de los elementos del arreglo`)
console.log(`El dato en la posicion [0]=  ${arregloMixto[0]} y es de tipo  ${typeof(arregloMixto[0])}`)
console.log(`El dato en la posicion [1]=  ${arregloMixto[1]} y es de tipo  ${typeof(arregloMixto[1])}`)
console.log(`El dato en la posicion [2]=  ${arregloMixto[2]} y es de tipo  ${typeof(arregloMixto[2])}`)
console.log(`El dato en la posicion [3]=  ${arregloMixto[2]} y es de tipo  ${typeof(arregloMixto[3])}`)
console.log(`El dato en la posicion [4]=  ${arregloMixto[4]} y es de tipo  ${typeof(arregloMixto[4])}`)
console.log(`El dato en la posición [5] = ${arregloMixto[5].toString()} y es de tipo ${typeof arregloMixto[5]}`);
console.log(`El dato en la posicion [6]=  ${arregloMixto[6]} y es de tipo  ${typeof(arregloMixto[6])}`)
console.log(`El dato en la posicion [7]=  ${arregloMixto[7]} y es de tipo  ${typeof(arregloMixto[7])}`)
console.log(`El dato en la posicion [8]=  ${arregloMixto[8]} y es de tipo  ${typeof(arregloMixto[8])}`)
console.log(`El dato en la posicion [9]=  ${arregloMixto[9]} y es de tipo  ${typeof(arregloMixto[9])}`)
console.log(`El dato en la posicion [10]=  ${arregloMixto[10]} y es de tipo  ${typeof(arregloMixto[10])}`)
console.log(`El dato en la posicion [11]=  ${arregloMixto[11]} y es de tipo  ${typeof(arregloMixto[11])}`)

console.log("%c3.- Arreglos multidimensionales (Matrices) ",style_console)
// una matriz es una estrucutura multidimensional (Tabla) de n columnas y/o m filas

// Matriz regular
let matriz = [[1, 2, 3, 4], ['a', 'b', 'c', 'd', 'e']];
console.log(matriz);
console.table(matriz);

// Matriz irregular
const matrizIrregular = [["Juan", "Pedro", "María", "Ínes"], [true, false, null], [9.2]];
console.log(matrizIrregular);
console.table(matrizIrregular);

// Leyendo la información de la matriz regular
console.log("Leyendo las propiedades de la matriz regular");
console.log(`El dato en la posición [0] = ${matriz[0].toString()} y es de tipo ${typeof(matriz[0])}`); // Matriz regular
console.log(`El dato en la posición [1] = ${matriz[1].toString()} y es de tipo ${typeof(matriz[1])}`); // Matriz regular

// Leyendo la información de la matriz irregular
console.log("Leyendo las propiedades de la matriz irregular");

// Accediendo a los elementos específicos
console.log(`El dato en la posición [0][0] = ${matrizIrregular[0][0]} y es de tipo ${typeof(matrizIrregular[0][0])}`); // "Juan"
console.log(`El dato en la posición [0][1] = ${matrizIrregular[0][1]} y es de tipo ${typeof(matrizIrregular[0][1])}`); // "Pedro"
console.log(`El dato en la posición [0][2] = ${matrizIrregular[0][2]} y es de tipo ${typeof(matrizIrregular[0][2])}`); // "Maris"
console.log(`El dato en la posición [0][3] = ${matrizIrregular[0][3]} y es de tipo ${typeof(matrizIrregular[0][3])}`); // "Ines"

console.log(`El dato en la posición [1][0] = ${matrizIrregular[1][0]} y es de tipo ${typeof(matrizIrregular[1][0])}`); // true
console.log(`El dato en la posición [1][1] = ${matrizIrregular[1][1]} y es de tipo ${typeof(matrizIrregular[1][1])}`); // false
console.log(`El dato en la posición [1][2] = ${matrizIrregular[1][2]} y es de tipo ${typeof(matrizIrregular[1][2])}`); // null

console.log(`El dato en la posición [2][0] = ${matrizIrregular[2][0]} y es de tipo ${typeof(matrizIrregular[2][0])}`); // 9.2

//funciones y metodos de arreglos
//los metodos de un objeto siempre son invocados usando un . y al termino se delimitan los parametros entre (), en caso de que no lleve (), no es un metodo si no una propiedad

console.log("%c4.- Funiones o Metodos de los arreglos ",style_console)

console.log( "¿Como saber cual es el tamaño de un arreglo?")
console.log(`mesesAnio es un arreglo de tamaño ${mesesAnio.length} `)
console.log(`arregloMixto  es un arreglo de tamaño: ${matriz.length}` )
console.log(`mmmmm, eso me da el el tamaño de numero de filas pero como saber el numero de columnas `)
console.log(`La matriz es  regular tiene un numero de ${matriz[0].length}`)
console.log(" Y para los irregulares?")
// Para saber la dimencion de una matriz irregular podemos hacer el uso del ciclo

console.log(`La longuitud de la fila 0 es : `)
console.log(`La longuitud de la fila 1 es :`)
console.log(`La longuitud de la fila 2 es :`)

console.log("%c5.- Agregar un nuevo elemento a un arreglo push", style_console);

let estudiantes =["Angel Rufino", "Idai Vargas", "Daniel Bravo", "Esther Gonzalez", "Ailton Artiaga"]
console.log("Los elementos actuales del arreglo son: ")
console.table(estudiantes)
console.log("Agregamos a un nuevo estudiante llamado:  Abril Guzman")
estudiantes.push("Abril Guzman")//Nota: La funcion push siempre agrega el elemento hasta el final en la ultima posición
console.log("Despues de agregarla los elementos del arreglo son: ")
console.table(estudiantes)

console.log("`Que pasa con los mixtos?")
console.log("El arreglo mixto siempre tiene los siguientes elementos: ")
console.table(arregloMixto);
console.log("Agregamos la palabra: \"Hola\", como nuevo elemento")
console.log("Y tambien agregamos el numero -3128817875487448415.23507518864, siendo este un BigInt")
console.log("Despues de esta dos operaciones el arreglo queda con los siguientes elementos: ")
console.table(arregloMixto)

console.log("%c6.- Agregar un nuevo elemento a un arreglo (UNSHIFT) en la posición inicial", style_console);
console.table(estudiantes)
console.log("Ahora agregamos a Abishai Flores, al comienzo del arreglo")
estudiantes.unshift("Abishai Flores")
console.log("La lista actual es: ")
console.table(estudiantes)

console.log("%c7.- Eliminar elementos de un arreglo en la ultima popsicion (POP)", style_console);
console.log("El arreglo tiene los siguientes elementos")
console.table(estudiantes)
console.log("Para este caso eliminaremos a Abril Guzman,  een la ultima posición")
estudiantes.pop();
console.log("Despues de eliminar el elemento el arreglo quedo de la siguiente manera")
console.table(estudiantes)

console.log("%c8.- Eliminar elementos de un arreglo en la ultima popsicion (SHIFT)", style_console);
console.log("El arreglo tiene los siguientes elementos")
console.table(estudiantes)
console.log("Para este caso eliminaremos a Abishai Flores, en la ultima posición")
estudiantes.shift();
console.log("Despues de eliminar el elemento el arreglo quedo de la siguiente manera")
console.table(estudiantes)



console.log("%c9.- Dividir un arreglo en un arreglo nuevo con posiciones definidas (SPLICE)", style_console);
console.log("El arreglo arreglo original tiene los elementos: ")
console.table(estudiantes)
console.log("Dividir el arreglo en uno nuevo eliminando ciertos elementos en base a su posicion")
//Cuando la funcion splice recibe solo un parametro eleiminara los elementos de esta posicion en adelante
estudiantes.splice(2);
console.table(estudiantes)
//Cuando la funcion splice recibe 2 parametros eliminara todos los elementos que no estan en ese rango
estudiantes.push("Zyanya Zacatenco")
estudiantes.push("Tania Ibarra")
estudiantes.push("Juvenal Viveros")
estudiantes.push("Marcos Rios")
estudiantes.push("Jonathan Baldemar")
console.log("Se han agregado 5 nuevos estudiantes, por lo cual el arreglo es: ")
console.table(estudiantes)
console.log("Ahora ya tenemos los elementos sufuicientes para aplicar el metodo splice con dos parametros que seran 3,5")
estudiantes.splice(3,5)
console.log("El resultado es: ")
console.table(estudiantes)

//Splice sirve tambien para insertar elementos en psosiciones especificas,  ahora necesitamos insertar a : "Antonio Dolores" entre "Angel Rufino"  "Idai Vargas"
console.log("Ahora vamos a insertar a \"Antonio Dolores\" en los elementos de la posicion 0 y 1")
estudiantes.splice(1,0 , "Antonio Dolores");
console.log("Resultando en: ")
console.table(estudiantes);

//Tambien splice sirve para  insertar elementos por otros, en este caso reemplazaremos a angel rufino por "Brandom Leon"

console.log("Ahora vamos a reemplazar el elemento \"Angel Rufino\" en los elementos de la posicion por \"Brandom Leon\"")
estudiantes.splice(0,1, "Brandom Leon");
console.log("Resultado en: ")
console.table(estudiantes);

console.log("%c10.- Metodos para la manipulación de arreglos INMUTABLES", style_console);

let signosZodiacales = ["Aries", "Tauro", "Geminis", "Cancer", "Leo", "Virgo", "libra", "Escorpio",  "Sagitario", "Capricornio", "Acuario", "Piscis"]

// Destructuracion de arreglos

let [signo1,, signo3,,,, signo7,,,,] = signosZodiacales
console.log(`El primer signo Zodiacal es: ${signo1}`)
console.log(`El segundo signo Zodiacal es: ${signo3}`)
//consol.log(`El cuarto signo Zodiacal es: ${Signo4}`)
console.log(`El tercer signo Zodiacal es: ${signo7}`)

//Congelamos el arreglo volviendolo INMUTABLES;
Object.freeze(signosZodiacales)