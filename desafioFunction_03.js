function contarNoArrayParesImpares(array = []) {
  var contarPar = 0;
  for (let elemento of array) {
    if (elemento % 2 == 0) {
      contarPar++;
    }
  }
  var contarImpar = 0;
  for (let elemento of array) {
    if (elemento % 2 == 1) {
      contarImpar++;
    }
  }
  var qtdElementos = array.length;
  return [qtdElementos, contarImpar, contarPar];
}

console.log(contarNoArrayParesImpares([1, 2, 3, 6, 5, 44, 7, 8, 99]).contarPar);
console.log(
  contarNoArrayParesImpares([1, 2, 3, 6, 5, 44, 7, 8, 99]).contarImpar
);
console.log(
  "A quantidade informada foi" +
    contarNoArrayParesImpares([1, 2, 3, 6, 5, 44, 7, 8, 99]).qtdElementos +
    ", a de valores pares foi" +
    contarNoArrayParesImpares([1, 2, 3, 6, 5, 44, 7, 8, 99]).contarPar +
    " e a de valores ímpares foi" +
    contarNoArrayParesImpares([1, 2, 3, 6, 5, 44, 7, 8, 99]).contarImpar
);
