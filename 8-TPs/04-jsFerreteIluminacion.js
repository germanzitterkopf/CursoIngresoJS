/*
 AUTOR.: Zitterkopf Germán
 -------------------------
 EJERCICIO.: TP N° 4
--------------------------

4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
  

function CalcularPrecio () 
{
  var precio_des;
  const precio = 35;
  var  marcas;
  var  cant;
  var impuesto;
  var mensaje;
   
   /*-----------------------*/
   marcas = document.getElementById("Marca").value ;
    
   cant = parseInt( document.getElementById("txtIdCantidad").value ) ;

   /*-----------------------*/
     if (cant<3) {
         precio_des = precio ; 
              }
        
   /*-----------------------*/
     else
 
     switch( marcas )
       {
      
      case  "ArgentinaLuz" :
       {    
        if( cant >= 6 ) { precio_des = ( precio - ( precio * 0.50 ) ) ; } 
        if( cant == 5 ) { precio_des = ( precio - ( precio * 0.40 ) ) ; }  
        if( cant == 4 ) { precio_des = ( precio - ( precio * 0.25 ) ) ; } 
        if( cant == 3 ) { precio_des = ( precio - ( precio * 0.15 ) ) ; }  
       
       break ;
         }
     
      case  "FelipeLamparas" :
       { 
        if ( cant >= 6 ) { precio_des = ( precio - ( precio * 0.5 ) ) ; } 
        if ( cant == 5 ) { precio_des = ( precio - ( precio * 0.3 ) ) ; }  
        if ( cant == 4 ) { precio_des = ( precio - ( precio * 0.25 ) ) ; } 
        if ( cant == 3 ) { precio_des = ( precio - ( precio * 0.10 ) ) ; }  
            
       break ;
         }
     
     case  "JeLuz" :
       { 
        if ( cant >= 6 ) { precio_des = ( precio - ( precio * 0.5 ) ) ; } 
        if ( cant == 5 ) { precio_des = ( precio - ( precio * 0.3 ) ) ; }  
        if ( cant == 4 ) { precio_des = ( precio - ( precio * 0.2) ) ; } 
        if ( cant == 3 ) { precio_des = ( precio - ( precio * 0.5 ) ) ; } 
      
       break ;
         }
     
      case  "HazIluminacion" :
       {  

        if ( cant >= 6 ) { precio_des = ( precio - ( precio * 0.5 ) ) ; } 
        if ( cant == 5 ) { precio_des = ( precio - ( precio * 0.3 ) ) ; }  
        if ( cant == 4 ) { precio_des = ( precio - ( precio * 0.2) ) ; } 
        if ( cant == 3 ) { precio_des = ( precio - ( precio * 0.5 ) ) ; }	

       break ;
         }
     
      case  "Osram" :
       {  
        if ( cant >= 6 ) { precio_des = ( precio - ( precio * 0.5 ) ) ; } 
        if ( cant == 5 ) { precio_des = ( precio - ( precio * 0.3 ) ) ; }  
        if ( cant == 4 ) { precio_des = ( precio - ( precio * 0.2) ) ; } 
        if ( cant == 3 ) { precio_des = ( precio - ( precio * 0.5 ) ) ; } 
    
       break ;
           }
     
         }
      
      

       /*-----------------------*/
        
        precio_des = precio_des * cant ;

      /*-----------------------*/
        if (precio_des>120) {
              impuesto = precio_des * 0.10 ;     
                precio_des = precio_des + impuesto ;  
                 mensaje = " Usted pagó $ " + precio_des ;
                  mensaje = mensaje + " Siendo el impuesto que usted pago $ " + impuesto ;
               alert(mensaje);

                } 
 
      /*----------------------*/
        document.getElementById("txtIdprecioDescuento").value = precio_des ;


 
    }
