/*AUTOR.:Zitterkopf German   
--------------------------
EJERCICIO.:  PARCIAL 2019 N°4
*/
function mostrar()
{ var num1;
  var num2;
  var resultado;
  
  num1 = prompt("ingrese el primer numero");
  num2 = prompt("ingrese el segundo numero");

 if(num1==num2){
 	 resultado = num1+num2;
          }
   else{
     num1 = parseInt(num1);
     num2 = parseInt(num2);

       if(num1>num2){
         resultado = num1-num2;
                
         if(resultado > 10){
            resultado ="la rresta es " + resultado + " y supero a 10";
             }
           }
        else resultado = num1 +  num2 ;
        
       }
         
    alert(resultado);
 }