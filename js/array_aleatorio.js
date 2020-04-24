function getArraySinNumerosRepetidos(limInf, limSup) {
  let posicion = 0,
    repetido = false,
    aleatorio;
  var numerosAleatorios = new Array(limSup - limInf + 1);

  while (posicion < numerosAleatorios.length) {
    aleatorio = Math.floor(Math.random() * (limSup + 1 - limInf)) + limInf;

    for (i = 0; i < posicion; i++) {
      if (aleatorio == numerosAleatorios[i]) {
        repetido = true;
      }
    }

    if (repetido == false) {
      numerosAleatorios[posicion] = aleatorio;
      posicion++;
    }

    repetido = false;
  }

  return numerosAleatorios;
}