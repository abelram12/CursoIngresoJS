function mostrar()
{
var numero 
numero = parseInt(prompt("Ingrese un numero"));
while(isNaN(numero)) || nuermo< 1) {
    numero = parseInt(prompt("Dato invalido, Ingrese un numero"));
}

for(var contador = 1; contador <= numero; contador++) {
    if(contador % 2 == 0)
    console.log(contador);
    contadorPares++;
}


}//FIN DE LA FUNCIÓN