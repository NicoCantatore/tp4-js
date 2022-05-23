//1. Realiza un programa para obtener el menor de 2 números ingresados

let num1 = prompt('ingrese un número');
let num2 = prompt('ingrese un número');

if (num1<num2) {

    console.log('El número menor es ' + num1)

} else {

    console.log('El número menor es ' + num2)

}

//2. Realizar un programa que determine  si un número es par o impar

let numA = prompt('ingrese un número');


if (numA % 2 == 0) {

    console.log('el número par es ' + numA)

} else {

    console.log('el número impar es ' + numA)

}

//3. Declarar una variable que se llame ganeLaCarrera y asignarle el valor false.
// Mostrar por la terminal un mensaje que diga 'Ganaste' si ganeLaCarrera es verdadero y 'Perdiste' si su valor es falso.

let ganeLaCarrera = false;

if (ganeLaCarrera == true) {

    console.log("Ganaste");

} else {

    console.log ("Perdiste");
}


//4. Declarar una variable que se llame posicionEnLaCarrera y asignarle el número 6. 
//Mostrar por la consola uno de los siguientes mensajes según la posición que salió el corredor:

//-'FELICITACIONES, SALISTE 1RO' si la posicionEnLaCarrera es 1.
//-'Te falto poquito para ganar' si la posicionEnLaCarrera es 2.
//-'Sos un orgullo para tu familia' si la posicionEnLaCarrera es 3.
//-'Volvé a tu casa' si la posicionEnLaCarrera es mayor a 3.
//-'No tires fruta' si la posicionEnLaCarrera es otro valor no contemplado antes.

let posicionEnLaCarrera = 6;

if (posicionEnLaCarrera == 1) {
    console.log("FELICITACIONES, SALISte 1RO");
} else if (posicionEnLaCarrera == 2) {
    console.log ("Te falto poquito para ganar");
} else if (posicionEnLaCarrera == 3) {
    console.log ("Sos un orgullo para tu familia");
} else if (posicionEnLaCarrera > 3) {
    console.log ("Volve a tu casa");
}else {
    console.log ("Volve a tu casa");
}


//6. Realizar un programa que calcule el importe total a abonar en una factura, 
//teniendo en cuenta que si el importe total supera los 1000$  se aplica un descuento del 20%.

let n1 = parseInt (prompt("ingrese un número"));
let n2 = parseInt (prompt("ingrese un número"));

let importeTotal = n1+n2;
let descuento = (importeTotal * 0.2);
let totalConDesc = (importeTotal - descuento);

console.log("El importe total es: " + importeTotal);

if(importeTotal >= 1000) {
    
    console.log("El total de su compra con descuento es: $ " + totalConDesc);
    console.log("El descuento es de: $" + descuento );    
} else {
    
    console.log("El total de su compra sin descuento es: $ " + importeTotal );
}

//7. Hacer un programa para obtener las comisiones por ventas de un vendedor. 
//Los datos que se ingresan son monto vendido y código de vendedor 
//Si el código de vendedor es menor a 100 las comisiones son de un 30%,
// si el código esta entre 100 y 200 son del 20% 
//y si es mayor a 200 10%. 
//Mostrar el código de vendedor, el monto vendido y el valor de las comisiones.

let montoVendido = parseInt (prompt ("ingrese el monto vendido"));
let codigoDeVendedor = parseInt (prompt ("ingrese el código de vendedor"));

let comi30 = montoVendido * 0.3;
let comi20 = montoVendido * 0.2;
let comi10 = montoVendido * 0.1;

if (codigoDeVendedor < 100) {
    
    console.log ("vendedor n°: " + codigoDeVendedor + " el monto vendido es de: $" + montoVendido + " La comision es de: $" + comi30);

} else if (codigoDeVendedor >= 100 && codigoDeVendedor <= 200) {
 
    console.log ("vendedor n°: " + codigoDeVendedor + " el monto vendido es de: $" + montoVendido + " La comision es de: $" + comi20);

} else if (codigoDeVendedor > 200) {
   
    console.log ("vendedor n°: " + codigoDeVendedor + " el monto vendido es de: $" + montoVendido + " La comision es de: $" + comi10);
}
//8. Se desea escribir los nombres de los días de la semana en función de la variable d (día) introducida por teclado.  
//1(Lunes) – 2(martes) – 3(Miércoles)……..6(Sábado) – 7(Domingo)

let d = parseInt(prompt('Ingrese el número de día de la semana (1(Lun) 2(mar) 3(Miér) 4(jue) 5(vier) 6(Sáb) 7(Dom))'));

if (d == 1) {
    console.log('lunes');
} else if (d == 2) {
    console.log('martes');
} else if (d == 3) {
    console.log('miércoles');
} else if (d == 4) {
    console.log('jueves');
} else if (d == 5) {
    console.log('viernes');
} else if (d == 6) {
    console.log('sábado');
} else if (d == 7) {
    console.log('domingo');
}

//9. Hacer un programa que calcule el pago que hacen un grupo de personas para ver una película teniendo en cuenta que 
//si el grupo es menor de 8 personas el pago es de 1.5 pesos por persona 
//y para grupos de 8 personas o más el pago es 0.5 pesos por persona.

let grupo = parseInt(prompt("Cantidad de entradas deseadas"));

let gA = (grupo * 1.5);
let gB = (grupo * 0.5);

console.log("la cantidad de entradas seleccionadas es de: " + grupo);

if (grupo < 8) {

    console.log("El pago total de entradas es de: $" + gA);

} else if (grupo >= 8) {

    console.log("El pago total de entradas es de: $" + gB);
}

//10. Una farmacia hace el 15% de descuento a sus clientes si la compra es mayor a 100 pesos. 
//Escribir un programa que dado el monto de una compra como valor numérico, 
//diga cuanto debe abonar el cliente aplicando el descuento si es necesario.

let compra = parseInt(prompt('Monto total de la compra en farmacia'));
let descuentoF = (compra * 0.85); 


if (compra <= 100) {
    console.log("El total de la compra es de: $" + compra);
} else {
    console.log("Total es de: " + compra);
    console.log("El total de la compra con descuento del 15% es de: $" + descuentoF);
}