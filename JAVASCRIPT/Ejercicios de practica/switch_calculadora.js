var cantidad1= parseInt(prompt("Primera cantidad"));
var cantidad2= parseInt(prompt("Segunda cantidad"));
var Pregunta= prompt("que programa desea ejecutar? calculadora,comparacion");


switch (Pregunta) {
 case "calculadora":
    

            var opera =prompt("Selecciona la operacion aritmetica deseada: s (suma) r (resta) m (multiplicacion) d (division) ")

            var x=(cantidad1+cantidad2)
            var y=(cantidad1-cantidad2)
            var z=(cantidad1*cantidad2)
            var a=(cantidad1/cantidad2)
            switch (opera) {
                case "s":
                alert(x);
                    break;

                    case "r":
                        alert(y);
                    break;

                    case "m":
                        alert(z);
                    break;

                    case "d":
                        alert(a);
                    break;

                default:
                    break;
            }
            break;

case "comparacion":

            if (cantidad1<cantidad2) {
                alert(cantidad1+"es mayor que " + cantidad2);
            }
            if(cantidad1>cantidad2){
                alert(cantidad1 + "es menor que" + cantidad2);
            }

    break;

    default:
        alert("Este programa no existe");
    
}
