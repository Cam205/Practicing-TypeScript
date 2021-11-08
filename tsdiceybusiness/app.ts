let dieArray: Die[] = []; // Values added when die are added. Used in

const newDiceBtn = <HTMLButtonElement>(
  document.getElementById("btn-generate")
);
const rerollDiceBtn = <HTMLButtonElement>(
  document.getElementById("btn-roll")
);
const sumDiceBtn = <HTMLButtonElement>(
  document.getElementById("btn-sum")
);
const diceContainer = <HTMLButtonElement>(
  document.getElementById("dice-container")
);



newDiceBtn.addEventListener("click", () => {
  console.log("New Dice Button Clicked");
  new Die();
});

rerollDiceBtn.addEventListener("click", () => {
  console.log("Reroll Dice Button Clicked");
  dieArray.forEach((die) => {
    die.rollNumber();
  });
});

sumDiceBtn.addEventListener("click", () => {
  let sum = 0;
  for (let i = 0; i < dieArray.length; i++) {
    sum += dieArray[i].value;
  }
  console.log(`Sum Dice Button Clicked. Sum is ${sum}`);
  alert(`Sum of All Dice is: ${sum}`);
});

// OOP 
class Die {
  die: HTMLDivElement;
  value: number;

  constructor() {
    this.value = Math.ceil(Math.random() * 6);
    this.die = document.createElement("div");
    this.die.className = "dice";
    this.rollNumber();
    
    diceContainer.append(this.die);
    dieArray.push(this);

    this.die.addEventListener("click", () => {
      this.rollNumber();
    });

    this.die.addEventListener("dblclick", () => {
      let i = dieArray.indexOf(this);
      dieArray.splice(i, 1);
      this.die.remove();
    });
  }

  rollNumber() {
    let random1to6: number = Math.ceil(Math.random() * 6);
    this.value = random1to6;
    dieText(this.value, this.die);
  }

  delete() {
    this.die.remove();
  }
}

let dieText = (value : number, die: HTMLDivElement) => {
  // console.log(value)
  // console.log(die);
  let dieFace = "";
  if (value === 1) {
    dieFace = "&#9856";
    die.innerHTML = dieFace;
  } else if (value === 2) {
    dieFace = "&#9857";
    die.innerHTML = dieFace;
  } else if (value === 3) {
    dieFace = "&#9858";
    die.innerHTML = dieFace;
  } else if (value === 4) {
    dieFace = "&#9859";
    die.innerHTML = dieFace;
  } else if (value === 5) {
    dieFace = "&#9860";
    die.innerHTML = dieFace;
  } else if (value === 6) {
    dieFace = "&#9861";
    die.innerHTML = dieFace;
  }
};