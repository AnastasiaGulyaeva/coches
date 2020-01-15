"use strict";
function createCar() {
    var plate = document.getElementById("plate").value;
    var color = document.getElementById("color").value;
    var brand = document.getElementById("brand").value;
    var car = new Car(plate, color, brand);
    document.body.innerText =
        "PLATE: " + car.plate + " COLOR: " + car.color + " BRAND: " + car.brand;
}
/*  let car = new Car(plate, color, brand);
  car.addWheel(new Wheel(2, "SEAT"));
  

 " WHEELS: " + JSON.stringify(car.wheels);
/* car.addWheel(new Wheel(2, "SEAT")); */
