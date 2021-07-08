/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precio1;
var precio2;
var precio3;
var resultado_suma;
function Sumar () 
{
	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseInt(precio1);

	precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseInt(precio2);

    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseInt(precio3);
    
    resultado_suma = (precio1+precio2+precio3)
    
    alert("suma de precios =" + resultado_suma);
}


function Promedio () 
{
	 var resultado_promedio;
    
    precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseInt(precio1);

	precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseInt(precio2);

    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseInt(precio3);
    
    resultado_suma = (precio1+precio2+precio3)

    var resultado_promedio =  resultado_suma;

    resultado_promedio = resultado_suma / 3 ;

  alert("promedio de precios =" + resultado_promedio);

   }


function PrecioFinal () 
{
 var resultado_iva;
    
    precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseInt(precio1);

	precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseInt(precio2);

    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseInt(precio3);

    resultado_suma = ( precio1 + precio2 + precio3 ) ;
    
    resultado_iva =  (resultado_suma * 0.21)  ; 
    
    resultado_iva = resultado_iva + resultado_suma;

  alert("valor de precios mas iva =" + resultado_iva);
    
}