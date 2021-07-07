/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre,mensaje;
    nombre=prompt("ingresa tu nombre");       // escribe envia y traemos dato a la hmi
    mensaje= " su nombre es : " + nombre;     // genera  una variable compuesta
    document.getElementById('txtIdNombre').value=mensaje; // 
    console.log (nombre);                     // nos muestra los datos en la consola
	alert( mensaje );
}
