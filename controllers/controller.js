"use strict";
var userCar;
// добавить машину
function createCar() {
    var plate = document.getElementById("plate").value;
    var expresion = /^[0-9]{4}[a-zA-Z]{3}$/;
    if (expresion.test(plate) == true) {
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
    else {
        alert("La matricula no es correcta. Tiene mantener 4 numeros y 3 letras");
        return;
    }
}
// скрыть/показать анкету
function showWheelForm() {
    var carForm = document.getElementById("carForm");
    var carWheel = document.getElementById("wheelform");
    carForm.classList.add("d-none");
    carWheel.classList.remove("d-none");
}
// добавить колеса
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
/*

let plateSymbol: any = plate.split("");

_____________ не работает
 
    if (plateSymbol.length < 8) {
      for (let i = 0; i < plateSymbol.length; i++) {
      if (!isNaN(plateSymbol.slice(0, 3)) && isNaN(plateSymbol.slice(4, 6))) {
        break;
      } else {
        alert("Matricula tiene que mantener 4 numeros y 3 letras");
      }
    } else {
      alert("Matricula no puede tener mas que 7 simbolos!");
      break;
    }
  }
experession regular

______________ работает. Нужно ли?

if (plateSymbol.length < 8) {
      alert("ok");
      
    } else {
      alert("Matricula no puede tener mas que 7 simbolos!");
    }

_______________ работает, но усложнила.

    function matricula() {
  let plate = (<HTMLInputElement>document.getElementById("plate")).value;

  let countNum = 0;
  let countLetra = 0;

  let plateSymbols: any = plate.split("");

  for (let plateSymbol of plateSymbols) {
    if (!isNaN(plateSymbol)) {
      alert("numero");
      countNum++;
    } else {
      alert("letra");
      countLetra++;
    }
  }
}

*/
