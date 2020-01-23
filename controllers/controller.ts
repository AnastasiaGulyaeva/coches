let userCar: Car;

// добавить машину

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

// скрыть/показать анкету

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

    // if (!(diameter > 0.4 && diameter < 2)) {
    //   alert(
    //     "El diamertro de la rueda " +
    //       i +
    //       " tiene que ser mas que 0.4 y menos que 2."
    //   );
    //   error++;
    // }
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

// функция проверки

function validar(diameter: number) {
  if (diameter > 0.4 && diameter < 2) {
    return true;
  } else {
    return false;
  }
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


________ посл вариант

let count = 0;

  for (let i = 1; i < 5; i++) {
    let diameter = (<HTMLInputElement>document.getElementById("diameter" + i))
      .valueAsNumber;
    let brand = (<HTMLInputElement>document.getElementById("brand" + i)).value;

    if (diameter > 0.4 && diameter < 2) {
      count++;
        if(count == 4) {
      userCar.addWheel(new Wheel(diameter, brand)); // [i] para subir los 4 ruedas?
    }

      (<HTMLInputElement>document.getElementById("infoWheel")).innerText =
        "WHEELS: " + JSON.stringify(userCar.wheels);
    } else {
      alert(`El diametro de la rueda ${i} no es correcto.`);
    }
  }
  (<HTMLInputElement>document.getElementById("infoWheel")).innerText =
        "WHEELS: " + JSON.stringify(userCar.wheels);

        funcion validar (diameter:number) {
         if (diameter > 0.4 && diameter < 2) {
           return true;
         } else {
           return false;
         }

        }

*/
