import inquirer from "inquirer";
class Personality {
    name;
    type;
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    getPersonality() {
        if (this.type === "1") {
            console.log("You are an extravert.");
            this.askName();
        }
        else if (this.type === "2") {
            console.log("You are an introvert.");
            this.askName(); // Call askName method for introverts
        }
        else {
            console.log("you are a mystery.");
        }
    }
    async askName() {
        const answers = await inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        });
        this.name = answers.name;
        this.sayName(); // Move the call to sayName here
    }
    sayName() {
        if (this.type === '1') {
            console.log(`Your name is ${this.name} and your personality is extrovert.`);
        }
        else {
            console.log(`Your name is ${this.name} and your personality is introvert.`);
        }
    }
}
async function main() {
    console.log("Welcome to the Personality Identification Console Application!");
    console.log("Type 1 if you like to talk to others and type 2 if you rather keep it to yourself.");
    const answers = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter your choice:',
    });
    const name = "";
    const personality = new Personality(name, answers.name);
    personality.getPersonality();
}
main();
