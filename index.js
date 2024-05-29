function convertirLongitud() {
    let input = parseFloat(document.getElementById('input-longitud').value);
    if (isNaN(input)) {
        document.getElementById('resultado-longitud').value = "No se colocó algún valor";
        return;
    }
    let from = document.getElementById('from-longitud').value;
    let to = document.getElementById('to-longitud').value;

    let factores = {
        'kilometro': 1000,
        'metro': 1,
        'centimetro': 0.01,
        'milimetro': 0.001,
        'milla': 1609.34,
        'yarda': 0.9144,
        'pie': 0.3048,
        'pulgada': 0.0254
    };

    let resultado = input * factores[from] / factores[to];
    document.getElementById('resultado-longitud').value = `${input} ${from} son ${resultado.toFixed(2)} ${to}`;
}

function convertirVelocidad() {
    let input = parseFloat(document.getElementById('input-velocidad').value);
    if (isNaN(input)) {
        document.getElementById('resultado-velocidad').value = "No se colocó algún valor";
        return;
    }
    let from = document.getElementById('from-velocidad').value;
    let to = document.getElementById('to-velocidad').value;

    let factores = {
        'mph': 0.44704,
        'mps': 1609.34,
        'kph': 0.277778,
        'kps': 1000,
        'nudo': 0.514444,
        'mps': 1,
        'mph': 0.000277778
    };

    let resultado = input * factores[from] / factores[to];
    document.getElementById('resultado-velocidad').value = `${input} ${from} son ${resultado.toFixed(2)} ${to}`;
}

function convertirMasa() {
    let input = parseFloat(document.getElementById('input-masa').value);
    if (isNaN(input)) {
        document.getElementById('resultado-masa').value = "No se colocó algún valor";
        return;
    }
    let from = document.getElementById('from-masa').value;
    let to = document.getElementById('to-masa').value;

    let factores = {
        'tonelada': 1000000,
        'kilogramo': 1000,
        'gramo': 1,
        'miligramo': 0.001,
        'libra': 453.592,
        'onza': 28.3495
    };

    let resultado = input * factores[from] / factores[to];
    document.getElementById('resultado-masa').value = `${input} ${from} son ${resultado.toFixed(2)} ${to}`;
}
