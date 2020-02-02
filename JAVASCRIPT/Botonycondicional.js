function diasemana(){
    
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
}