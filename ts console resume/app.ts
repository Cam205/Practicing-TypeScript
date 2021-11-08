interface resumeInterface {
    name: string,
    career: string,
    description: string,
    age: number
}

let resume: resumeInterface = {
    name: "Cameron Buchanan",
    career: "Fullstack Developer",
    description: "Junior developer.",
    age: 22
};

console.log("Name: " + resume.name.toUpperCase());
console.log("Career: " + resume.career);
console.log("Description: " + resume.description);
console.log("\n") // blank line for output readability 
let interests : string[] = ['fourwheelers', 'basketball', 'Video games'];


//Interests Section
console.log("Interests: ");

for (let i = 0; i < interests.length; i++) {
    console.log("* " + interests[i] + "\n")
};

console.log("\n") // blank line for output readability 


//Previous Experience Section
interface previousExperienceInterface {
    company: string,
    title: string,
    role: string
}

let previousExperience : previousExperienceInterface[] = [{
    company: 'All Seasons Lawn Service',
    title: 'Foreman',
    role: 'Supervised employees',
}];

function displayPosition(company : string, title : string, description : string) {
    console.log("Company: " + company + "\n")
    console.log("Title: " + title + "\n")
    console.log("Description: " + description + "\n")
    console.log("\n")
}


console.log("Previous Experience: ");

for (let i = 0; i < previousExperience.length; i++) {
displayPosition(previousExperience[i].company, previousExperience[i].title, previousExperience[i].role)
};

interface skillsInterface {
    skill: string;
    isCool: boolean
}


// Skills section
let skills: skillsInterface[] = [{
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


function displaySkills(theSkill: string, isItCool: boolean) {
    if (isItCool == true) {
        console.log("* BAM: " + theSkill)
    } else {
        console.log("*" + theSkill)
    }
}

console.log("\n")
console.log("My Skills:")


for (let i = 0; i < skills.length; i++) {
    displaySkills(skills[i].skill, skills[i].isCool)
}