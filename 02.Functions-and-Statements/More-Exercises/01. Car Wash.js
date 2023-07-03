function solve(commands){
    let cleanPercentage = 0;

    for (let i = 0; i < commands.length; i++) {
        const element = commands[i];

        if(element=== 'soap'){
            cleanPercentage +=10
        }
        else if(element === "water"){
            cleanPercentage *= 1.2;
        }
        else if(element=== "vacuum cleaner"){
            cleanPercentage *= 1.25;
        }
        else if(element === "mud"){
            cleanPercentage *= 0.9;
        }
            
    }
    console.log(`The car is ${cleanPercentage.toFixed(2)}% clean.`)
}

solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);