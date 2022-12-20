const prompt = require("prompt-promise");

// ask user a math question ie: "What is 5 + 7?"


let attempts = 0;

async function mathQ(){
    answer = 12;


    while(attempts < 3) {
        attempts = await askQuestion();
    }
    process.exit();

}

async function askQuestion() {

    const askQ = await prompt ("What is 5 + 7? ");

    if(askQ != 12) {
        console.log("INCORRECT");
        attempts += 1;
        return attempts;
    } else {
        console.log("Good job")
        attempts = 3;
        return attempts;
    }
    
    
}

mathQ();