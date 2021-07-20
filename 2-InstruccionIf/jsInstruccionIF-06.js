/*
AUTOR.: Zitterkopf German
-------------------------
ejercicio.: if N° 6
-------------------------
-------------------------
*/

function mostrar()
{

 var edad;
	
    edad = parseInt( document.getElementById("txtIdEdad").value );

   if ( edad >= 18  ) 
          { alert("usted es MAYOR ");}

   if ( edad >= 13 && edad <= 17 )
          { alert("usted es ADOLESCENTE");}
 
   if ( edad <= 12 )
          { alert("usted es UN NIÑO ");}
 	


}//FIN DE LA FUNCIÓN