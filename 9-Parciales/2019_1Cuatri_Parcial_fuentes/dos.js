/*   
  AUTOR.:German Zitterkopf

  PARCIAL.: N° 2




*/


function mostrar()
{
  var nombre1;
  var nombre2;
  var peso1;
  var peso2;
  var pesototal;
  var promedio;
  var datos;
  
  nombre1 = prompt( "ingrese nombre 1");
 
  nombre2 = prompt( "ingrese nombre 2");
 
  peso1 = prompt( "ingrese peso 1");
  peso1 = parseInt(peso1); 
  
  peso2 = prompt( "ingrese peso 2");
  peso2 = parseInt(peso2);
  
  pesototal = peso1 +  peso2;
  
  promedio = pesototal / 2 ;
  
  datos =   nombre1 ;
  
  datos = datos + " y " + nombre2 + " , pesan "  + peso1 + " Kg y " + peso2 ; 

  datos = datos + " kg que sumados son " + pesototal ; 

  datos = datos + " kg y el peso promedio de ambos es de " + promedio + " kg ";



  alert("sus nombres son " + datos );
  

}
