document.getElementById('form_pesoIdeal').addEventListener('submit', function(event) {
    event.preventDefault();

    const sexo = document.getElementById('sexo1').value;
    const edad = parseInt(document.getElementById('edad1').value);
    const pesoActual = parseFloat(document.getElementById('pesoActual1').value);
    let estatura = parseFloat(document.getElementById('estatura1').value);

    let pesoIdeal, imc, calificacion,pesoPerder;

    if (sexo === 'Masculino') {
        pesoIdeal = estatura - 100 - ((estatura - 150) / 4);
    } else if (sexo === 'Femenino') {
        pesoIdeal = estatura - 100 - ((estatura - 150) / 2);
    } else {
        document.getElementById('resultado_').innerHTML = '<div class="alert alert-danger">Seleccione un sexo válido.</div>';
        return;
    }
    pesoPerder = pesoActual - pesoIdeal;
    estatura = estatura / 100;
    imc = pesoActual / (estatura * estatura);

    switch(true) {
        case (imc < 18.5):
            calificacion = '<span class="badge text-bg-warning">Bajo Peso</span>';
            break;
        case (imc >= 18.5 && imc < 24.9):
            calificacion = '<span class="badge text-bg-success">Peso Normal</span>';
            break;
        case (imc >= 25 && imc < 29.9):
            calificacion = '<span class="badge text-bg-warning">Sobre Peso</span>';
            break;
        case (imc >= 30 && imc < 34.9):
            calificacion = '<span class="badge text-bg-danger">Obesidad Grado I</span>';
            break;
        case (imc >= 35 && imc < 39.9):
            calificacion = '<span class="badge text-bg-warning">Obesidad Grado II</span>';
            break;
        case (imc >= 40):
            calificacion = '<span class="badge text-bg-danger">Obesidad Grado III</span>';
            break;
        default:
            calificacion = 'Calificación no disponible';
    }

    document.getElementById('resultado_').innerHTML = 
    `<div class="alert alert-secondary" role="alert">
        <strong>Resultado:</strong><br>
        Edad: ${edad} años<br>
        Peso Actual: ${pesoActual} kg<br>
        Altura: ${estatura * 100} cm<br>
        IMC: ${imc.toFixed(1)} tiene ${calificacion}<br>
        Peso Ideal: <span class="badge text-bg-info">${pesoIdeal.toFixed(1)} kg</span><br>
        Peso a Perder: <span class="badge text-bg-warning">${pesoPerder.toFixed(1)} kg</span>
    </div>`;
});