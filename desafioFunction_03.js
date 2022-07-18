var listaNumeros = [2,4,7,8,4,2,6,8,4,8,4,2,6];
function contarNoArrayParesImpares(array = []) {
  var qtdElementos = array.length;
  var contarPar = 0;
  //console.log("contarPar = " + contarPar)
  for (var i = 0; i< qtdElementos; i++) {
    if (parseInt(array[i]) % 2 == 0) {
      contarPar++;
    }
  }
  //console.log("contarPar2 = " + contarPar)
  //console.log("elemento  = " + elemento)
  var contarImpar = 0;
  for (var i = 0; i< qtdElementos; i++) {
    if (parseInt(array[i]) % 2 == 1) {
      contarImpar++;
    }
  }
  return [qtdElementos, contarImpar, contarPar];
}

console.log("qwertyA " + contarNoArrayParesImpares(listaNumeros)[2]);
console.log("qwertyB " + contarNoArrayParesImpares(listaNumeros)[1]);
console.log("A quantidade informada foi " + contarNoArrayParesImpares(listaNumeros)[0] +
    ", a de valores pares foi " +
    contarNoArrayParesImpares(listaNumeros)[2] +
    " e a de valores ímpares foi " +
    contarNoArrayParesImpares(listaNumeros)[1]
);
