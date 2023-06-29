function solve(arr, numberOfRotations){

    for (let index = 0; index < numberOfRotations; index++) {
        
        arr.splice(arr.length, 0, arr[0]);
        arr.splice(0, 1);        
    }
    console.log(...arr);
}


solve([32, 21, 61, 1], 4);