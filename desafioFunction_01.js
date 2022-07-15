// somaDoisNumeros(num1, num2){
//    console.log(num1+num2);
//}


const indicarParImpar = function(num1){
    if(num1 %2 == 0){
       var resultado = document.write("Seu número é par!")
    }
    else if(num1 %2 == 1){
        var resultado = document.write("Seu número é impar!")
    }
    else {
        var resultado = document.write("Entrada inválida!")
    }
    return resultado;
} 

indicarParImpar(window.prompt("Inserir um número para testar se é par ou impar."));

//function imprimirArray (arr[]){

//}