/*
Have the function AlphabetSoup(str) take the str string parameter being passed and 
return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
Assume numbers and punctuation symbols will not be included in the string. 

*/

function AlphabetSoup(str) { 

   let cont = str.length;
   let strAux = " ";
   let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
   let cantVecesLetra = 0;
   
    
        
        abc.forEach(element => {
            
               cantVecesLetra = 0;
               elementoAgregar = '';
               for(i=0; i< str.length ;i++){

                    if(str[i] == element){

                        cantVecesLetra++;
                        elementoAgregar= element;
                    }

               }

               if (cantVecesLetra > 0){

                    for(i=0; i< cantVecesLetra ;i++){

                        strAux = strAux + elementoAgregar;

               }
            }


        });
        
        
        
        
        return strAux; 
   
    }
      // code goes here  
       
    
             
     