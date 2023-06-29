function solve(string, startIndex, count) {
    let result = "";
    
    for (let index = startIndex; index < (startIndex + count); index++) 
    {
        result += string[index];        
    }
    
    console.log(result);
}

solve('ASentence', 1, 8);