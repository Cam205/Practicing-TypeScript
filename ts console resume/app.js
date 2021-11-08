var resume = {
    name: "Cameron Buchanan",
    career: "Fullstack Developer",
    description: "Junior developer.",
    age: 22
};
console.log("Name: " + resume.name.toUpperCase());
console.log("Career: " + resume.career);
console.log("Description: " + resume.description);
console.log("\n"); // blank line for output readability 
var interests = ['fourwheelers', 'basketball', 'Video games'];
//Interests Section
console.log("Interests: ");
for (var i = 0; i < interests.length; i++) {
    console.log("* " + interests[i] + "\n");
}
;
console.log("\n"); // blank line for output readability 
var previousExperience = [{
        company: 'All Seasons Lawn Service',
        title: 'Foreman',
        role: 'Supervised employees'
    }];
function displayPosition(company, title, description) {
    console.log("Company: " + company + "\n");
    console.log("Title: " + title + "\n");
    console.log("Description: " + description + "\n");
    console.log("\n");
}
console.log("Previous Experience: ");
for (var i = 0; i < previousExperience.length; i++) {
    displayPosition(previousExperience[i].company, previousExperience[i].title, previousExperience[i].role);
}
;
// Skills section
var skills = [{
        skill: 'JavaScript',
        isCool: true
    }, {
        skill: 'Reading and Writing',
        isCool: false
    }, {
        skill: 'React',
        isCool: true
    }, {
        skill: 'Project Management',
        isCool: false
    },];
function displaySkills(theSkill, isItCool) {
    if (isItCool == true) {
        console.log("* BAM: " + theSkill);
    }
    else {
        console.log("*" + theSkill);
    }
}
console.log("\n");
console.log("My Skills:");
for (var i = 0; i < skills.length; i++) {
    displaySkills(skills[i].skill, skills[i].isCool);
}
