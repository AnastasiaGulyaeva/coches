"use strict";
var car = Car;
function createCar() {
    var plate = document.getElementById("plate").value;
    var color = document.getElementById("color").value;
    var brand = document.getElementById("brand").value;
    var car = new Car(plate, color, brand);
    document.getElementById("infoCar").innerText =
        "PLATE: " + car.plate + " COLOR: " + car.color + " BRAND: " + car.brand;
    showWheelForm();
}
function showWheelForm() {
    var carForm = document.getElementById("carForm");
    var carWheel = document.getElementById("wheelform");
    carForm.classList.add("d-none");
    carWheel.classList.remove("d-none");
}
function createWheel() {
    var brandWheel = document.getElementsByClassName("brand")
        .value;
    var diameter = (document.getElementsByClassName("diameter")).value;
    /* car.addWheel(new Wheel(diameter, brand));
    (<HTMLInputElement>document.getElementById("infoWheel")).innerText =
      " WHEELS: " + JSON.stringify(car.wheels);*/
}
