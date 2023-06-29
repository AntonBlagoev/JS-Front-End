function solve(array){

    array.sort(function (a, b) {return a.localeCompare(b, undefined, { sensitivity: "base" }); });
      
    for (let index = 0; index < array.length; index++) {

        console.log(`${index+1}.${array[index]}`);
    }
}
    
solve(["John", "Bob", "Christina", "Ema"]);
    
