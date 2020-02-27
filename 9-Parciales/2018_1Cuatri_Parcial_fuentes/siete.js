function mostrar()
{
    var notas;
    var notaBaja;
    var sexo;
    var sexoBajo;
    var contadordenotas = 0;
    var promedio = 0;
    var cantvarones6 = 0;
    var flag = 0;

    for(var cantAlumnos = 0; cantAlumnos < 5; cantAlumnos++ ){

        notas = parseInt(prompt("Ingrese la nota del alumno:"));
        while(notas < 0 || notas > 10 || isNaN(notas)){

            alert ("No es una nota valida");
            notas = parseInt(prompt("Reingrese la nota del alumno:"));

        }

        sexo = prompt("ingrese el sexo del alumno:").toLowerCase();

        while(sexo != "f" &&  sexo != "m"){

            sexo = prompt("Reingrese la sexo del alumno:");

        }

        contadordenotas = contadordenotas + notas;

        if( notaBaja > notas || flag == 0 ){
            notaBaja = notas;
            sexoBajo = sexo;
            flag = 1;
        }

        if (notas >= 6 && sexo == "m"){

            cantvarones6 ++;

        }


    }

    promedio = contadordenotas / 5;

    alert(" El promedio de las notas totales es: " + promedio + "\n La nota mas baja es: " + notaBaja + "\n El sexo de la nota mas baja es: " + sexoBajo + "\n la cantidad de varones con nota >=6: " + cantvarones6);



}
