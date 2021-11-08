let name = "cameron buchanan";

console.log(name.toUpperCase())
console.log("Career: Web / App Developer")
console.log("Description: I like turtles")

//Spaces
console.log(' ')

console.log("My Interest:")
console.log("Muscle Cars")
console.log("Fourwheelers")
console.log("Stocks")
console.log("App Development")

//Spaces
console.log(' ')

console.log("My Previous Experience:")

displayPosition("Jeff State Community College", "Asscoiates Degree" , "Coded numerous projects in python, jave c++ etc..")
displayPosition("Let Bob LLC","Back-end developer", "Helped with servers and databases " )
displayPosition("All Seasons Lawn Care", "Foreman", "Supervised workers")

function displayPositions (companyName, jobTitle, description) {
    console.log( "* " + companyName + "," + " " + jobTitle + "," +" " + description)
}