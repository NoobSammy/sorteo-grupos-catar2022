function setPosicion1ToSelecciones1() {
  sortearBombo1();
  sortearBombo2();
  sortearBombo3();
  sortearBombo4();

  for (i = 0; i < 8; i++) {
    grupos[i].lugar1.set_posicion(1);
  }
}

function setPosicionAleatoriaToSeleccionesRestantes() {
  let numAleatorios;

  //No se usa la i porque esta se interfiere con la i de la funcion getArraySinNumerosRepetidos
  for (j = 0; j < 8; j++) {
    numAleatorios = getArraySinNumerosRepetidos(2, 4);
    grupos[j].lugar2.set_posicion(numAleatorios[0]);
    grupos[j].lugar3.set_posicion(numAleatorios[1]);
    grupos[j].lugar4.set_posicion(numAleatorios[2]);
  }
}

function ordenarSeleccionesEnSuGrupo() {
  let aux;
  setPosicion1ToSelecciones1();
  setPosicionAleatoriaToSeleccionesRestantes();

  //Ordenamiento por método burbuja
  for (i = 0; i < 8; i++) {
    for (j = 0; j < 2; j++) {
      if (grupos[i].lugar2.posicion > grupos[i].lugar3.posicion) {
        aux = grupos[i].lugar2;
        grupos[i].lugar2 = grupos[i].lugar3;
        grupos[i].lugar3 = aux;
      }
      if (grupos[i].lugar3.posicion > grupos[i].lugar4.posicion) {
        aux = grupos[i].lugar3;
        grupos[i].lugar3 = grupos[i].lugar4;
        grupos[i].lugar4 = aux;
      }
    }
  }
}

ordenarSeleccionesEnSuGrupo();