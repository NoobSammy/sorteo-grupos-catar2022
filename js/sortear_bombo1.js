function sortearBombo1() {
  let numAleatorios, seleccionBombo1;

  //Colocar al anfitrion el el lugar 1 del primer grupo
  grupos[0].set_lugar1(bombo1[0]);

  numAleatorios = getArraySinNumerosRepetidos(1, 7);

  //Asignarle a cada grupo una selecciónale atoria del bombo 1
  for (i = 1; i < 8; i++) {
    seleccionBombo1 = bombo1[numAleatorios[i - 1]];
    grupos[i].set_lugar1(seleccionBombo1);
  }
}