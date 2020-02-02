/* CALCULADORA #1 */

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
