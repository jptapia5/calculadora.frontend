// Función para validar números
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// Función para calcular la raíz cuadrada
function calcularRaizCuadrada(numero) {
  return Math.sqrt(numero);
}

// Función para calcular el resultado
function calcular() {
  // Obtener los valores de entrada
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  // Validar los valores de entrada
  if (!isNumber(num1) || !isNumber(num2)) {
    alert("Por favor, ingrese solo numeros validos");
    return;
  }

  // conversion entrada a números
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  // Operaciones
  var suma = num1 + num2;
  var resta = num1 - num2;
  var multiplicacion = num1 * num2;
  var division = num1 / num2;
  var potencia = calcularPotencia(num1, num2);
  var raizCuadrada1 = calcularRaizCuadrada(num1);
  var raizCuadrada2 = calcularRaizCuadrada(num2);
  
   if (num2 === 0) {
    alert("Matematicamente, no se puede dividir por cero");
    return;
  }

  // Mostrar los resultados para el html
  document.getElementById("resultadoSuma").innerHTML = suma;
  document.getElementById("resultadoResta").innerHTML = resta;
  document.getElementById("resultadoMultiplicacion").innerHTML = multiplicacion;
  document.getElementById("resultadoDivision").innerHTML = division;
  document.getElementById("resultadoPotencia").innerHTML = potencia;
  document.getElementById("resultadoRaiz1").innerHTML = raizCuadrada1;
  document.getElementById("resultadoRaiz2").innerHTML = raizCuadrada2;
}

function openURL() {
  var imagen = document.createElement("div");
  imagen.classList.add("imagen");

  var iframe = document.createElement("iframe");
  iframe.src = "http://3.bp.blogspot.com/-upfn9ceEp1o/UIb8MDrA2uI/AAAAAAAAAIo/cE1qWSZUR7s/s640/2.10.JPG";
  
  imagen.appendChild(iframe);
  
  document.body.appendChild(imagen);
  
  imagen.onclick = function() {
    imagen.style.display = "none";
  }
  
  
}