/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	let numero1;
	let numero2;
	let resultado_suma;
	
	numero1 = document.getElementById("txtIdNumeroUno").value;
    numero2 = document.getElementById("txtIdNumeroDos").value;
    
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    resultado_suma = ( numero1 + numero2 );

	alert("la suma es =" + resultado_suma);	
}

function restar()
{
	
    let numero1;
	let numero2;
	let resultdo_resta;
	
	numero1 = document.getElementById("txtIdNumeroUno").value;
    numero2 = document.getElementById("txtIdNumeroDos").value;
    
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    resultado_resta = ( numero1 - numero2 );

	alert("la resta es =" + resultado_resta);	



}

function multiplicar()
{ 
	
    let numero1;
	let numero2;
	let resultado_mult;
	
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    numero2 = document.getElementById("txtIdNumeroDos").value;
    
    //numero1 = parseInt(numero1);
      numero2 = parseInt(numero2);

    resultado_mult = ( numero1 * numero2 );

	alert("la multiplicacion es =" + resultado_mult);	





}

function dividir()
{
	
    let numero1;
	let numero2;
	let resultado_div;
	
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

    resultado_div = ( numero1 / numero2 );

	alert("la Division es =" + resultado_div);	





}

