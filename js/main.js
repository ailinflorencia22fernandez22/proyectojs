let sandwichPrices = {
  "paleta y queso": 3800,
  "jamon y queso": 4500,
  "salame": 4500,
  "roquefort y nuez": 6800,
  "anana": 6000,
  "ternera": 6800,
  "viteltone": 7000,
  "bondiola": 7500,
  "crudo": 7500
};

function consultarPrecio(variedad) {
  if (sandwichPrices[variedad]) {
    alert("$" + sandwichPrices[variedad] + " " + variedad);
  } else {
    alert("Lo siento, no tenemos esa variedad de sándwich.");
  }
}

let keepGoing = true;

while (keepGoing) {
  let variedad = prompt("Consulte la variedad de sandwich y le decimos su precio");

  consultarPrecio(variedad);

  keepGoing = confirm("¿Desea hacer otra consulta?");
}