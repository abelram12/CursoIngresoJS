function mostrar()
{
    var numero;
    var letra;
    var cantpar = 0;
    var cantimpar = 0;
    var cantcero = 0;
    var promedioPos;
    var contpos =0;
    var acumuladorpost=0;
    var sumaNegativos;
    var numMax;
    var letMax;
    var numMin;
    var letMin;
    var seguir;
    var flag=0;

    do{

        numero = parseInt(prompt("Ingrese un numero entre -100 y 100: "));
            while( !( numero >= -100 && numero <= 100)){
            numero = parseInt(prompt("Ingrese un numero entre -100 y 100: "));

             }
        letra = prompt("Ingrese una letra: ");
        
        if(numero%2 == 0){
            
            cantpar++;
        
        }else{

            cantimpar++;
        }

        if(numero>0){
            contpos ++;
            acumuladorpost = acumuladorpost + numero;

        }else if (numero<0) {
            sumaNegativos = sumaNegativos + numero;

        }else{
            cantcero++;
        }

        if( numMax < numero || flag == 0 ){
            numMax = numero;
            letMax = letra;
           // flag = 1 aca no se pone porque sino podria saltear el codigo de abajo
        }

        if(numMin > numero || flag == 0){
            numMin = numero;
            letMin = letra;
            flag = 1;
        }

     seguir = prompt("quiere continuar? s/n");


    }while( seguir == 's');

    if( contpos > 0 ){
         promedioPos = acumuladorpost/contpos;

    } 

    document.write("La cantidad de numeros pares es " + cantpar + "<br>" );
    document.write("La cantidad de numeros impares es " + cantimpar + "<br>" );
    document.write("La cantidad de numeros ceros es " + cantcero + "<br>" );
    document.write("El promedio de los numeros positivos es " + promedioPos + "<br>" );
    document.write("la suma de los numeros negativos es " + sumaNegativos + "<br>" );
    document.write("El numero minimo es  " + numMin + " su letra es  " + letMin + "<br>" );
    document.write("El numero maximo es  " + numMax + " su letra es  " + letMax + "<br>" );


}
