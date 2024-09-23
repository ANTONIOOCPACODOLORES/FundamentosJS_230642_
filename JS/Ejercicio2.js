//1.- Undifined diferente de (null)
console.warn("--- Tipo de Dato UNDEFIEND");
let cliente;
console.log(`El cliente es ${cliente}`); // ALT+96 PARA 96 ``
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente= "Antonio Dolores";
console.log(`El cliente es ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente=230733
console.log(`El cliente es ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

//Undefined

//2 Bollean

console.warn("--Tipo de dato: BOOLEAN( Boleano- True/False")
let esPremium="No lo sé";
console.log(`Es el cliente Premium ${esPremium}`)
console.log(`El tipo de dato ede la variable esPremium es:  ${typeof(esPremium)}`)
console.log(`Asignado el valor \"true" a la variable.`) 
esPremium=true
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`)
console.log(`¿Es el cliente Premium? : ${esPremium}`)
console .log("Cambiando el valor de esPremium a false")
esPremium=0;


// 3.- number
var cantidad;
let saldo_cuenta=-2500
const costo_producto= 10.50
let monto_transaccion;
console.warn("--- Tipo de Dato -NUMBER (Numeros, positivos, negativos, decimales, flotantes")
console.log(`tu saldo eal dia de hoy es de : ${saldo_cuenta}, (tipo de Dato = ${typeof(saldo_cuenta)})`)
cantidad = 8;
console.log(`Has elegido comprar: 4 ${cantidad} de producto.`)
console.log(`El importe total de la compra es de : ${(cantidad*costo_producto)}`)
saldo_cuenta=saldo_cuenta-(cantidad*costo_producto);
console.log(`Tu nuevo saldo es ${saldo_cuenta}`);
// El cliente raliza un monto un abono de 1500
monto_transaccion=1500;
console.log(`Tu abono de : ${monto_transaccion} ha sido receibido, tu nuevo saldo es de :  ${saldo_cuenta+monto_transaccion}`)


//  4. STRING (cadena de caracteres)
const alumno = "Antonio Ocpaco Dolores";
let producto;
console.warn("--- Tipo de dato - STRING (Cadena de caracteres)")
console.log (`El nobre del alummno es  ${alumno}, que es de tipo de dato ${typeof(alumno)}` )

// inicialisamos el valor de lavariable producto
producto="MONITOR 20\" FULL HD"
console.log(`El nombre del producto es ${producto}, que es de tipo ${typeof(producto)} `)

console.log(`Más adelante podremos transformar el contenido de los STRING usando metodos y funciones especificas, como comvertir su valor a mayusulas: ${alumno} => ${alumno.toUpperCase()}`)
console.log(`0 en su defecto a minusculas: ${producto}=> ${alumno.toLowerCase()}`)

// 5. TIPO DE DATO BIGINT (un numero de mayor amplitud)

const num1=1234567890;
const num2=12345678901234567890;
let num3=12345678901234567890134567890;
let num4=1234567890123456789012345678901234567890;
// el numero que pone punto decimales una e+numero
console.warn("--- Tipo de dato - BIGINT (numero de mayor amplitud)")

console.log(`El primer experimento de un numero  grande es: ${num1}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(num1)}`)
console.log(`El segundo experimento de un numero  grande es: ${num2}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(num2)}`)
console.log(`El tercer experimento de un numero  grande es: ${num3}, que si es soportado por NUMBER pero perdiendo precision y su tipo de dato es: ${typeof(numBig3)}`)
console.log(`El cuarto experimento de un numero  grande es: ${num4}, que si es soportado por NUMBER pero perdiendo precision y su tipo de dato es: ${typeof(numBig4)}`)

num3=BigInt(12345678901234567890134567890);
num4=BigInt(1234567890123456789012345678901234567890);


console.log(`El quinto experimento de un numero  grande es: ${num3}, que si no es soportado por NUMBER perdiendo presicion y su tipo de dato es: ${typeof(num3)}`)
console.log(`El sexto experimento de un numero  grande es: ${num4}, que si no es soportado por NUMBER perdiendo precision  y su tipo de dato es: ${typeof(num4)}`)


// TIPO DE DATO SYMBOL
console.warn("--- Tipod de Dato SYMBOL (Simbolo)")
const nu1 =5;
const nu2 =5.0;
const nu3 ="5";
const nu4 ="5.0";
const nu5= Symbol(5)
const nu6= Symbol(5)
const nu7= Symbol(5.0)
const nu8= Symbol("5")
const nu9= Symbol("5.0")

// pruebaas comparativas
console.log("¿Es 5 = 5.0?")

if(nu1==nu2){
    console.log("Se comporaro nu1 con nu2 determinando que tienen el mismo tipo de dato")

} else{
    console.log("Se comporaro nu1 con nu2 determinando que no tienen el mismo tipo de dato")

}
console.log("¿Es 5 = \"5\"?")

if(nu1==nu3){
    console.log("Se comporaro nu1 con nu3 determinando que tienen el mismo tipo de dato")

} else{
    console.log("Se comporaro nu1 con nu3 determinando que no tienen el mismo tipo de dato")

}
console.log("¿Es 5 = \"5\"? usando === para comparar extrictamente el valor y el tipo de datos" )

if(nu1===nu3){
    console.log("Se comporaro nu1 con nu3 determinando que tienen el mismo tipo de dato")

} else{
    console.log("Se comporaro nu1 con nu3 determinando que no tienen el mismo tipo de dato")

}
console.log("¿Es 5 = \"5.0\"?")

if(nu1==nu4){
    console.log("Se comporaro nu1 con nu4 determinando que tienen el mismo tipo de dato")

} else{
    console.log("Se comporaro nu1 con nu4 determinando que no tienen el mismo tipo de dato")

}
console.log("¿Es 5 = \"5.0\"usando === para comparar extrictamente ?")

if(nu1===nu4){
    console.log("Se comporaro nu1 con nu4 determinando que tienen el mismo tipo de dato")

} else{
    console.log("Se comporaro nu1 con nu4 determinando que no tienen el mismo tipo de dato")

}
console.log(`¿Es 5 === Symbol (5)?, antes de comparar anali<REMOS QUE TIPO DE DATOS SON: SIENDO NUMERO1 DE TIPO ${typeof(nu1)} y Numero 5 es de tipo ${typeof(nu5)} `)

if(nu1==nu5){
    console.log("Se comporaro nu1 con nu5 determinando que tienen el mismo tipo de dato")

} else{
    console.log("Se comporaro nu1 con nu5 determinando que no tienen el mismo tipo de dato")

}
console.log("¿Es 5 = Symbol(5) usando === para ser mas extricto al comparar?")

if(nu1===nu5){
    console.log("Se comporaro nu1 con nu3 determinando que tienen el mismo tipo de dato")

} else{
    console.log("Se comporaro nu1 con nu5 determinando que no tienen el mismo tipo de dato")

}


//7. NULL
console.warn("--- Tipo de Dato - NULL (Nulo o Vacío)");
//El tipo de dato nulo se asigna cuando el sistema o el usuario saben de la variable pero prefieren dejarlo vacío, bajando su consentimiento, a diferencia de UNDEFINED que es un valor desconocido asignado por DEFAULT por JS.
let nombreUsuario = null;
let passUsuario = null;
let generoUsuario = null;
let estatusRelacionSentimental = null;
let fecha_ultimoPost;
//Supongamos que estamos programando una Red Social, tipo Facebook, en la que parte de la información se publicará en el perfil del usuario.
//Si el usuario no ha iniciado sesión en el dispositivo móvil o en la aplicación web, puede explorar contenido de acceso publico. Y no existira información para mostrar.
//En la HU (Historia de Usuario), que el usuario desea logearse debera ingresar su número telefónico o correo electrónico y una contraseña que debemos guardar en las variables previamente declaradas.
//Supongamos que el usuario: Antonio Dolores, con correo electrónico 230642@utxicotepec.edu.mx desea ingresar con su contraseña: pass1234
nombreUsuario = "230642@utxicotepec.edu.mx";
passUsuario = "pass1234";
//En este momento de ejecución del sistema no sabemos su género, ni su estatus de relación sentimental.
console.log(`El usuario: ${nombreUsuario} esta intentando logearse con una contraseña de: ${passUsuario}`);
//Lo que prosigue es que el sistema cotejara los datos ingresados con la base de datos y en caso de que los datos sean correctos comenzará la sesión en la plataforma actualizando estos valores.
//Dado que Idai es del Genero Femenino, y denota que su estatus de relación no ha sido capturado o lo mantiene en privado esto genera la actualización de los valores de las variables.
generoUsuario = "H"
estatusRelacionSentimental = null
console.log(`El usuario: ${nombreUsuario}, se ha loggeado existosamente, al tener acceso a su información de perfil podemos deducir que es del género ${generoUsuario} y que su estatus de realación es: ${estatusRelacionSentimental} y su ultima publicación la realizó el: ${fecha_ultimoPost}`);
//comparando NULL vs UNDEFINED
//Si bien UNDEFINED y NULL tienen el mismo valor, no tienen el mismo tipo de datos
console.log("Comparación de la equidad entre Undefined y Null:")
console.log(
    (fecha_ultimoPost == estatusRelacionSentimental) ?
    "Ambas variables tiene el mismo valor":
    "Las variables no tiene el mismo valor"
);
console.log("Comparación de la identidad entre Undefined y Null:")
console.log(
    (fecha_ultimoPost === estatusRelacionSentimental) ?
    "Ambas variables tiene el mismo valor y el mismo tipo de dato":
    "Las variables tiene el mismo calor, pero no el mismo tipo de dato"
);



// 8. FUNCTION (Funciones)
console.warn("--- Tipo de Dato FUNCTION (Función")
//Declaramos una funnción que nos permita recibir un parametro, en este casó el nombre de la persona a saludar, y le enviamos un saludo, esta función le asignamos una cosntante.
const saludar = function(nombre){return `Hola, ${nombre}!`}
//Invocamos la función declarada
console.log(saludar('Antonio'));
//Y que tipo de dato tiene esta constante
console.log(`El tipo de dato de la constante saludar es: ${typeof(saludar)}`)
    



