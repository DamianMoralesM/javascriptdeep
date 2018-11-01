
var cart1 = {puntaje:2, jugador:"1"};
var cart2 = {puntaje:3, jugador:"2"};

  exports.evaluarGanador = function(carta1, carta2){

     if (carta1.puntaje > carta2.puntaje){
         return carta1
     } else 
     
     if(carta1.puntaje < carta2.puntaje){
        return carta2
     }

     return null;
     //empate

}

console.log( evaluarGanador(cart1,cart2) );
