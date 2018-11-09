/*
Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
 Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.


 Input:"hello*3"

Output:"Ifmmp*3"


Input:"fun times!"

Output:"gvO Ujnft!"
*/


    /* Solucion:
        Para cada elemento simularé el cifrado del cesar y si es vocal lo convierto a MAYUSCULA */

function LetterChanges(str) { 

    let abc = 'abcdefghijklmnopqrstuvwxyz';
    let entrada = str.split('');
    let sal = "";
    let aux = "";
    vocals = "aeiou";

    entrada.forEach(element => {  
        if (abc.includes(element)) {
       
          aux = abc.charAt( abc.indexOf(element) + 1);
       
            if (vocals.indexOf(aux) !== -1 ){ 
             aux = aux.toUpperCase();
            }
       
          sal = sal + aux ;
        }

        else {
        sal = sal + element;    
      }


    });

    

    return sal; 
           
  }
  

  

  console.log(LetterChanges("a confusing /:sentence:/[ this is not!!!!!!!~"));

 