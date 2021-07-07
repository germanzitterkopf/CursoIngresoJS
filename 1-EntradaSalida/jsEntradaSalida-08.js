/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

  let num_dividendo;
  let num_divisor;
  let resultado;
  let result_resto;

    num_dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
    num_divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);
  

    resultado = num_dividendo % num_divisor ;
	
	//result_resto = ( num_dividendo - (resultado  * num_divisor) );
	
	alert("el resto es =" + resultado);
}
