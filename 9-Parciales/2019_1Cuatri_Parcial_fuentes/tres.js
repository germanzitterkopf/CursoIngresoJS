/*
 AUTOR.: Zitterkopf German Dario
---------------------------------
 EJERCICIO.: PARCIAL N°  3
---------------------------------


*/
function mostrar()
{
  var precio;
  var descuento;
  var preciofinal;
  
  precio = parseInt( prompt(" ingrese el precio"));
  
  descuento = parseInt( prompt(" ingrese el descuento"));

  preciofinal = ( precio - ( precio / 100 ) * descuento ) ;

  document.getElementById("elPrecioFinal").value = preciofinal ;


}
