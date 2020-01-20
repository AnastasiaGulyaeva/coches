let userCar: Car;

function createCar() {
  let plate = (<HTMLInputElement>document.getElementById("plate")).value;
  let color = (<HTMLInputElement>document.getElementById("color")).value;
  let brand = (<HTMLInputElement>document.getElementById("brand")).value;

  userCar = new Car(plate, color, brand);

  (<HTMLInputElement>document.getElementById("infoCar")).innerText =
    "PLATE: " +
    userCar.plate +
    " COLOR: " +
    userCar.color +
    " BRAND: " +
    userCar.brand;

  showWheelForm();
}

function showWheelForm() {
  const carForm = <HTMLInputElement>document.getElementById("carForm");
  const carWheel = <HTMLInputElement>document.getElementById("wheelform");
  carForm.classList.add("d-none");
  carWheel.classList.remove("d-none");
}

function createWheel() {
  for (let i = 1; i < 5; i++) {
    let diameter = (<HTMLInputElement>document.getElementById("diameter" + i))
      .valueAsNumber;
    let brand = (<HTMLInputElement>document.getElementById("brand" + i)).value;
    console.log(diameter + brand);
    userCar.addWheel(new Wheel(diameter, brand));
  }

  (<HTMLInputElement>document.getElementById("infoWheel")).innerText =
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
