/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  var sueldo,aumento, valporcentaje ;
    
    valporcentaje = prompt("Ingrese el Porcentaje a Descontar");
	
	sueldo = document.getElementById("txtIdSueldo").value;
    
    sueldo = parseInt(sueldo);
     
    aumento = ((sueldo / 100) * valporcentaje + sueldo); 

    document.getElementById("txtIdResultado").value= aumento;
    

    //console.log(sueldo);
	
	//alert(" EL AUMENTO ES DE " + sueldo);
}
