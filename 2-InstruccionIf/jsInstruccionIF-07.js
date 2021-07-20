/*
AUTOR.: Zitterkopf German
-------------------------
ejercicio.: if N° 7
-------------------------
-------------------------
*/
function mostrar()
{
   var edad;
   var estadoCivil;	
    
    edad = parseInt( document.getElementById("txtIdEdad").value );
    
    estadoCivil = document.getElementById("estadoCivil").value ;


   if ( edad < 18 && estadoCivil == "Casado" || edad < 18 && estadoCivil == "Divorciado" ) 
          { 
          	   alert(" Es muy peueño para no ser soltero ");
          	                  }

  

}//FIN DE LA FUNCIÓN