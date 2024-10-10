// Repaso de Ciclo y Sentencias de Control
//Estilización de los mensajes de salida

const bg = "linear-gradient(11deg, rgba(0,199,36,1) 0%, rgba(129,255,26,1) 33%, rgba(191,255,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las Salidas a Consola
console.warn("Práctica 07: Arreglos en Java Script")

console.log("%c1.- Condicionales Si/Entonces ... (IF)", style_console);
//Le indica al programa que hacer o que no en vase a una prueba lógica de verdadero  o falso
let fechaActual = new Date();
//let fechaActual = new Date(2024,7, 5); // 0 representa enero
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);
// y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleString('es-MX',
    {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });
console.log(`en formato local (México): ${fechaLocalMX}`);
// Si es antes de las doce saluda con un buenos días
if (fechaActual.getHours() < 12)
    console.log(`Buenos días, hoy es: ${fechaLocalMX}`);
// Existe un extensor de la sentencia if(Sí) que es else (en caso contrario)
if (fechaActual.getMonth() <= 6)
    console.log(`Estas en la primera mitad del año.`);
else
    console.log(`Estas en la segunda mitad del año.`);

// Que pasa si la validación tiene varias operaciones
const anio = fechaActual.getFullYear();
let inicioPrimavera = new Date(anio, 2, 21);
let inicioVerano = new Date(anio, 5, 21);
let inicioOtonio = new Date(anio, 8, 23);
let inicioInvierno = new Date(anio, 11, 21);
let estacion;
let horarioVerano = false;
if (fechaActual >= inicioPrimavera && fechaActual < inicioVerano) {
    console.log("Estamos en PRIMAVERA...")
    console.log("Inicia la floración de muchas plantas...")
    console.log("Los días son más largos y las noches más cortas...")
    console.log("Muchos animales despiertan de la hibernación... ")
    console.log()
    estación = "Primavera"
    horarioVerano = "True"
}
else if (fechaActual >= inicioVerano && fechaActual < inicioOtonio) {
    console.log("Estamos en Verano...")
    console.log("En esta temporada los abundan los dias de Soleados y Calurosos...")
    console.log("En esta temporada el índice de turismo vacacional sube ...")
    console.log("Mucha gente busca realizar actividades al aire libre ... ")
    console.log()
    estación = "Verano"
    horarioVerano = "True"
}
else if (fechaActual >= inicioOtonio && fechaActual < inicioInvierno) {
    console.log("Estamos en Otoño...")
    console.log("Los árboles comienzan a cambiar de follaje...")
    console.log("Se registrarán temperaturas más templadas  ...")
    console.log("Los animales comienzan la recolección de alimentosy preparan sus espacios para la hibernación e incluso algunas aves migran.  ")
    console.log()
    estación = "Otoño"
    horarioVerano = "false"
}
else {
    console.log("Estamos en Invierno...")
    console.log("En esta temporada los dias son más cortos y las noches más largas...")
    console.log("En algunas regiones suele nevar ...")
    console.log("Mucha gente busca realizar actividades al aire libre ... ")
    console.log()
    estación = "Invierno"
    horarioVerano = "True"
}


console.log("%c2.- Operador Ternario (Validacion ? cumple : no_cumple)", style_console);
// En java script existe una operacion simplficada que valida si una condicion se cumple o no y que hacer en ada caso 
let edadPersona = 18;
const mayoriaEdadMX = 18;
const mayoriaEdadUS = 21;

// Usando solo una línea para verificar la mayoría de edad
console.log(((edad) => edad >= 18 ? "Eres mayor de edad." : "No eres mayor de edad.")(edadPersona));

// Función para verificar la mayoría de edad
const verificarEdad = (edadPersona) =>
    edadPersona >= 18 ? "Eres mayor de edad." : "No eres mayor de edad.";

console.log("Evaluando la mayoría de edad de una persona:");
console.log(verificarEdad(20)); // Ejemplo para 20 años
console.log(verificarEdad(16)); // Ejemplo para 16 años

// Función para evaluar la mayoría de edad considerando el país
let evaluarMayoriaEdad = (edad, pais) => 
    (edad >= (pais === "MX" ? mayoriaEdadMX : mayoriaEdadUS)) 
    ? `En el país ${pais} eres mayor de edad` 
    : `En ${pais} NO eres mayor de edad`;

console.log("Evaluando la mayoría de edad en México:");
console.log(evaluarMayoriaEdad(edadPersona, "MX")); // Para 18 años en México

console.log("Evaluando la mayoría de edad en Estados Unidos:");
console.log(evaluarMayoriaEdad(edadPersona, "US")); // Para 18 años en EE. UU.


console.log("%c3.- Switch - CASE (Eleccion por valor definido",style_console)

//calculando tu generacion en base a tu edad 

let anioNacimiento=2003;

let asingaGeneraticion = (anioNacimiento)=>{
    switch(true)
{
    case (anioNacimiento<1968 ):
    return"Baby Boomers";

    case (anioNacimiento>1968 && anioNacimiento<=1980):
    return"Generation X";

    case (anioNacimiento>1980 && anioNacimiento<=1994):
    return"Milenials";

    case (anioNacimiento>1994 && anioNacimiento<=2010):
    return"Generation Z";

    case (anioNacimiento>2010 && anioNacimiento<=2024):
    return"Generation Alfa";
}
}

console.log(`Dado que nacio en el año 2003 soy de la: ${asingaGeneraticion(2003)} `);

console.log("%c4.- Manejo de excepciones (Try - Catch))",style_console)
//En algunbos ocaciones existiran que no son culpa del programa, si no del usuario la red, el si o incluso de un middleware, pero sin duda debemos controlar para evitar las fallas de ejecucion.

console.log("Intentamos ddividir: 0/10 el resulatado es ")
try{
    let result= 0/10;
    console.log(result);
}
catch{
    console.log("Ocurrio un error: " + error.message);

}
console.log("Intentamos ddividir: 10/0 el resulatado es ")

try{
    let result = 10/0; //dividir un entero entre 0 
    console.log(result)
}
catch (error)
{
    console.log("Ocurrio un error: " + error.message);
}

console.log("Intentamos dividir : a/10 el resultado es: ")


try{  //intenta
    let result = "a"/0; //dividir una letra entre 0 
    console.log(result)
}
catch (error)
{
    console.log("Ocurrio un error: " + error.message);
}
console.log("Intentamos dividir : la variable  a/10 el resultado es: ")


try{  //intenta
    let result = a/10; //dividir una letra entre 0 
    console.log(result)
}
catch (error)
{
    console.log("Ocurrio un error: " + error.message);
}
console.log(    )




console.log("%c5.- Control de ciclos (BREAK / CONTINUA))",style_console)
// En algunos ocasiones sera importante detener un ciclo de manera abrupta para controlar casos especiales en un ciclo

console.log("Vamos a contar del 1 al 10...")
for(let num = 1; num<=10; num++){
    if(num==11)
        break;
    else 
        console.log(num);
}



console.log("Ahora necesitamos que si llega al 7 pare de contar... suponiendo que solo por hoy es de mala suerte")
for(let i=1; i<10; i++) {
    if(i==7){
        break;
    }else{
        console.log(i);
    }
} 

console.log("Ahora necesitamos que si llegas al 7 te saltes ese número y continúes");

for (let num = 1; num <= 10; num++) {
    if (num === 7) {
        continue; // Salta el número 7 y continúa con el siguiente
    } else {
        console.log(num);
    }
}

console.log("%c6.- Ciclo Iterativo (FOR)", style_console);

// Recorre de manera iterativa (i), de incremental o decremental
console.log("Los días de la semana en orden ascendente son:");
let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

for (let i = 0; i < dias.length; i++) {
    console.log(dias[i]);
}

console.log("Ahora vamos a imprimir los meses en orden descendente...");
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
for (let i = meses.length - 1; i >= 0; i--) {
    console.log(meses[i]);
}

console.log("%c7.- Ciclo Condicionales - (While)", style_console);
// Estos ciclos (BUCKLE) dependen de una condición para continuar ejecutándose

let finDeSemana = false;
let j = 0;

while (j < dias.length ) {
    let mensaje = " "; // Inicializamos mensaje aquí

    switch (j) {
        case 0:
            finDeSemana = true;
            mensaje = "Mormingo, zzzzzzzzzzz";
            break;
        case 1:
            finDeSemana = false;
            mensaje = "San lunes a chambiar";
            break;
        case 2:
            finDeSemana = false;
            mensaje = "Segundo día de chamba a darle";
            break;
        case 3:
            finDeSemana = false;
            mensaje = "Ombligo de semana!!...";
            break;
        case 4:
            finDeSemana = false;
            mensaje = "Es hoy... es hoy...";
            break;
        case 5:
            finDeSemana = false;
            mensaje = "Es hoy... es hoy... >.> <.<";
            break;
        case 6:
            finDeSemana = true;
            mensaje = "Sabadrink ||";
            break;
    }


    if(finDeSemana){
        console.log(`Día ${dias[j]}`);
        console.log(`Mensaje del día: ${mensaje}`);
    }j++;

}





