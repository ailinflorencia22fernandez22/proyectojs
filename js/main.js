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
let carrito = {};

let sandwichArray = Object.keys(sandwichPrices);

function consultarPrecio(variedad) {
  if (sandwichPrices[variedad]) {
    alert("$" + sandwichPrices[variedad] + " " + variedad);
  } else {
    alert("Lo siento, no tenemos esa variedad de sándwich.");
  }
}

function ordenarPorPrecio() {
  sandwichArray.sort(function(a, b) {
    return sandwichPrices[a] - sandwichPrices[b];
  });
  alert("Los sándwiches ordenados por precio son: " + sandwichArray.join(", "));
}
function agregarAlCarrito(variedad) {
  if (sandwichObj[variedad]) {
    carrito[variedad] = sandwichObj[variedad].precio;
    alert(variedad + " agregado al carrito.");
  } else {
    alert("Lo siento, no tenemos esa variedad de sándwich.");
  }
}
function calcularTotal() {
  let total = 0;
  for (let sandwich in carrito) {
    total += carrito[sandwich];
  }
  alert("El total de los sándwiches en el carrito es: $" + total);
}

let keepGoing = true;

while (keepGoing) {
  let variedad = prompt("Consulte la variedad de sandwich y le decimos su precio");

  consultarPrecio(variedad);

  keepGoing = confirm("¿Desea hacer otra consulta?");
}

ordenarPorPrecio();

let sandwichObj = {
  "paleta y queso": {
    "precio": 3800,
    "ingredientes": ["paleta", "queso"]
  },
  "jamon y queso": {
    "precio": 4500,
    "ingredientes": ["jamon", "queso"]
  },
  "salame": {
    "precio": 4500,
    "ingredientes": ["salame"]
  },
  "roquefort y nuez": {
    "precio": 6800,
    "ingredientes": ["roquefort", "nuez"]
  },
  "anana": {
    "precio": 6000,
    "ingredientes": ["anana"]
  },
  "ternera": {
    "precio": 6800,
    "ingredientes": ["ternera"]
  },
  "viteltone": {
    "precio": 7000,
    "ingredientes": ["viteltone"]
  },
  "bondiola": {
    "precio": 7500,
    "ingredientes": ["bondiola"]
  },
  "crudo": {
    "precio": 7500,
    "ingredientes": ["crudo"]
  }
};

let sandwichArray2 = [];

for (let sandwich in sandwichObj) {
  sandwichArray2.push(sandwich);
}

function consultarPrecio2(variedad) {
  if (sandwichObj[variedad]) {
    alert("$" + sandwichObj[variedad]["precio"] + " " + variedad + " - Ingredientes: " + sandwichObj[variedad]["ingredientes"].join(", "));
  } else {
    alert("Lo siento, no tenemos esa variedad de sándwich.");
  }
}

function ordenarPorIngrediente() {
  sandwichArray2.sort();
  alert("Los sándwiches ordenados por ingrediente son: " + sandwichArray2.join(", "));
}

let keepGoing2 = true;

while (keepGoing2) {
  let variedad2 = prompt("Consulte la variedad de sandwich y le decimos su precio e ingredientes");

  consultarPrecio2(variedad2);

  keepGoing2 = confirm("¿Desea hacer otra consulta?");
}

ordenarPorIngrediente();