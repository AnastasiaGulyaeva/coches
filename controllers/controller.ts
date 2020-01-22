let userCar: Car;

// добавить машину

function createCar() {
  let plate = (<HTMLInputElement>document.getElementById("plate")).value;
  const expresion = /^[0-9]{4}[a-zA-Z]{3}$/;
  if (expresion.test(plate) == true) {
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
  } else {
    alert("La matricula no es correcta. Tiene mantener 4 numeros y 3 letras");
    return;
  }
}

// скрыть/показать анкету

function showWheelForm() {
  const carForm = <HTMLInputElement>document.getElementById("carForm");
  const carWheel = <HTMLInputElement>document.getElementById("wheelform");
  carForm.classList.add("d-none");
  carWheel.classList.remove("d-none");
}

// добавить колеса

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
