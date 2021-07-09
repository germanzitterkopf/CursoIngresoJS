/*
   AUTOR.: Zitterkopf German
   --------------------------
   EJERCICIO.: TP N° 3

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

  var grados_cel; 
  var grados_far;


function FahrenheitCentigrados () 
{
  var result_cel
  var mensaje1;

  grados_far = document.getElementById("txtIdTemperatura").value;

  grados_far = parseFloat(grados_far);

  result_cel = (( grados_far - 32) * 5 )
  
  result_cel = ( result_cel / 9 ) ;

  mensaje1 = grados_far + " grardos °F  son = " ;
  
  mensaje1 = mensaje1 +  result_cel + " grados °C ";

     alert( mensaje1 );

    }


function CentigradosFahrenheit () 
{
   var resul_far;
   var mensaje2;

   grados_cel = document.getElementById("txtIdTemperatura").value;

   grados_cel = parseFloat(grados_cel);
 
   resul_far = ( grados_cel  * ( 9 / 5 ) ) + 32 ;
       
   //compongo mensaje

   mensaje2 = grados_cel +   " grardos °C  son = ";
   
   mensaje2 = mensaje2  + resul_far + " grados °F "; 
   
     alert( mensaje2 );	
   }
