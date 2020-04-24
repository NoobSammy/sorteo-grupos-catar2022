class grupo {
  constructor(nombre) {
    this.nombre = nombre;
  }

  set_lugar1(lugar1) {
    this.lugar1 = lugar1;
  }
  set_lugar2(lugar2) {
    this.lugar2 = lugar2;
  }
  set_lugar3(lugar3) {
    this.lugar3 = lugar3;
  }
  set_lugar4(lugar4) {
    this.lugar4 = lugar4;
  }
}

let grupos = [
  (grupoA = new grupo("A")),
  (grupoB = new grupo("B")),
  (grupoC = new grupo("C")),
  (grupoD = new grupo("D")),
  (grupoE = new grupo("E")),
  (grupoF = new grupo("F")),
  (grupoG = new grupo("G")),
  (grupoH = new grupo("H")),
];
