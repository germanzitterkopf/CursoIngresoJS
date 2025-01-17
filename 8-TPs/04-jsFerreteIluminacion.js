/*
 AUTOR.: Zitterkopf Germán
 -------------------------
 EJERCICIO.: TP N° 4 SWITCH SWITCH
--------------------------

4.  Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.  Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.  Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.  Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.  Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
  

function CalcularPrecio () 
{
  var precio_des;
  const PRECIO = 35;
  var  marcas;
  var  cant;
  var impuesto;
  var mensaje;
  var precioBruto; 
   /*-----------------------*/
   marcas = document.getElementById("Marca").value ;    
   cant = parseInt( document.getElementById("txtIdCantidad").value ) ;
 
     switch( marcas ){
        
        case  "ArgentinaLuz":     
        switch(cant){
          case 3 : descuento = 15;
            break;
          case 4 : descuento = 25;
            break;
          case 5 : descuento = 40;
            break;
            default :if(cant>=6)
                      { descuento=50;
                              }
                    else descuento = 0;
                      }
            break;

        case  "FelipeLamparas":      
         switch(cant){
          case 3 : descuento = 10;
            break;
          case 4 : descuento = 25;
            break;
          case 5 : descuento = 30;
            break;
          default :if(cant>=6)
                      { descuento=50;
                              }
                    else descuento = 0;
                      }
                
            break ;
               
        default:
         switch(cant){
          case 3 : descuento = 10;
            break;
          case 4 : descuento = 20;
            break;
          case 5 : descuento = 30;
            break;
          default :if(cant>=6)
                      { descuento=50;
                              }
                    else descuento = 0;
                   }
            
            break;

             }
             
        precioBruto = PRECIO - ((PRECIO/100)* descuento) ;        
        precio_des = precioBruto * cant ;
      
        if (precio_des>120) {
            impuesto = precio_des + ((precio_des/100) * 10 );     
            precio_des = precio_des + impuesto ;  
            mensaje = " Usted pagó $ " + precio_des ;
            mensaje = mensaje + " Siendo el impuesto que usted pago $ " + impuesto ;
            alert(mensaje);
               } 

        document.getElementById("txtIdprecioDescuento").value = precio_des ; 
    }