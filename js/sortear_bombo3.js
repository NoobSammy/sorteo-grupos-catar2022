function sortearBombo3() {
  let repetido = true,
    numAleatorios,
    seleccionBombo3;

  //Mientras se encuentren más de dos selecciones de la misma confederación o más de tres selecciones europeas en el mismo grupo
  while (repetido == true) {
    numAleatorios = getArraySinNumerosRepetidos(0, 7);
    repetido = false;

    //Asignarle a cada grupo una selección aleatoria del bombo 3
    for (i = 0; i < 8; i++) {
      seleccionBombo3 = bombo3[numAleatorios[i]];
      grupos[i].set_lugar3(seleccionBombo3);
    }

    repetido = buscarConfederacionRepetida2();
  }
}

function buscarConfederacionRepetida2() {
  let seleccion1, seleccion2, seleccion3;

  for (i = 0; i < 8; i++) {
    seleccion1 = grupos[i].lugar1;
    seleccion2 = grupos[i].lugar2;
    seleccion3 = grupos[i].lugar3;

    if (seleccion3.confederacion != "UEFA") {
      if (
        seleccion3.confederacion == seleccion1.confederacion ||
        seleccion3.confederacion == seleccion2.confederacion
      ) {
        return true;
      }
    } else {
      if (
        seleccion1.confederacion == "UEFA" &&
        seleccion2.confederacion == "UEFA"
      ) {
        return true;
      }
    }
  }
}