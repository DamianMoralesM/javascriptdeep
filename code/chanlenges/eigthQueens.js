/*

Using the JavaScript language, have the function EightQueens(strArr) read strArr which will be an array consisting of the locations of eight Queens on a standard 8x8 chess board with no other pieces on the board. The structure of strArr will be the following: ["(x,y)", "(x,y)", ...] where (x,y) represents the position of the current queen on the chessboard (x and y will both range from 1 to 8 where 1,1 is the bottom-left of the chessboard and 8,8 is the top-right). Your program should determine if all of the queens are placed in such a way where none of them are attacking each other. If this is true for the given input, return the string true otherwise return the first queen in the list that is attacking another piece in the same format it was provided. 

For example: if strArr is ["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"] then your program should return the string true. The corresponding chessboard of queens for this input is below (taken from Wikipedia). 

Input:"(2,1)", "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)", "(7,7)", "(5,8)"

Output:"(2,1)"


Input:"(2,1)", "(5,3)", "(6,3)", "(8,4)", "(3,4)", "(1,8)", "(7,7)", "(5,8)"

Output:"(5,3)"



*/



function EightQueens(strArr) { 

	let resultado = false;

	strArr.forEach((element,index) => {

			console.log(element.charAt(1));
	
	if (!resultado){ //hacia arriba 
		for (i = 1; i < 9 ; i++){
			console.log(i + "igual a " + element.charAt(1) + "y el indice :" + index)
			if ( i == element.charAt(1) &&	i != (index + 1) && resultado == false){
			
				resultado = true;			
			}
		}
			
		for (i = 1; i < 9 ; i++){
			console.log(i + "igual a " + element.charAt(1) + "y el indice :" + index)
			if ( i == element.charAt(3) &&	i != (index + 1) && resultado == false){
			
				resultado = true;			
			}
		}

	}
		
	
	});
/*
    por cada tupla
	If (no_hay_nada)
		for i = 1; i < 9 adelante-atras
			if i conciden con tupla
				no_hay_nada= false;
	If (no_hay_nada)
		for i = 1; i < 9...costado
			if j conciden con tupla
		
	If (no_hay_nada)
		for ...diag
end

*/
    //return strArr; 
	console.log(resultado);
		 
  }
	 
  var a = ["(2,1)", "(1,2)" , "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)", "(7,7)", "(5,8)"];

  console.log(EightQueens(a));