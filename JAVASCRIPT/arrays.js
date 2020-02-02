//ARRAY arreglos que permiten crear una coleccion de objetos dentro de una variable/

var animales = ["perro" , "gato" , "paloma", "hamster"]
var comida = ["hamburguesa" , "huevos" , "empanada"]

document.write(animales.join("-") + "<br>" );//para agregar puntuación

var ordenados = animales. sort();
document.write(ordenados + "<br>" )

//sort para orden ascendente 
// reverse es para orden desendente 

/*elimina solo ultimo elemnto del array, pero con numero elimina la casilla señalada.
animales.pop();  */

/*
// Agregar otro valor al array 
animales[animales.length] = "caballo" 


// length es para el tamaño del array, cuantos valores tiene
document.write( "tienes" + "\n" + animales.length + "\n" + "animales" + "\n" )
*/
//Añade uno o mas elementos al final de un array//
animales.push("rana", "mariposa" , "serpiente")

document.write(animales[0]+ "\n" );
document.write(animales[1]+ "\n" );
document.write(animales[2]+ "\n" );
document.write(animales[3]+ "\n" );
document.write(animales[4]+ "\n" );
document.write(animales[5]+ "\n" );
document.write(animales[6]+ "\n" );
document.write(animales[7]+ "\n" );

var categoria = animales.concat(  "no comen" + comida + "\n")
document.write( "<br>" + categoria)
//junta dos variables 




