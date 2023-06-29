function solve(num, op1, op2, op3, op4, op5){

    let opsArr = [op1, op2, op3, op4, op5];
    let result = num;

    for (let index = 0; index < 5; index++) {

        if (opsArr[index] === 'chop') {
            result /= 2;
        }
        else if(opsArr[index] === 'dice') {
            result = Math.sqrt(result);
        }
        else if(opsArr[index] === 'spice') {
            result ++;
        }
        else if(opsArr[index] === 'bake') {
            result *= 3;
        }
        else if(opsArr[index] === 'fillet') {
            result *= 0.8;
        }
        result = Math.abs(result);
        console.log(result);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');