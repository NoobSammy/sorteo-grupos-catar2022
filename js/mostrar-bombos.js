let banderasBombos = document.getElementsByClassName("bandera-bombo");
let lugaresBombos = document.getElementsByClassName("sele-nombre");

//Se utiliza el valor de inicio para restarcelo al indice de cada bombo, esto para comenzar desde 0 y no modificar el iterador principal
function colocarBanderasyNombres(bombo, inicio, final) {
  for (i = inicio; i <= final; i++) {
    banderasBombos[i].setAttribute(
      "src",
      `img/banderas/${bombo[i - inicio].clave}.png`
    );
    lugaresBombos[i].textContent = bombo[i - inicio].pais;
  }
}

colocarBanderasyNombres(bombo1, 0, 7);
colocarBanderasyNombres(bombo2, 8, 15);
colocarBanderasyNombres(bombo3, 16, 23);
colocarBanderasyNombres(bombo4, 24, 31);
