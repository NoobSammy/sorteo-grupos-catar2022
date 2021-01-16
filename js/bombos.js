class seleccion {
  constructor(pais, confederacion, clave) {
    this.pais = pais;
    this.confederacion = confederacion;
    this.clave = clave;
  }

  set_posicion(posicion) {
    this.posicion = posicion;
  }
}

let bombo1 = [
  (catar = new seleccion("CATAR", "AFC", "qat")),
  (belgica = new seleccion("BÉLGICA", "UEFA", "bel")),
  (francia = new seleccion("FRANCIA", "UEFA", "fra")),
  (brasil = new seleccion("BRASIL", "Conmebol", "bra")),
  (inglaterra = new seleccion("INGLATERRA", "UEFA", "eng")),
  (uruguay = new seleccion("URUGUAY", "Conmebol", "uru")),
  (croacia = new seleccion("CROACIA", "UEFA", "cro")),
  (portugal = new seleccion("PORTUGAL", "UEFA", "por")),
];

let bombo2 = [
  (espagna = new seleccion("ESPAÑA", "UEFA", "esp")),
  (argentina = new seleccion("ARGENTINA", "Conmebol", "arg")),
  (colombia = new seleccion("COLOMBIA", "Conmebol", "col")),
  (mexico = new seleccion("MÉXICO", "Concacaf", "mex")),
  (suiza = new seleccion("SUIZA", "UEFA", "sui")),
  (italia = new seleccion("ITALIA", "UEFA", "ita")),
  (holanda = new seleccion("HOLANDA", "UEFA", "ned")),
  (alemania = new seleccion("ALEMANIA", "UEFA", "ger")),
];

let bombo3 = [
  (dinamarca = new seleccion("DINAMARCA", "UEFA", "den")),
  (chile = new seleccion("CHILE", "Conmebol", "chi")),
  (suecia = new seleccion("SUECIA", "UEFA", "swe")),
  (polonia = new seleccion("POLONIA", "UEFA", "pol")),
  (senegal = new seleccion("SENEGAL", "CAF", "sen")),
  (usa = new seleccion("EUA", "Concacaf", "usa")),
  (tunez = new seleccion("TÚNEZ", "CAF", "tun")),
  (japon = new seleccion("JAPÓN", "AFC", "jpn")),
];

let bombo4 = [
  (nigeria = new seleccion("NIGERIA", "CAF", "nga")),
  (iran = new seleccion("IRÁN", "AFC", "irn")),
  (algeria = new seleccion("ALGERIA", "CAF", "alg")),
  (corea = new seleccion("COREA DEL SUR", "AFC", "kor")),
  (australia = new seleccion("AUSTRALIA", "AFC", "aus")),
  (marruecos = new seleccion("MARRUECOS", "CAF", "mar")),
  (costaRica = new seleccion("COSTA RICA", "Concacaf", "crc")),
  (jamaica = new seleccion("JAMAICA", "Concacaf", "jam")),
];
