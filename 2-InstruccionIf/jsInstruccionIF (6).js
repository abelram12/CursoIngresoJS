function mostrar()
{
//tomo la edad  
var edad;
   edad = parseInt(document.getElementById("edad").value);
    
    if (edad < 13 ) {
        alert("es niñe");
    
     }
    else {
     
        if (edad <= 17) {
            alert("adolescente");
          
        }
        else {

         alert("es mayor");
          
        }

    } 



}//FIN DE LA FUNCIÓN