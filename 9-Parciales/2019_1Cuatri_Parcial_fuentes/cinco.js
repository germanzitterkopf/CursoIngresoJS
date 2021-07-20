function mostrar()
{ var dias;
  var precioXdias;
  var modoPago;
  var continente;
  var descuento;
 prompt("e");
 dias = parseInt(prompt("ingrese la cantidad de dias"));
 modoPago = prompt("ingrese el modo de pago");
 precioXdias = dias * 100;  

 continente = document.getElementById("Marca").value;


 switch(continente){
    case  "América":  
    switch(modoPago){
      case "debito": descuento = 60;
       break;
      default: descuento = 50;
       break;                   
         }                                    
     break;
   
   case  "África": 
     switch(modoPago){
      case "efectivo": descuento = 75;
       break;
      case "mercadopago": descuento = 75;
       break;
      default: descuento = 60 ;
       break;                   
         }                   
      break;
  	
   case  "Europa": 
     switch(modoPago){
      case "debito": descuento = 35;
       break;
      case "mercadopago": descuento = 30;
       break;
      default: descuento = 25;
       break;                   
                } 
       break;
     default : descuento = 0; 
       break;
           }
   
   if (descuento!=0) {
    precioXdias = precioXdias - ((precioXdias/100)*descuento); 
      }
    
    else {
       precioXdias = precioXdias + ((precioXdias/100)*20); 
    
     }

 alert(precioXdias);

}
