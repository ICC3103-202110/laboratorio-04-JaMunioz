function  app(value){
    let prompt = require('prompt-sync')();
    let counter = value;
    
    while (true){
        const currentView = view(counter);
        console.clear();
        console.log(currentView);
        msg = prompt('What  would you do? ');
        counter = update(msg, counter);
        if (counter == 's'){
            break;
        }
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
            if (msg == 'q') {
                return 's';           
            } 
            else{
                return counter;
            } 
        }
    }
}

app(0);