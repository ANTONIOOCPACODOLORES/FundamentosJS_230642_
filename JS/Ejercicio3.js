// repaso de objetos 
const bg = "llenar gradient (11deg, rgba(2,0,36,1) 0%, rgba(9,121,1) 33%)";
console.warn("Practica 05: Repaso de Objetos en JavaScript");

// Variables independientes 
let producto_nombre = "computadora ASUS gamer laptop 17*";
let producto_marca = "ASUS";
let producto_modelo = "TUF 17";
let producto_precio = 15749.50;
let producto_disponibilidad = true;
let producto_SKU = Symbol("TUF70W-HK221W");
let producto_stock = 15;
let producto_Imagen = null; // Cambiado a 'null'
let producto_Barcode; // Cambiado el nombre a 'Barcode'
let producto_categoria = ["ELECTRONICOS", "Computación", "Gaming", "Promociones BUEN FIN", "Mejor Valorados"];

// Accedemos a los valores de las características del producto de la marca de manera independiente 
console.log(`Los datos del producto son: 
Nombre: ${producto_nombre}, Tipo de dato: ${typeof(producto_nombre)} 
Marca: ${producto_marca}, Tipo de dato: ${typeof(producto_marca)} 
Modelo: ${producto_modelo}, Tipo de dato: ${typeof(producto_modelo)} 
Precio: ${producto_precio}, Tipo de dato: ${typeof(producto_precio)} 
Disponibilidad: ${producto_disponibilidad}, Tipo de dato: ${typeof(producto_disponibilidad)} 
SKU: ${producto_SKU.toString()}, Tipo de dato: ${typeof(producto_SKU)} 
Stock: ${producto_stock}, Tipo de dato: ${typeof(producto_stock)} 
Imagen: ${producto_Imagen}, Tipo de dato: ${typeof(producto_Imagen)} 
Barcode: ${producto_Barcode}, Tipo de dato: ${typeof(producto_Barcode)} 
Categoría: ${producto_categoria}, Tipo de dato: ${typeof(producto_categoria)}`);

console.log(); // Nueva línea

// Declaramos el objeto Producto
let Producto = {
    Nombre: "Tenis Deportivos",
    Marca: "Nike",
    Modelo: "Jordan '24",
    Precio: 3326.25,
    Disponibilidad: false,
    Stock: 0,
    Sku: "D25485-612",
    Imagen: "../assets/Products/sneakers/JORDAN.png",
    Barcode: null,
    Categorias: ["Deportivos", "Juvenil"]
};

// Leemos el objeto completo
console.table(Producto);

// Accedemos a propiedades específicas del objeto
console.log("Accediendo a propiedades específicas del producto");
console.log(`Nombre: ${Producto.Nombre} 
Marca: ${Producto.Marca} 
Modelo: ${Producto.Modelo} 
Precio: ${Producto.Precio} 
Disponibilidad: ${Producto.Disponibilidad} 
Stock: ${Producto.Stock} 
SKU: ${Producto.Sku} 
Barcode: ${Producto.Barcode} 
Categoría: ${Producto.Categorias}`);

console.log(`Estatus: ${Producto.Stock === 0 ? 'Agotado' : `${Producto.Stock} unidades disponibles`}`);

// Segundo producto
let Producto2 = {
    Clave: 316,
    Nombre: "Lentes para sol",
    Marca: "Oakley",
    Modelo: "QNTM kato",
    Precio: 6829.00,
    Disponibilidad: true,
    Stock: 5,
    SKU: "DO9481D-0356",
    Imagen: "../assets/Products/sunglasses/katoRed.png",
    Barcode: 888392491626,
    Categorias: ["Deportes", "Lentes", "Accesorios"]
};

// Comprador
let comprador = {
    Clave: 3216,
    Nombre: "Antonio",
    Apellido: "Dolores",
    Tipo: "Frecuente",
    correo: "TonyCr25@gmail.com",
    Pais_Origen: "México",
    Saldo: 140000.00
};

// Pedido
let Pedido = {
    Producto_clave: 316,
    comprador_clave: 3216,
    cantidad: 2,
    Estatus: "Carrito de compras",
    TipoPago: "Tarjeta de credito"
};

// Calcular costo de la compra
let Precio = Producto2.Precio;
let Cantidad = Pedido.cantidad;
let SaldoActual = comprador.Saldo;

let Costo_Compra = Precio * Cantidad;
console.log(`El cliente ha agregado a su carrito de compras ${Cantidad} unidades, con un costo total de: ${Costo_Compra}`);

if (Costo_Compra <= SaldoActual) {
    console.log("El cliente tiene saldo suficiente");
} else {
    console.log("El cliente no tiene saldo suficiente");
}

// Actualizar el precio del producto
console.log("%c4.- Actualización de los valores de las propiedades de un objeto", "color: blue;");
console.log(`El objeto actualmente tiene los siguientes valores:`);
console.log(JSON.stringify(Producto2, null, 2));
console.log(`Por cuestiones de infracción, el costo del producto ha cambiado de $6,829.00 a $6,915.00.`);
Producto2.Precio = 6915.00;
console.log("Los nuevos valores del producto son:");
console.log(Producto2);

// Cambiar el tipo de dato de la disponibilidad
console.log("----------------------------------------------------");
console.log("El objeto tiene actualmente los siguientes valores:");
let tipoDisponibilidad = typeof(Producto2.Disponibilidad);
console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`);
console.log(JSON.stringify(Producto2, null, 2));
Producto2.Disponibilidad = "sí"; // Cambiando a string
let nuevoTipoDisponibilidad = typeof(Producto2.Disponibilidad);
console.log(Producto2);
console.log(`El nuevo tipo de dato de la disponibilidad es: ${nuevoTipoDisponibilidad}`);

// Agregar nuevas propiedades al objeto comprador
console.log("%c5.- Agregar nuevas propiedades al objeto", "color: blue;");
console.log("Los datos actuales del comprador son:");
console.log(comprador);
comprador['Direccion'] = "Av. Benito Juárez NO. 1525, Interior 4D, Xicotepec de Júarez, Puebla, México";
comprador['Tipo'] = "Nuevo Cliente";
comprador['ActividadReciente'] = true;
comprador['TotalCompras'] = 3516.25;
console.log("Después de haber agregado las propiedades Dirección, Tipo, ActividadReciente y TotalCompras:");
console.table(comprador);

// Eliminar propiedades existentes de un objeto
console.log("%c6.- Eliminar propiedades existentes de un objeto", "color: blue;");
console.log("La estructura y valores del objeto PEDIDO son previos a la modificación:");
console.table(Pedido);
delete Pedido.TipoPago;
console.table(Pedido);


// Eliminar propiedades existentes de un objeto
console.log("%c6.- Eliminar propiedades existentes de un objeto", "color: blue;");
console.log("La estructura y valores del objeto PEDIDO son previos a la modificación:");
console.table(Pedido);
delete Pedido.TipoPago;
console.table(Pedido);

// Congelar objeto para evitar modificaciones
console.log("%c7.- Metodos para controlar la mutabilidad de los objetos, congelación (FREEZE)", "color: blue;");
console.log("La estructura actual del objeto COMPRADOR ES: ");
console.table(comprador);
Object.freeze(comprador);

// Intentamos modificar el objeto congelado
comprador.fechaUltimaCompra = "05-09-2024";
delete comprador.Tipo;
comprador.Direccion = "calle 16 de septiembre #102, col manantiales, Huachinango, Puebla.";
console.log("Verificamos si se realizaron los cambios en el objeto COMPRADOR:");
console.table(comprador);

// Sellar objeto para restringir modificaciones
console.log("%c8.- Metodos para controlar la mutabilidad de los objetos, sellando (SEAL)", "color: blue;");
console.log("Objeto antes de ser modificado:");
console.table(Pedido);

// Sellamos el objeto
Object.seal(Pedido);

// Intentamos modificar su estructura
Pedido['FechaPedido'] = "25/09/2024 :11:05:03";
delete Pedido['cantidad'];
console.log("Verificación si se realizaron los cambios en el objeto PEDIDO:");
console.table(Pedido);

// Intentamos modificar el valor de las propiedades
Pedido.Cantidad = 5;
console.log("Verificamos si se realizaron los cambios en el Objeto PEDIDO:");
console.table(Pedido);

// Desestructuración de 2 o más objetos
console.log("%c9.- Desestructuración de 2 o más objetos", "color: blue;");
let { Precio: productoPrecio, Marca: productoMarca } = Producto;
let { correo: clienteCorreo, Pais_Origen: clientePais, Saldo: clienteSaldo, Tipo: clienteTipo } = comprador;

//Transformar valores cuantitativos en cualitativos
if(productoPrecio>2000){
    productoPrecio="caro"
} 
else{
    productoPrecio="Barato"
}
if(clienteSaldo>0){
    clienteSaldo="A favor"
}
else if(clienteSaldo<0){
    clienteSaldo="En contra"
}
else{
    clienteSaldo="Sin deudas"
}

// Transformar valores cuantitativos en cualitativos
let clientenivel1;

if (clienteTipo=="Premiun ");
clientenivel1==1
if(clienteTipo=="Premiun");
clientenivel2==2
if(clienteTipo=="No identificado");

//clasificamos al cliente por su PAIS DE ORIGEN

if (clientePais=="Mexico")
clientePais=="Nacional"
else clientePais=="Extranjero"

// OLE - objet Literal eNHACEMENT 

let datosclientepromociones =  (clienteCorreo, clientePais, clientenivel1, clienteSaldo, productoMarca, productoPrecio)

//El nuevo objeto que creamos seria un ejemplo de la informacion que deberiamos enviar al area de marketing para la difusion de nuevo producto
console.table(clientepromoción)

//Operaciones sobre objetos
//union de objetos
console.log("%c10.- Uniuoin de Objetos usando el metodo de asignación (ASSING", style_console);
console.log("Imprimirmos la estructura y valores del objeto PRODUCTO")
console.table(Producto);

//Suponemosque el usuario ya realizo elpago del pedido se covertira en una venta que requiere informacion de ambos objetos
const venta=Object.assign(producto, Pedido);
console.log("Consultamos este nuevo objeto VENTA")
console.table(venta);
