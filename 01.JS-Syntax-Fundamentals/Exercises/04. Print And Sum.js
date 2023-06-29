function solve(startNumber, endNumber){
    
    let arr = [];
    let arrIndex = 0;
    let sum = 0;

    for (let index = startNumber; index <= endNumber; index++) {
        
        sum += index;
        arr[arrIndex] = index;
        arrIndex++;
        
    }
    //console.log(...arr);
    console.log(arr.join(" "));
    console.log(`Sum: ${sum}`);
}

solve(0, 26);