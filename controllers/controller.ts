function createCar(plate: string, brand: string, color: string) {
  plate = <HTMLInputElement>document.getElementById("plate").value;
  color = <HTMLInputElement>document.getElementById("color").value;
  brand = <HTMLInputElement>document.getElementById("brand").value;

  document.body.innerText =
    "PLATE: " + car.plate + " COLOR: " + car.color + " BRAND: " + car.brand;
}

/*  let car = new Car(plate, color, brand);
  car.addWheel(new Wheel(2, "SEAT"));
  

 " WHEELS: " + JSON.stringify(car.wheels);
/* car.addWheel(new Wheel(2, "SEAT")); */
