function sortearBombo4() {
  let repetido = true,
    numAleatorios,
    seleccionBombo4;

  //Mientras se encuentren dos selecciones de la misma confederación
  while (repetido == true) {
    numAleatorios = getArraySinNumerosRepetidos(0, 7);
    repetido = false;

    //Asignarle a cada grupo una selección aleatoria del bombo 4
    for (i = 0; i < 8; i++) {
      seleccionBombo4 = bombo4[numAleatorios[i]];
      grupos[i].set_lugar4(seleccionBombo4);
    }

    repetido = buscarConfederacionRepetida3();
  }
}

function buscarConfederacionRepetida3() {
  let seleccion1, seleccion2, seleccion3, seleccion4;

  for (i = 0; i < 8; i++) {
    seleccion1 = grupos[i].lugar1;
    seleccion2 = grupos[i].lugar2;
    seleccion3 = grupos[i].lugar3;
    seleccion4 = grupos[i].lugar4;

    if (
      seleccion4.confederacion == seleccion1.confederacion ||
      seleccion4.confederacion == seleccion2.confederacion ||
      seleccion4.confederacion == seleccion3.confederacion
    ) {
      return true;
    }
  }
}