/*

var color =" "
while (color != "rosado"){
    color =prompt ("escribe rosado para salir")
}
Mostrar los múltiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 -16 -24, etc. (While)
*/

document.write("<hr>");
//DECLARAMOS LAS VARIABLES
var i;
var j = 500;
var rep = 0;
//BUCLE DESDE 1 HASTA j
for (i = 8; i <= j; i++) {
    //IMPRIMIMOS EL NÚMERO i
    document.write(i);
    //SI EL RESTO DE DIVIDIR i/8 ES IGUAL A 0
    while (i % 8 == 0) {
        document.write("<br>" +" (Multiplo de 8)");
        document.write("<hr>");
    }
}


// Mostrar los múltiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 -16 -24, etc. (While)
