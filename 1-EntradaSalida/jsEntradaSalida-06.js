/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let valuno ;
	let valdos ;
    let resultado;

  valuno = document.getElementById("txtIdNumeroUno").value;
   //valuno = parseInt((document.getElementById("txtIdNumeroUno").value); 
  
  valdos = document.getElementById("txtIdNumeroDos").value;                  
  
  valuno = parseInt(valuno);  
  
  valdos = parseInt(valdos);
  
  resultado = valuno + valdos ;

	console.log(resultado);

	alert(resultado);
}

