function factorial(num1, num2){

    function calculateFactorial(x){
        let result = 1;
        for (let i = 1; i <= x; i++) {
            result *= i;
        }
        return result;
    }

    let resultNum1 = calculateFactorial(num1);
    let resultNum2 = calculateFactorial(num2);
    
    // for (let i = 1; i <= num1; i++) {
    //     resultNum1 *= i;
    // }
    // for (let y = 1; y <= num2; y++) {
    //     resultNum2 *= y;
    // }

    let result = resultNum1 / resultNum2;

    console.log(result.toFixed(2));
}

factorial(5, 2);

