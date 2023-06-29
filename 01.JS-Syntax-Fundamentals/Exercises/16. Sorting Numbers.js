function solve(array){

    array.sort(function(a, b){return a-b});
    for (let index = 1; index < array.length; index += 2) {

        array.splice(index, 0, array[array.length-1])
        array.splice(array.length-1, 1)
    }
    return(array);
}
    
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
    
