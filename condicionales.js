function eresBellisimo() {
    let ejercicio1 = document.getElementById('input1').value;
    if (ejercicio1 == "si") {
        document.getElementById('resultado1').innerText = "Ciertamente";
    } else if (ejercicio1 == "no") {
        document.getElementById('resultado1').innerText = "No te creo";
    }
}
function divisibleEntreDos() {
    let ejercicio2 = parseInt(document.getElementById('input2').value);
    if (ejercicio2 % 2 == 0) {
        document.getElementById('resultado2').innerText = ejercicio2 + " es divisible entre 2";
    } else {
        document.getElementById('resultado2').innerText = ejercicio2 + " no es divisible entre 2";
    }
}
function esPar() {
    let numeroParOImpar = parseInt(prompt("Ingrese un numero"));
    if (numeroParOImpar % 2 == 0) {
        alert("El numero ingresado es par");
    } else {
        alert("El numero ingresado no es par");
    }
}
function ganarPremio() {
    let ejercicio4 = parseInt(document.getElementById('input4').value);
    if (ejercicio4 === 1000) {
        document.getElementById('resultado4').innerText = "Ganaste un premio";
    } else {
        document.getElementById('resultado4').innerText = ejercicio4 + " Lo sentimos, sigue participando";
    }
}
function numeroMenor() {
    let ejercicio5a = parseInt(document.getElementById('input5a').value);
    let ejercicio5b = parseInt(document.getElementById('input5b').value);
    if (ejercicio5a < ejercicio5b) {
        document.getElementById('resultado5').innerText = "El número menor es " + ejercicio5a;
    } else if (ejercicio5b < ejercicio5a) {
        document.getElementById('resultado5').innerText = "El número menor es " + ejercicio5b;
    }
}
function numeroMayor() {
    let ejercicio6a = parseInt(document.getElementById('input6a').value);
    let ejercicio6b = parseInt(document.getElementById('input6b').value);
    let ejercicio6c = parseInt(document.getElementById('input6c').value);
    if (ejercicio6b < ejercicio6a && ejercicio6c < ejercicio6a
        || ejercicio6b === ejercicio6a && ejercicio6c < ejercicio6a) {
        document.getElementById('resultado6').innerText = "El número mayor es " + ejercicio6a;
    } else if (ejercicio6a < ejercicio6b && ejercicio6c < ejercicio6b
        || ejercicio6b === ejercicio6c && ejercicio6a < ejercicio6b) {
        document.getElementById('resultado6').innerText = "El número mayor es " + ejercicio6b;
    } else if (ejercicio6a < ejercicio6c && ejercicio6b < ejercicio6c
        || ejercicio6a === ejercicio6c && ejercicio6b < ejercicio6c) {
        document.getElementById('resultado6').innerText = "El número mayor es " + ejercicio6c;
    } else if (ejercicio6a === ejercicio6b && ejercicio6a === ejercicio6c) {
        document.getElementById('resultado6').innerText = "Todos los numeros son iguales";
    }
}
function diaSemana() {
    let ejercicio7 = document.getElementById('input7').value;
    if (ejercicio7 === "lunes") {
        document.getElementById('resultado7').innerText = "¿lunes? ni modo a empezar la semana con toda.";
    } else if (ejercicio7 === "viernes") {
        document.getElementById('resultado7').innerText = "Es viernes, ¡Animo! ya casi lo logras.";
    } else if (ejercicio7 === "sabado" || ejercicio7 === "domingo") {
        document.getElementById('resultado7').innerText = "Que bonitos son los fines de semana de flojera.";
    } else if (ejercicio7 === "martes" || ejercicio7 === "miercoles" || ejercicio7 === "jueves") {
        document.getElementById('resultado7').innerText = "Ni muy cerca, ni muy lejos, sigue trabajando.";
    }
}
function calificacion() {
    let ejercicio8 = parseFloat(document.getElementById('input8').value);
    if (ejercicio8 >= 0 && ejercicio8 <= 10) {
        if (ejercicio8 === 10) {
            document.getElementById('resultado8').innerText = "excelente";
        } else if (ejercicio8 > 8 && ejercicio8 < 10) {
            document.getElementById('resultado8').innerText = "bien";
        } else if (ejercicio8 >= 6 && ejercicio8 <= 8) {
            document.getElementById('resultado8').innerText = "regular";
        } else {
            document.getElementById('resultado8').innerText = "reprobado";
        }
    }
    else {
        document.getElementById('resultado8').innerText = "Fuera de rango, dato no valido";
    }
}
function precioHelado() {
    let ejercicio9 = document.getElementById('input9').value;
    const heladoSinTopping = 50;
    let costoTotalDelHelado = 0;
    if (ejercicio9 === "oreo") {
        costoTotalDelHelado = heladoSinTopping + 10;
        document.getElementById('resultado9').textContent = "El precio del helado es de " + costoTotalDelHelado + " MXN";
    } else if (ejercicio9 === "KitKat") {
        costoTotalDelHelado = heladoSinTopping + 15;
        document.getElementById('resultado9').innerText = "El precio del helado es de " + costoTotalDelHelado + " MXN";
    } else if (ejercicio9 === "brownie") {
        costoTotalDelHelado = heladoSinTopping + 20;
        document.getElementById('resultado9').innerText = "El precio del helado es de " + costoTotalDelHelado + " MXN";
    } else {
        document.getElementById('resultado9').innerText = "No tenemos este topping, lo sentimos. El precio del helado es de " + heladoSinTopping + " MXN";
    }
}
function costoProgramaEducativo() {
    let ejercicio10a = document.getElementById('select1').value;
    let ejercicio10b = document.getElementById('select2').value;
    let Course = 4999;
    let Carrera = 3999;
    let Master = 2999;
    let costoMensualDelCurso = 0;
    let costoTotalDelCurso = 0;

    if (ejercicio10a === "Course" && ejercicio10b === "Beca Facebook") {
        costoMensualDelCurso = Course * 0.8;
        costoTotalDelCurso = costoMensualDelCurso * 2;
        document.getElementById('resultado10').textContent = "El precio mensual sería de $" + costoMensualDelCurso + " MXN. El tiempo del curso es de 2 meses y el precio total sería de $" + costoTotalDelCurso + " MXN";
    } else if (ejercicio10a === "Course" && ejercicio10b === "Beca Google") {
        costoMensualDelCurso = Course * 0.85;
        costoTotalDelCurso = costoMensualDelCurso * 2;
        document.getElementById('resultado10').textContent = "El precio mensual sería de $" + costoMensualDelCurso + " MXN. El tiempo del curso es de 2 meses y el precio total sería de $" + costoTotalDelCurso + " MXN";
    } else if (ejercicio10a === "Course" && ejercicio10b === "Beca Jesua") {
        costoMensualDelCurso = Course * 0.5;
        costoTotalDelCurso = costoMensualDelCurso * 2;
        document.getElementById('resultado10').textContent = "El precio mensual sería de $" + costoMensualDelCurso + " MXN. El tiempo del curso es de 2 meses y el precio total sería de $" + costoTotalDelCurso + " MXN";
    } else if (ejercicio10a === "Course" && ejercicio10b === "No aplica") {
        costoTotalDelCurso = Course * 2;
        document.getElementById('resultado10').textContent = "El precio mensual sería de $" + Course + " MXN. El tiempo del curso es de 2 meses y el precio total sería de $" + costoTotalDelCurso + " MXN";
    } else if (ejercicio10a === "Carrera" && ejercicio10b === "Beca Facebook") {
        costoMensualDelCurso = Carrera * 0.8;
        costoTotalDelCurso = costoMensualDelCurso * 6;
        document.getElementById('resultado10').textContent = "El precio mensual sería de $" + costoMensualDelCurso + " MXN. El tiempo del curso es de 6 meses y el precio total sería de $" + costoTotalDelCurso + " MXN";
    } else if (ejercicio10a === "Carrera" && ejercicio10b === "Beca Google") {
        costoMensualDelCurso = Carrera * 0.85;
        costoTotalDelCurso = costoMensualDelCurso * 6;
        document.getElementById('resultado10').textContent = "El precio mensual sería de $" + costoMensualDelCurso + " MXN. El tiempo del curso es de 6 meses y el precio total sería de $" + costoTotalDelCurso + " MXN";
    } else if (ejercicio10a === "Carrera" && ejercicio10b === "Beca Jesua") {
        costoMensualDelCurso = Carrera * 0.5;
        costoTotalDelCurso = costoMensualDelCurso * 6;
        document.getElementById('resultado10').textContent = "El precio mensual sería de $" + costoMensualDelCurso + " MXN. El tiempo del curso es de 6 meses y el precio total sería de $" + costoTotalDelCurso + " MXN";
    } else if (ejercicio10a === "Carrera" && ejercicio10b === "No aplica") {
        costoTotalDelCurso = Carrera * 6;
        document.getElementById('resultado10').textContent = "El precio mensual sería de $" + Carrera + " MXN. El tiempo del curso es de 6 meses y el precio total sería de $" + costoTotalDelCurso + " MXN";
    } else if (ejercicio10a === "Master" && ejercicio10b === "Beca Facebook") {
        costoMensualDelCurso = Master * 0.8;
        costoTotalDelCurso = costoMensualDelCurso * 12;
        document.getElementById('resultado10').textContent = "El precio mensual sería de $" + costoMensualDelCurso + " MXN. El tiempo del curso es de 12 meses y el precio total sería de $" + costoTotalDelCurso + " MXN";
    } else if (ejercicio10a === "Master" && ejercicio10b === "Beca Google") {
        costoMensualDelCurso = Master * 0.85;
        costoTotalDelCurso = costoMensualDelCurso * 12;
        document.getElementById('resultado10').textContent = "El precio mensual sería de $" + costoMensualDelCurso + " MXN. El tiempo del curso es de 12 meses y el precio total sería de $" + costoTotalDelCurso + " MXN";
    } else if (ejercicio10a === "Master" && ejercicio10b === "Beca Jesua") {
        costoMensualDelCurso = Master * 0.5;
        costoTotalDelCurso = costoMensualDelCurso * 12;
        document.getElementById('resultado10').textContent = "El precio mensual sería de $" + costoMensualDelCurso + " MXN. El tiempo del curso es de 12 meses y el precio total sería de $" + costoTotalDelCurso + " MXN";
    } else if (ejercicio10a === "Master" && ejercicio10b === "No aplica") {
        costoTotalDelCurso = Master * 12;
        document.getElementById('resultado10').textContent = "El precio mensual sería de $" + Master + " MXN. El tiempo del curso es de 12 meses y el precio total sería de $" + costoTotalDelCurso + " MXN";
    } else {
        document.getElementById('resultado10').innerText = "Faltan datos por seleccionar";
    }
} 
function totalAPagar() {
    let ejercicio11a = document.getElementById('select11').value;
    let ejercicio11b = parseFloat(document.getElementById('input11a').value);
    let ejercicio11c = parseFloat(document.getElementById('input11b').value);
    let totalAPagar=0;
    if (ejercicio11a ==="coche") {
        if (ejercicio11c >= 0 && ejercicio11c <= 100 && !isNaN(ejercicio11b)) {
            totalAPagar=ejercicio11b*0.2+5;
            document.getElementById('resultado11').innerText = "El total a pagar sería de: $"+totalAPagar;
        } else if (ejercicio11c >100 && !isNaN(ejercicio11b)) {
            totalAPagar=ejercicio11b*0.2+10;
            document.getElementById('resultado11').innerText = "El total a pagar sería de: $"+totalAPagar;
        } 
         else {
            document.getElementById('resultado11').innerText = "Faltan valores o algun valor es incorrecto";
        }
    } else if (ejercicio11a ==="moto") {
        if (ejercicio11c >= 0 && ejercicio11c <= 100 && !isNaN(ejercicio11b)) {
            totalAPagar=ejercicio11b*0.1+5;
            document.getElementById('resultado11').innerText = "El total a pagar sería de: $"+totalAPagar;
        } else if (ejercicio11c >100 && !isNaN(ejercicio11b)) {
            totalAPagar=ejercicio11b*0.1+10;
            document.getElementById('resultado11').innerText = "El total a pagar sería de: $"+totalAPagar;
        } 
         else {
            document.getElementById('resultado11').innerText = "Faltan valores o algun valor es incorrecto";
        }
    } else if (ejercicio11a ==="autobús") {
        if (ejercicio11c >= 0 && ejercicio11c <= 100 && !isNaN(ejercicio11b)) {
            totalAPagar=ejercicio11b*0.5+5;
            document.getElementById('resultado11').innerText = "El total a pagar sería de: $"+totalAPagar;
        } else if (ejercicio11c >100 && !isNaN(ejercicio11b)) {
            totalAPagar=ejercicio11b*0.5+10;
            document.getElementById('resultado11').innerText = "El total a pagar sería de: $"+totalAPagar;
        } 
         else {
            document.getElementById('resultado11').innerText = "Faltan valores o algun valor es incorrecto";
        }
    }
    else {
        document.getElementById('resultado11').innerText = "Por favor seleccion un vehiculo";
    }
} 
