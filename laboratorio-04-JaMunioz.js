function  app(value){
    let prompt = require('prompt-sync')();
    let counter = value;
    
    while (true){
        const currentView = view(counter);
        console.clear();
        console.log(currentView);
        const msg = prompt('What would you do? ');
        if (msg == 'q'){
            break;
        }
        counter = update(msg, counter);
    }   
}

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

app(0);