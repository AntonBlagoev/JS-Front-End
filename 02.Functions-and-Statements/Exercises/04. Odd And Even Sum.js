function sumOddAndEven(number){

    let oddSum = 0;
    let evenSum = 0;

    let array = String(number).split('').map(Number);

    for (let i = 0; i < array.length; i++) {
       
        if (array[i] % 2 === 0) {
            evenSum += array[i];
        }
        else {
            oddSum += array[i];
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

sumOddAndEven(3495892137259234);