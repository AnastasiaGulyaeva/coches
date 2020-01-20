"use strict";
var userCar;
function createCar() {
    var plate = document.getElementById("plate").value;
    var color = document.getElementById("color").value;
    var brand = document.getElementById("brand").value;
    userCar = new Car(plate, color, brand);
    document.getElementById("infoCar").innerText =
        "PLATE: " +
            userCar.plate +
            " COLOR: " +
            userCar.color +
            " BRAND: " +
            userCar.brand;
    showWheelForm();
}
function showWheelForm() {
    var carForm = document.getElementById("carForm");
    var carWheel = document.getElementById("wheelform");
    carForm.classList.add("d-none");
    carWheel.classList.remove("d-none");
}
function createWheel() {
    for (var i = 1; i < 5; i++) {
        var diameter = document.getElementById("diameter" + i)
            .valueAsNumber;
        var brand = document.getElementById("brand" + i).value;
        console.log(diameter + brand);
        userCar.addWheel(new Wheel(diameter, brand));
    }
    document.getElementById("infoWheel").innerText =
        " WHEELS: " + JSON.stringify(userCar.wheels);
}
/* for (i = 1; i < 5; i++) {
    let diameter = (<HTMLInputElement>document.getElementById("diameter[i]")).valueAsNumber;
    let brand = (<HTMLInputElement>document.getElementById("brand[i]]")).value;
    userCar.addWheel(new Wheel(diameter, brand));
    }

let diameter = (<HTMLInputElement>document.getElementById("diameter1"))
    .valueAsNumber;
  let brand = (<HTMLInputElement>document.getElementById("brand1")).value;

  let wheel = new Wheel(diameter, brand);
  userCar.addWheel(wheel);


на подумать!!!
for (i=0; i<gearInputs.length; i++) {
var gearName = gearInputs[i].value,
  gearButton = document.getElementById(i);
  if(gearName && gearName != ''){
    gearButton.innerHTML = '<span class="resultsButtons">' + gearName +  '</span>';
  }


    parseInt

    для диаметра колес
  car.addWheel(new Wheel(diameter, brand));
  car.addWheel(new Wheel(diameter, brand));
  (<HTMLInputElement>document.getElementById("infoWheel")).innerText =
    " WHEELS: " + JSON.stringify(car.wheels);*/
