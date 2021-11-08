"use strict";
var myName = "Sam";
var numberOfUSStates = 50;
// let testMath = 5 + 4;
function sayHello() {
    return "Hello World!";
}
sayHello();
var name2 = "John";
var age = 17;
function checkAge(name2, age) {
    if (age < 21) {
        alert("Sorry " + name2 + ", you aren't old enough to view this page!");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17); // inputs 'John' and 17 for arguments
var favoriteVegetables = ["garlic", "kale", "onions", "tomatoes"];
for (var i = 0; i < favoriteVegetables.length; i++) {
    console.log(favoriteVegetables[i]);
}
var pet = {
    species: "dog",
    name: "Mac",
    breed: "pit bull",
};
console.log(pet.name + " is an " + pet.breed + " " + pet.species);
var people = [
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
for (var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}
function getLength(word) {
    return Number(word.length);
}
var wordLength = getLength('Hello World!');
console.log(wordLength);
if ((wordLength % 2) == 0) {
    console.log('The world is nice and even!');
}
else {
    console.log('The world is an odd place!');
}
