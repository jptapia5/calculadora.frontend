let numero1 = '';
let numero2 = '';
let operacion = '0';
let resultado = '';

var valorAct = 0;
var chain = true;

$(document).ready(()=>{
  $(".op").prop("disabled", true);
  $("#resultado").val(0);
});

function agregarNumero(numero) {
  if(!chain)
    document.getElementById("resultado").value = $('#resultado').val()+numero;
  else{
    document.getElementById("resultado").value = numero;
    chain = false;
  }
  $(".op").prop("disabled", false);
  $(".equ").prop("disabled", false);
}

function agregarDecimal(){
  if($("#resultado").val() !== ""){
    $("#resultado").val($("#resultado").val()+".");
    $(".op").prop("disabled", true);
    $(".dec").prop("disabled", true);
    $(".equ").prop("disabled", true);
    chain = false;
  }
}

function agregarOperacion(op) {
  $(".dec").prop("disabled", false);
  var valOper = parseFloat($("#resultado").val());
  if (operacion === '+') {
    valorAct += valOper;
  } else if (operacion === '-') {
    valorAct -= valOper;
  } else if (operacion === '*') {
    valorAct *= valOper;
  } else if (operacion === '/') {
    if ($("#resultado").val() === '0') {
        alert('No se puede dividir por cero');
        return;
    }
    valorAct /= valOper;
  }else if(operacion === "%")
    valorAct %= valOper;
  else if(operacion === "^")
    valorAct = poten(valorAct, valOper);
  
  if(operacion !== "0"){
    $("#resultado").val(valorAct);
    chain = true;
  }else{
    valorAct = parseFloat($("#resultado").val());
    $("#resultado").val(0);
    chain = true;
  }
   $(".op").prop("disabled", true);
   operacion = op;
}

function poten(val1, val2){
  if(val2 == 0)
    return 1;
  else
    return val1*poten(val1, val2-1);
}

function raiz() {
  if (parseFloat($("#resultado").val()) < 0) {
      alert('número imaginario, valor debe ser igual o mayor a 0');
      return;
  }
  valorAct = Math.sqrt(parseFloat($("#resultado").val()));
  $("#resultado").val(valorAct);
  operacion = "0";
  chain = true;
  $(".dec").prop("disabled", false);
}

function calcular(){
  $(".dec").prop("disabled", false);
  var valOper = parseFloat($("#resultado").val());
  if (operacion === '+') {
    valorAct += valOper;
  } else if (operacion === '-') {
    valorAct -= valOper;
  } else if (operacion === '*') {
    valorAct *= valOper;
  } else if (operacion === '/') {
    if ($("#resultado").val() === '0') {
        alert('No se puede dividir por cero');
        return;
    }
    valorAct /= valOper;
  }else if(operacion === "%")
    valorAct %= valOper;
  else if(operacion === "^")
    valorAct = poten(valorAct, valOper);
    
  $("#resultado").val(valorAct);
  chain = true;
  operacion = "0";
}

/*
function agregarNumero(numero) {
    if (operacion === '') {
        numero1 += numero;
    } else {
        numero2 += numero;
    }
    actualizarResultado();
}
*/
/*
function agregarOperacion(op) {
    operacion = op;
    actualizarResultado();
}
*/
function borrar() {
    numero1 = '';
    numero2 = '';
    operacion = '0';
    resultado = '';
    valorAct = 0;
    chain = true;
    $(".op").prop("disabled", true);
    $(".dec").prop("disabled", false);
    $(".equ").prop("disabled", false);
    $("#resultado").val(0);
    //actualizarResultado();
}

function actualizarResultado() {
    let res = '';
    if (numero1 !== '') {
        res += numero1;
    }
    if (operacion !== '') {
        res += ' ' + operacion + ' ';
    }
    if (numero2 !== '') {
        res += numero2;
    }
    document.getElementById('resultado').value = res;
}

function validarNumeros() {
    if (numero1 === '' || numero2 === '') {
        alert('Por favor ingresa ambos números');
        return false;
    } else if (isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor ingresa números válidos');
        return false;
    }
    return true;
}
/*
function calcular() {
    if (!validarNumeros()) {
        return;
    }

    let res = '';
    if (operacion === '+') {
        res = parseFloat(numero1) + parseFloat(numero2);
    } else if (operacion === '-') {
        res = parseFloat(numero1) - parseFloat(numero2);
    } else if (operacion === '*') {
        res = parseFloat(numero1) * parseFloat(numero2);
    } else if (operacion === '/') {
        if (numero2 === '0') {
            alert('No se puede dividir por cero');
            return;
        }
        res = parseFloat(numero1) / parseFloat(numero2);
    }
    resultado = res;
    numero1 = res;
    numero2 = '';
    operacion = '';
    actualizarResultado();
}
*/
function calcularPorcentaje() {
    let pantalla = document.getElementById("pantalla");
    let resultado = eval(pantalla.value);
    pantalla.value = resultado/100;
  }

  /*
function raiz() {
    if (numero1 === '') {
        alert('Por favor ingresa un número');
        return;
    }
    let res = Math.sqrt(parseFloat(numero1));
    resultado = res;
    numero1 = res;
    actualizarResultado();
}
*/

function potencia() {
    if (numero1 === '') {
        alert('Por favor ingresa un número');
        return;
    }
    let res = Math.pow(parseFloat(numero1), 2);
    resultado = res;
    numero1 = res;
    actualizarResultado();
}

function negativo() {
    if (numero1 === '') {
        alert('Por favor ingresa un número');
        return;
    }
    let res = parseFloat(numero1) * -1;
    resultado = res;
    numero1 = res;
    actualizarResultado();
}