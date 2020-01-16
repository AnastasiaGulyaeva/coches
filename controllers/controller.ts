let car = Car;

function createCar() {
  let plate = (<HTMLInputElement>document.getElementById("plate")).value;
  let color = (<HTMLInputElement>document.getElementById("color")).value;
  let brand = (<HTMLInputElement>document.getElementById("brand")).value;

  let car = new Car(plate, color, brand);

  (<HTMLInputElement>document.getElementById("infoCar")).innerText =
    "PLATE: " + car.plate + " COLOR: " + car.color + " BRAND: " + car.brand;

  showWheelForm();
}

function showWheelForm() {
  const carForm = <HTMLInputElement>document.getElementById("carForm");
  const carWheel = <HTMLInputElement>document.getElementById("wheelform");
  carForm.classList.add("d-none");
  carWheel.classList.remove("d-none");
}

function createWheel() {
  let brandWheel = (<HTMLInputElement>document.getElementsByClassName("brand"))
    .value;
  let diameter: number = (<HTMLInputElement>(
    document.getElementsByClassName("diameter")
  )).value;

  /* car.addWheel(new Wheel(diameter, brand));
  (<HTMLInputElement>document.getElementById("infoWheel")).innerText =
    " WHEELS: " + JSON.stringify(car.wheels);*/
}
