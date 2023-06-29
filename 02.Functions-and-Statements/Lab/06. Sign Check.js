function signCheck(numOne, numTwo, numThree){
    let result = 'Negative';
    if ((numOne < 0 && numTwo < 0 && numThree >= 0) || 
        (numOne < 0 && numThree < 0 && numTwo >= 0) || 
        (numTwo < 0 && numThree < 0 && numOne >= 0) ||
        (numOne >=0 && numTwo >= 0 && numThree >= 0)) {
        result = 'Positive';
    }

    console.log(result);
}

signCheck(6, 12, 15);