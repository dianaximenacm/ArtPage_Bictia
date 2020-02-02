// CONDICIONAL es una comparación entre variable y dato 
// Todas se evaluan de marena Booleana, es decir verdadero o falso (T/F)
// Si es T se ejecuta el bloque de codigo 
// si es F se ejecutan otra serie de acciones 
/*
// if
Si el día esta soleado "salgo a la playa"
// else (si no)
// else if 
Si no lo esta  " me quedo en casa"

//SENTENCIA CONDICIONAL if 

if (condition) {
    //codigo a ejecutar
}
*/

/* OPERADORES LOGICOS  
=== Igual a ( el tipo de dato y el valor son extrictamente iguales, es mas estricto)
==  comparado con(si el tipo de dato no es igual al valor pero hace parte de la variable) 
!=  diferente a (si el valor no es igual)
<   menor que
<=  menor o igual que
>   Mayor que
>=  Mayor o igual que 

EJEMPLO
var saludo = prompt("ingresa un saludo");

if (saludo == "hola"){
    alert("Cómo estas?");
    } else {
        alert("Que lindo es saludar y ser saludado")
    }
*/ 
/*
// to lower case para que me convierta el texto en minuscula
var saludo = prompt("ingresa un saludo");
saludo.toLowerCase();
/* OPERADORES RELACIONALES 
&&  and  deben cumplirse todo
||   o   una opcion o la otra 
*/
/*
if (saludo == "hola" || saludo =="Que tal" || saludo == "hello"){
alert("Cómo estas?");
} else {
    alert("Que lindo es saludar y ser saludado");
}
*/

/*
// EJEMPLO 2


//variable que no cambia 
var nombre = prompt("ingrese nombre ");//si se puede remplazar 

var edad = prompt("Ingrese su edad"); 

if(edad == 18) {
    document.write("Bienvenido , tienes 18");
}else if (nombre == "laura"){
  document.write("Bienvenido" + nombre)
    }
/*

/*
let CONVIERTE UNA VARIABLE GLOBAL EN UNA LOCAL 
_________________________________

var clima = prompt("agregue unos grados actuales del clima")

if(clima > 35){
    let mensaje ="Si puede salir";
    alert(mensaje)
}
else if (clima <= 35 ){
    alert("Quedate en casa")
}
*/


/*
ANIDACION DE IF ELSE Y ELSE IF 
_________________________________

EJEMPLO 3 
Variable que almacena el dia de la semana 

var nombreDia= prompt("Ingrese un dia de la semana "); 
nombreDia.toLowerCase();

if(nombreDia == "lunes" || nombreDia=="martes" || nombreDia=="miercoles" || nombreDia=="jueves" || nombreDia=="viernes" ){
//si es correcto muestro un mensaje que diga el dia de la semana 
    alert ("Es un día entre semana")
}else{ //si no es correcto paso al else (si o no )
    //validó entonces si el dia es un fin de semana 
    if(nombreDia == "sabado"  || nombreDia=="domingo" ){
alert("Es un fin de semana") // si es correcto muestra mensaje 
}
else{
 alert("favor escribir un dia de la semana")   
}
}
*/
/*
Hacer un programa que ingrese dos numeros y me los multiplque, sume, reste y divida
Datos digitados por el usuario

EJEMPLO PROFE CALCULADORA 

var op =prompt("ingresa 1 para sumar, 2 - para restar, 3-para multiplicar y 4-para dividir")
var num1= number(prompt("ingresa el primer numero"));
var num2= number (prompt("ingresa 1 para sumar, 2 - para restar, 3-para multiplicar y 4-para dividir"));
var resultado = 0;

if(op==1){
    resultado = num1 + num2;
    alert("el resultado es"+ resultado)}else{
        alert("ingresa un numero de 1 a 5")
}
else if(op==2) {
    resultado= num1 - num2;
    alert("el resultado es"+ resultado)
    else{
        alert("ingresa un numero de 1 a 5")
}
else if(op==3) {
        resultado= num1 * num2;
        alert("el resultado es"+ resultado)  
        else{
            alert("ingresa un numero de 1 a 5")
} 
else if (op==4) {
    resultado= num1 / num2;
    alert("el resultado es"+ resultado)  
} else{
    alert("ingresa un número de 1 a 5")
}

*/


var cantidad1= prompt("Primera cantidad")
var cantidad2= prompt("Segunda cantidad")
var opera =prompt("Selecciona la operacion aritmetica deseada: S (suma) R (resta) M (multiplicacion) D (division) ")
var x=(cantidad1+cantidad2)
var y=(cantidad1-cantidad2)
var z=(cantidad1*cantidad2)
var a=(cantidad1/cantidad2)


if (opera=="S") { alert (x);}

else if (opera=="R") { alert (y);
}
else if (opera=="M") { alert (z);
}
else if (opera=="D") { alert (a);
}



