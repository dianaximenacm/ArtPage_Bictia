"use strict"
//Para identificar errores en el documento//


/* ALERTA 
MENSAJE AL USUARIO 
INGRESAR UN DATO
HACER UNA ACCION 
...................................................................
alert("Esta es la clase de Javascrip");
prompt("Ingresa tu nombre")
confirm("Estas seguro que deseas salir")
...................................................................
*/
/*
VARIABLES

Para almacenar diferentes tipos de datos: textos, números
//= el igual es para asignar un valor//
.................................................................
var nombre = prompt("ingresa tu nombre")
alert (nombre)
.................................................................
*/
/*
CONSOLA
en consola encuentro los datos que se van guardando en Javascript
En Chrome es  derecha tres puntos, herramintas, mas herramientas y heramientas de desarrollador"
en Firefox es la consol en ispecionador de elementos */

/* EJEMPLO 1
Documento write es para para que me escriba algo en el documento* 
...............................................................
var nombre;
var edad
nombre = "Valentina";
edad = 20 * 2;
document.write (nombre + " " + edad);
..............................................................
*/
/*
EJEMPLO 2
 ALERTA CON ESCRITURA EN SITIO 
................................................................
var nombre = prompt("Ingresa tu nombre")
var edad = prompt("ingresa la edad")
document.write (nombre +"" +edad)
................................................................

para que me escriba algo en el documento* 
( + PARA CONTATENAR
    "" PARA GENERAR UN ESPACIO
   
/*EJEMPLO 3 
.................................................................

    var telefono = prompt("ingresa tu numero de telefono")
    var nombre = prompt("ingresa tu nombre")
    var apellido = prompt("ingresa tu apellido")
    var edad = prompt("ingresa tu edad")

    alert("tu nombre es" + nombre
    + "\n" + "Apelido:" + apellido
    + "\n" + "edad:" + edad
    + "\n" + "telefono:" + telefono);

    document.write (nombre +"" + apellido + edad + telefono)
..................................................................
/*
/* TIPOS DE DATOS 
NUMERICO - FLOAT

.................................................................. 
var edad = 18;
var rango = 7.5;

// String -Cadena de Texto
var nombre = "valentina"
var Apellido = "maldonado"

//ARRAY arreglos que permiten crear una coleccion de objetos dentro de una variable/

var animales = ["perro" , "gato" , "paloma", "hamster", 22 , true]
document.write(animales[2])
*/
// OBJETOS
//clave y valor
/* 
.................................................................. 
 Valen 
 333
 14
 true
*/
/*
var jugador1 = {
username:"valen", 
score:["333"], 
horas:12, 
profesional:true
}
//camelcase 
var objetos = {
    color: "rosa"
}

//Booleano
var booleano = false; 
*/

/*
!-- EJERCICIOS EN JAVASCRIPT 
1. Confeccionar un programa que defina e inicialice 
una variable d tipo cadena  de caracteres donde almacenemos 
el nombre de tres empleados y otra variable de tipo entera donde
almacenar el sueldo imprimir cada variable en una lidea distinta de la pantalla 
alerta 
impresion en documento
en consola -->
*/

/* Declarar variables de los 3 empleados, es mejor los numeros no declararlos como texto es decir no usar comillas
"\n" espacio en vertical 
"br" epacio en horizontal */



var empleado1 = prompt ("ingresa tu nombre");
var sueldo1 = prompt ("ingresa tu sueldo");


var empleado2= "Benito"
var sueldo2 = 20000

var empleado3= "Carla"
var sueldo3 = 30000


alert("el nombre del empleado es"+ empleado1 +"\n"+"y su sueldo es:"  +"\n" + sueldo1);
document. write ("El nombre del segundo empleado es"+ empleado2 + "<br>" +"y su sueldo es"  +"\n" + sueldo2)
console.log("el nombre del empleado 3 es" + empleado3 +  "\n" + "y su sueldo es" +"\n" + sueldo3)

