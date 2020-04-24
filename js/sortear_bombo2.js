function sortearBombo2() {
  let repetido = true,
    numAleatorios,
    seleccionBombo2;

  //Mientras se encuentre selecciones de la misma confederacion (excepto Europa) en el mismo grupo
  while (repetido == true) {
    numAleatorios = getArraySinNumerosRepetidos(0, 7);
    repetido = false;

    //Asignarle a cada grupo una selección aleatoria del bombo 2
    for (i = 0; i < 8; i++) {
      seleccionBombo2 = bombo2[numAleatorios[i]];
      grupos[i].set_lugar2(seleccionBombo2);
    }

    repetido = buscarConfederacionRepetida1();
  }
}

function buscarConfederacionRepetida1() {
  let seleccion1, seleccion2;

  for (i = 0; i < 8; i++) {
    seleccion1 = grupos[i].lugar1;
    seleccion2 = grupos[i].lugar2;

    if (seleccion2.confederacion != "UEFA") {
      if (seleccion1.confederacion == seleccion2.confederacion) {
        return true;
      }
    }
  }
}