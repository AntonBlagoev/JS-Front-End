function solve(number){

    let numberArr = number.toString().split('');
    let isTrue = 'true';
    let sum = numberArr.reduce((a, b) => parseInt(a) + parseInt(b));

    if (sum / (numberArr.length) !== parseInt(numberArr[0])) {
        isTrue = 'false';
    }

    // for (let index = 0; index < numberArr.length; index++) {
    //     if (numberArr[0] !== numberArr[index]) {
    //         isTrue = 'false';
    //         break;
    //     }
    // }

    console.log(isTrue);
    console.log(sum);
}

solve(1234)