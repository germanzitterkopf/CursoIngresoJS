/*
  AUTOR German dario Zitterkopf
  -----------------------------
  TP n° 2
  -----------------------------
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{  var lateral_a;
   var lateral_b;
   var longitud;
   var total_alambre;

   lateral_a = parseInt(document.getElementById("txtIdLargo").value);

   lateral_b = parseInt(document.getElementById("txtIdAncho").value);

   longitud = ( lateral_a + lateral_b ) * 2 ;

   total_alambre = longitud * 3 ;

   alert("metros de alambre a comprar =" + total_alambre);
}

function Circulo () 

{
	var radio;
    var diametro;
    var perimetro;
    var longgitud_total;

    radio = parseInt(document.getElementById("txtIdRadio").value);      
       
    diametro = radio * 2 ;   

    perimetro = diametro
    longgitud_total





}
function Materiales () 
{
	
}