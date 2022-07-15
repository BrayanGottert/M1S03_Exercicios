function imprimirArray (array=[]){

for(let elemento of array){
    console.log(elemento); 
}

return array.length;
}

console.log(imprimirArray([1,2,3,4,5,6,9,8,77]));