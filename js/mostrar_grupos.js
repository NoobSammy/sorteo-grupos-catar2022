let banderasDOM = [
  (banderasGrupoA = document.getElementsByClassName("bandera-grupoA")),
  (banderasGrupoB = document.getElementsByClassName("bandera-grupoB")),
  (banderasGrupoC = document.getElementsByClassName("bandera-grupoC")),
  (banderasGrupoD = document.getElementsByClassName("bandera-grupoD")),
  (banderasGrupoE = document.getElementsByClassName("bandera-grupoE")),
  (banderasGrupoF = document.getElementsByClassName("bandera-grupoF")),
  (banderasGrupoG = document.getElementsByClassName("bandera-grupoG")),
  (banderasGrupoH = document.getElementsByClassName("bandera-grupoH")),
];
let seleccionesDOM = [
  (seleGrupoA = document.getElementsByClassName("sele-grupoA")),
  (seleGrupoB = document.getElementsByClassName("sele-grupoB")),
  (seleGrupoC = document.getElementsByClassName("sele-grupoC")),
  (seleGrupoD = document.getElementsByClassName("sele-grupoD")),
  (seleGrupoE = document.getElementsByClassName("sele-grupoE")),
  (seleGrupoF = document.getElementsByClassName("sele-grupoF")),
  (seleGrupoG = document.getElementsByClassName("sele-grupoG")),
  (seleGrupoH = document.getElementsByClassName("sele-grupoH")),
];

function mostrarBanderasyNombres(banderaGrupo, seleccionGrupo, numGrupo) {
  banderaGrupo[0].setAttribute(
    "src",
    `img/banderas/${grupos[numGrupo].lugar1.clave}.png`
  );
  seleccionGrupo[0].textContent = grupos[numGrupo].lugar1.pais;
  banderaGrupo[1].setAttribute(
    "src",
    `img/banderas/${grupos[numGrupo].lugar2.clave}.png`
  );
  seleccionGrupo[1].textContent = grupos[numGrupo].lugar2.pais;
  banderaGrupo[2].setAttribute(
    "src",
    `img/banderas/${grupos[numGrupo].lugar3.clave}.png`
  );
  seleccionGrupo[2].textContent = grupos[numGrupo].lugar3.pais;
  banderaGrupo[3].setAttribute(
    "src",
    `img/banderas/${grupos[numGrupo].lugar4.clave}.png`
  );
  seleccionGrupo[3].textContent = grupos[numGrupo].lugar4.pais;
}

for (i = 0; i < 8; i++) {
  mostrarBanderasyNombres(banderasDOM[i], seleccionesDOM[i], i);
}
