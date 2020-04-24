class seleccion {
  constructor(pais, confederacion) {
    this.pais = pais;
    this.confederacion = confederacion;
  }

  set_posicion(posicion) {
    this.posicion = posicion;
  }
}

let bombo1 = [
  (catar = new seleccion("Catar", "AFC")),
  (belgica = new seleccion("Bélgica", "UEFA")),
  (francia = new seleccion("Francia", "UEFA")),
  (brasil = new seleccion("Brasil", "Conmebol")),
  (inglaterra = new seleccion("Inglaterra", "UEFA")),
  (uruguay = new seleccion("Uruguay", "Conmebol")),
  (croacia = new seleccion("Croacia", "UEFA")),
  (portugal = new seleccion("Portugal", "UEFA")),
];

let bombo2 = [
  (espagna = new seleccion("España", "UEFA")),
  (argentina = new seleccion("Argentina", "Conmebol")),
  (colombia = new seleccion("Colombia", "Conmebol")),
  (mexico = new seleccion("México", "Concacaf")),
  (suiza = new seleccion("Suiza", "UEFA")),
  (italia = new seleccion("Italia", "UEFA")),
  (holanda = new seleccion("Holanda", "UEFA")),
  (alemania = new seleccion("Alemania", "UEFA")),
];

let bombo3 = [
  (dinamarca = new seleccion("Dinamarca", "UEFA")),
  (chile = new seleccion("Chile", "Conmebol")),
  (suecia = new seleccion("Suecia", "UEFA")),
  (polonia = new seleccion("Polonia", "UEFA")),
  (senegal = new seleccion("Senegal", "CAF")),
  (usa = new seleccion("EUA", "Concacaf")),
  (tunez = new seleccion("Túnez", "CAF")),
  (japon = new seleccion("Japón", "AFC")),
];

let bombo4 = [
  (nigeria = new seleccion("Nigeria", "CAF")),
  (iran = new seleccion("Irán", "AFC")),
  (algeria = new seleccion("Algeria", "CAF")),
  (corea = new seleccion("Corea del sur", "AFC")),
  (australia = new seleccion("Australia", "AFC")),
  (marruecos = new seleccion("Marruecos", "CAF")),
  (costaRica = new seleccion("Costa Rica", "Concacaf")),
  (jamaica = new seleccion("Jamaica", "Concacaf")),
];