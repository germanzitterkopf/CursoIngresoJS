/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  var sueldo,aumento;
   
	sueldo = document.getElementById("txtIdSueldo").value;
    sueldo = parseInt(sueldo);
     
    aumento = ((sueldo / 100) * 10 + sueldo); 

    document.getElementById("txtIdResultado").value= aumento;
    

    //console.log(sueldo);
	
	//alert(" EL AUMENTO ES DE " + sueldo);
}
