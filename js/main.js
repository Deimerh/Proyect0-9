
function imc(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario

    let peso = parseFloat(document.getElementById("peso2").value);
    let estatura = parseFloat(document.getElementById("estatura2").value);

    resultado2 = peso / (estatura * 2);
    
    if (peso > 1 || estatura > 1) {
      document.getElementById("resultado2").innerHTML = "<div class='alert alert-success' role='alert'><strong>Respuesta:</strong> El índice de masa corporal es: " + resultado2.toFixed(2) + "</div>";
    } else {
      document.getElementById("resultado2").innerHTML = "<div class='alert alert-danger' role='alert'><strong>Error:</strong> Por favor, ingresa valores válidos para peso y estatura.</div>";
    }
  }


  function cambio_divisa(event) {
    event.preventDefault();
    let cop = parseFloat(document.getElementById("cop").value);

    if (cop > 0) {
      let total = cop / 4.148; // precio del dolar 
      document.getElementById("total").innerHTML = "<div class='alert alert-success' role='alert'><strong>Respuesta:</strong> El cambio de divisas de pesos colombiano a dolares es: " + total.toFixed(2) + "</div>";
    } else {
      document.getElementById("total").innerHTML = "<div class='alert alert-danger' role='alert'><strong>Error:</strong> Por favor, ingresa valores válidos para COP.</div>";
    }
  }

  function dias_pagado(event) {
    event.preventDefault();
    let dia = parseFloat(document.getElementById("dia").value);
    let total_;

    if (dia > 0) {
      if (dia >= 15) {
        total_ = dia * 25000;
      } else {
        total_ = dia * 16000;
      }
      document.getElementById("total_").innerHTML = "<div class='alert alert-success' role='alert'><strong>Respuesta:</strong> El total de dias pagado es: " + total_.toFixed(2) + "</div>";
    } else {
      document.getElementById("total_").innerHTML = "<div class='alert alert-danger' role='alert'><strong>Error:</strong> Por favor, ingresa un valor válido para los días.</div>";
    }
  }

  function calcularDescuento(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario

    let p_compra = parseInt(document.getElementById("p_compra").value);

    if (p_compra >= 10 || p_compra < 20) {
      descuento = p_compra * 0.10;
    } else if (p_compra >= 20 || p_compra < 30) {
      descuento = p_compra* 0.20;
    } else if (p_compra >= 30) {
      descuento = p_compra * 0.30;
    } else {
      descuento = 0;
    }

    let totalDescuento = p_compra * 100 * (1 - descuento);

    document.getElementById("calcular").innerHTML = "<div class='alert alert-success' role='alert'><strong>Respuesta:</strong> El total con descuento es: $" + totalDescuento.toFixed(2) + "</div>";
  }


