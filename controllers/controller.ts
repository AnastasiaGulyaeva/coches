function createCar() {
  let plate = (<HTMLInputElement>document.getElementById("plate")).value;
  let color = (<HTMLInputElement>document.getElementById("color")).value;
  let brand = (<HTMLInputElement>document.getElementById("brand")).value;

  let car = new Car(plate, color, brand);
  document.body.innerText =
    "PLATE: " + car.plate + " COLOR: " + car.color + " BRAND: " + car.brand;
}

/*  let car = new Car(plate, color, brand);
  car.addWheel(new Wheel(2, "SEAT"));
  

 " WHEELS: " + JSON.stringify(car.wheels);
/* car.addWheel(new Wheel(2, "SEAT")); */
