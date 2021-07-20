/*
AUTOR.: Zitterkopf German
-------------------------
ejercicio.: if N° 10
-------------------------
-------------------------
*/
function mostrar()
{ 
  var numeroRandom;	//Genero el número RANDOM entre 1 y 10 
	
     numeroRandom = parseInt(Math.random()*10 + 1 );
	 
	   if (numeroRandom >= 9 && numeroRandom <= 10 ){
     	alert( " EXELEENTE "+ numeroRandom ); }
       

	   if (numeroRandom >= 4 && numeroRandom <= 8 ) {
     	alert( " APROBO " + numeroRandom ); }	

       if (numeroRandom < 4  ) {
     	alert( " VAMOS, LA PROXIMAA SE PUEDE " + numeroRandom ); }	




}//FIN DE LA FUNCIÓN