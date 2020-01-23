"use strict";
var userCar;
// añadir nuevo coche
function createCar() {
    var plate = document.getElementById("plate").value;
    var expresion = /^[0-9]{4}[a-zA-Z]{3}$/;
    if (expresion.test(plate) == true) {
        var color = document.getElementById("color").value;
        var brand = document.getElementById("brand").value;
        userCar = new Car(plate, color, brand);
        document.getElementById("car").innerText = "Car: ";
        document.getElementById("infoPlate").innerText =
            "Plate: " + userCar.plate;
        document.getElementById("infoColor").innerText =
            "Color: " + userCar.color;
        document.getElementById("infoBrand").innerText =
            "Brand: " + userCar.brand;
        showWheelForm();
    }
    else {
        alert("La matricula no es correcta. Tiene mantener 4 numeros y 3 letras");
        return;
    }
}
// ocultar/mostrar formulario
function showWheelForm() {
    var carForm = document.getElementById("carForm");
    var carWheel = document.getElementById("wheelform");
    var cardCar = document.getElementById("cardCar");
    carForm.classList.add("d-none");
    carWheel.classList.remove("d-none");
    cardCar.classList.remove("d-none");
}
function showWheelResult() {
    var cardWheel = document.getElementById("cardWheel");
    cardWheel.classList.remove("d-none");
}
// añadir ruedas
function createWheel() {
    var error = 0;
    for (var i = 1; i < 5; i++) {
        var diameter = document.getElementById("diameter" + i)
            .valueAsNumber;
        if (!validar(diameter)) {
            alert("El diamertro de la rueda " +
                i +
                " tiene que ser mas que 0.4 y menos que 2.");
            error++;
        }
    }
    if (error == 0) {
        for (var i = 1; i < 5; i++) {
            var diameter = document.getElementById("diameter" + i)
                .valueAsNumber;
            var brand = document.getElementById("brand" + i)
                .value;
            userCar.addWheel(new Wheel(diameter, brand));
        }
    }
    // imprimir los resultados de wheels
    showWheelResult();
    document.getElementById("wheel").innerText = "Wheels: ";
    document.getElementById("infoWheel1").innerText =
        "Wheel 1 : Brand: " +
            userCar.wheels[0].brand +
            " Diameter: " +
            userCar.wheels[0].diameter;
    document.getElementById("infoWheel2").innerText =
        "Wheel 2 : Brand: " +
            userCar.wheels[1].brand +
            " Diameter: " +
            userCar.wheels[1].diameter;
    document.getElementById("infoWheel3").innerText =
        "Wheel 3 : Brand: " +
            userCar.wheels[2].brand +
            " Diameter: " +
            userCar.wheels[2].diameter;
    document.getElementById("infoWheel4").innerText =
        "Wheel 4 : Brand: " +
            userCar.wheels[3].brand +
            " Diameter: " +
            userCar.wheels[3].diameter;
}
// comprobar las ruedas
function validar(diameter) {
    if (diameter > 0.4 && diameter < 2) {
        return true;
    }
    else {
        return false;
    }
}
