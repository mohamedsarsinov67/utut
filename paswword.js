const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers   = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols   = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-'];
let allowedSymbols =[]
let string = "";
allowedSymbols.push(lowercase, uppercase);
const lenght = prompt();
const numbers1 = confirm("Do you want some nuber?:");
const specSymbols = confirm("Do you want some spec symbols?:");
while(true){
    if(numbers1){
        allowedSymbols.push(numbers)
    }
    if(specSymbols){
        allowedSymbols.push(symbols)
    }
    for(i = 0; i <= string.length; i++){
        
    }
}
