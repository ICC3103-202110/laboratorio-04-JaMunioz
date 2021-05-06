function view(counter){
    return (`        Count: ${counter}\n                         \n`
    +`        (+) (-)          \n                         \n`
    +`                         \n        (q) for quit     \n`)
}

function update(msg, counter){

    if (msg == '+') {
        counter += 1;
        return counter;
    }   
    else{
        if (msg == '-') {
            counter -= 1;
            return counter;
        }   
        else{
            return counter;  
        }
    }
}

//input
let prompt = require('prompt-sync')();

let counter = 0;
let msg;

while (true){
    process.stdout.write('\033c');
    console.log(view(counter));
    msg = prompt('What  would you do? ');
    counter = update(msg, counter);
    if (counter == 2){ 
        break;
    }
}
