let numero1 = '';
let numero2 = '';
let operacion = '';
let resultado = '';

function agregarNumero(numero) {
    if (operacion === '') {
        numero1 += numero;
    } else {
        numero2 += numero;
    }
    actualizarResultado();
}

function agregarOperacion(op) {
    operacion = op;
    actualizarResultado();
}

function borrar() {
    numero1 = '';
    numero2 = '';
    operacion = '';
    resultado = '';
    actualizarResultado();
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
function calcularPorcentaje() {
    let pantalla = document.getElementById("pantalla");
    let resultado = eval(pantalla.value);
    pantalla.value = resultado/100;
  }
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
