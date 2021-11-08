let myName: string = "Sam";
const numberOfUSStates: number = 50;

// let testMath = 5 + 4;

function sayHello() {
  return "Hello World!";
}

sayHello();

let name2 = "John";
let age = 17;

function checkAge(name2: string, age: number) {
  if (age < 21) {
    alert(`Sorry ${name2}, you aren't old enough to view this page!`);
  }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17); // inputs 'John' and 17 for arguments

let favoriteVegetables: string[] = ["garlic", "kale", "onions", "tomatoes"];

for (let i = 0; i < favoriteVegetables.length; i++) {
  console.log(favoriteVegetables[i]);
}

interface petInterface {
  species: string;
  name: string;
  breed: string;
}

let pet: petInterface = {
  species: "dog",
  name: "Mac",
  breed: "pit bull",
};

console.log(`${pet.name} is an ${pet.breed} ${pet.species}`);


interface peopleInterface {
    name: string;
    age: number;
}

let people: peopleInterface[] = [
    {
        name: "Davion",
        age: 45
    },
    {
        name: "Cameron",
        age: 85
    },
    {
        name: "Kj",
        age: 17
    },
    {
        name: "Will",
        age: 60
    },
    {
        name: "Antonio",
        age: 12
    }
];

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

function getLength(word: string) {
    return Number(word.length);
}

let wordLength = getLength('Hello World!');
console.log(wordLength);

if ((wordLength % 2) == 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}