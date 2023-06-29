function solve(fruit, weightInGrams, price){

    let weight = weightInGrams / 1000;
    let money = weight * price;
    
    let result = `I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`
    console.log(result);


}

solve('orange', 2500, 1.80)