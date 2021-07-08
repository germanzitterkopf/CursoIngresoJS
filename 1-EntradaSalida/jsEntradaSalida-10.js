/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{  var ingreso, descuento, valorfinal;
	
	 
     ingreso = document.getElementById("txtIdImporte").value;
     ingreso = parseInt(ingreso);
     descuento = ingreso;
     descuento = descuento / 100 ;
     descuento  = descuento * 25 ;
     valorfinal = ingreso - descuento;     	
	 document.getElementById("txtIdResultado").value = valorfinal;
     
	// alert("ok");
}


