function view(counter){
    return (`        Count: ${counter}\n                         \n`
    +`        (+) (-)          \n                         \n`
    +`                         \n        (q) for quit     \n`)
}

function update(msg, counter){
    if (msg == "+"){
        return counter ++;
    }
    if (msg == "-"){
        return counter --;
    }
}

//input
let prompt = require('prompt-sync')();

while (true){
    process.stdout.write('\033c');
    let counter = 0;
    console.log(view(counter));
    let msg = prompt('What  would you do? ');
    update(msg, counter);
    if (counter == 2){ 
        break;
    }
}