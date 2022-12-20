// write a function that takes a minimum number and a maximum number
// using a for loop, log out all odd numbers between min and max
// not to include min or max themselves


const prompt = require("prompt-promise");





async function minMax() {
    let array = [];
    const min = await prompt("Enter your minimum: ");
    const max = await prompt("Enter your maximum: ");


    let number = parseInt(min);
    array.push(number);  // 1
    // array.push(max);  // 11
    
    const diff = max - min;  // 10
    let x = array[0];
    for(i=0; i < diff; i++){  // 2 => 11
        const wee = array[0] + 1; // [1] + 1
        x++;
        array.push(x);
        if(array[i] % 2 > 0){  //[1 % 2]
            // dont log
        } else if (x != max){

            console.log(x);
        }

    }

    


process.exit();





    

}


minMax();

