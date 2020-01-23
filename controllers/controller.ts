let userCar: Car;

// añadir nuevo coche

function createCar() {
  let plate = (<HTMLInputElement>document.getElementById("plate")).value;
  const expresion = /^[0-9]{4}[a-zA-Z]{3}$/;
  if (expresion.test(plate) == true) {
    let color = (<HTMLInputElement>document.getElementById("color")).value;
    let brand = (<HTMLInputElement>document.getElementById("brand")).value;

    userCar = new Car(plate, color, brand);

    (<HTMLInputElement>document.getElementById("car")).innerText = "Car: ";
    (<HTMLInputElement>document.getElementById("infoPlate")).innerText =
      "Plate: " + userCar.plate;
    (<HTMLInputElement>document.getElementById("infoColor")).innerText =
      "Color: " + userCar.color;
    (<HTMLInputElement>document.getElementById("infoBrand")).innerText =
      "Brand: " + userCar.brand;

    showWheelForm();
  } else {
    alert("La matricula no es correcta. Tiene mantener 4 numeros y 3 letras");
    return;
  }
}

// ocultar/mostrar formulario

function showWheelForm() {
  const carForm = <HTMLInputElement>document.getElementById("carForm");
  const carWheel = <HTMLInputElement>document.getElementById("wheelform");
  const cardCar = <HTMLInputElement>document.getElementById("cardCar");
  carForm.classList.add("d-none");
  carWheel.classList.remove("d-none");
  cardCar.classList.remove("d-none");
}

function showWheelResult() {
  const cardWheel = <HTMLInputElement>document.getElementById("cardWheel");
  cardWheel.classList.remove("d-none");
}
// добавить колеса

function createWheel() {
  let error = 0;

  for (let i = 1; i < 5; i++) {
    let diameter = (<HTMLInputElement>document.getElementById("diameter" + i))
      .valueAsNumber;

    if (!validar(diameter)) {
      alert(
        "El diamertro de la rueda " +
          i +
          " tiene que ser mas que 0.4 y menos que 2."
      );
      error++;
    }
  }

  if (error == 0) {
    for (let i = 1; i < 5; i++) {
      let diameter = (<HTMLInputElement>document.getElementById("diameter" + i))
        .valueAsNumber;
      let brand = (<HTMLInputElement>document.getElementById("brand" + i))
        .value;

      userCar.addWheel(new Wheel(diameter, brand));
    }
  }

  // imprimir los resultados de wheels
  showWheelResult();

  (<HTMLInputElement>document.getElementById("wheel")).innerText = "Wheels: ";

  (<HTMLInputElement>document.getElementById("infoWheel1")).innerText =
    "Wheel 1 : Brand: " +
    userCar.wheels[0].brand +
    " Diameter: " +
    userCar.wheels[0].diameter;

  (<HTMLInputElement>document.getElementById("infoWheel2")).innerText =
    "Wheel 2 : Brand: " +
    userCar.wheels[1].brand +
    " Diameter: " +
    userCar.wheels[1].diameter;

  (<HTMLInputElement>document.getElementById("infoWheel3")).innerText =
    "Wheel 3 : Brand: " +
    userCar.wheels[2].brand +
    " Diameter: " +
    userCar.wheels[2].diameter;

  (<HTMLInputElement>document.getElementById("infoWheel4")).innerText =
    "Wheel 4 : Brand: " +
    userCar.wheels[3].brand +
    " Diameter: " +
    userCar.wheels[3].diameter;
}

// comprobar las ruedas

function validar(diameter: number) {
  if (diameter > 0.4 && diameter < 2) {
    return true;
  } else {
    return false;
  }
}
