function mostrar()
{

var repeticiones = (prompt("ingrese el número de repeticiones"));

while(isNan (repeticiones) || repeticiones<1){
    repeticiones=parseInt(prompt("Dato incorrecto. Vuelva a Ingresar numero"))
}
 for ( var contador =1 ; contador <= repeticiones; contador++){
     console.log("Hola UTN-FRA" + contador);
 }

}//FIN DE LA FUNCIÓN